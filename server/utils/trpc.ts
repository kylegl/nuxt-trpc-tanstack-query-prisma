import * as devalue from 'devalue'
import superjson from 'superjson'

// TODO pull request TRPC for a docs update to devalue, looks like functions have changed

interface DataTransformer {
  serialize(object: any): any
  deserialize(object: any): any
}
interface CombinedDataTransformer {
  input: DataTransformer
  output: DataTransformer
}

export const transformer: CombinedDataTransformer = {
  input: superjson,
  output: {
    serialize: object => devalue.uneval(object),
    deserialize: object => devalue.parse(`(${object})`),
  },
}
