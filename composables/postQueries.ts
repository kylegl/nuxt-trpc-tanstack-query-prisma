import type { InitialDataFunction, QueryOptions, UseQueryOptions } from '@tanstack/vue-query'
import { useQuery as _useQuery, useQueryClient } from '@tanstack/vue-query'
import type { TRPCClientErrorLike, TRPCRequestOptions } from '@trpc/client'
import type { AnyProcedure, inferProcedureInput, inferRouterOutputs } from '@trpc/server'
import type { inferTransformedProcedureOutput } from '@trpc/server/shared'
import type { AppRouter } from '~~/server/trpc/router/appRouter'

export type QueryParams = string

type RouterOutput = inferRouterOutputs<AppRouter>

export interface TRPCVueRequestOptions
  // For RQ, we use their internal AbortSignals instead of letting the user pass their own
  extends Omit<TRPCRequestOptions, 'signal'> {
  /**
   * Opt out of SSR for this query by passing `ssr: false`
   */
  ssr?: boolean
  /**
   * Opt out or into aborting request on unmount
   */
  abortOnUnmount?: boolean
}

export interface TRPCUseQueryBaseOptions {
  /**
   * tRPC-related options
   */
  trpc?: TRPCVueRequestOptions
}

export interface UseTRPCQueryOptions<TPath, TInput, TOutput, TData, TError>
  extends UseQueryOptions<TOutput, TError, TData, [TPath, TInput]>,
  TRPCUseQueryBaseOptions { }

export interface DefinedUseTRPCQueryOptions<
  TPath,
  TInput,
  TOutput,
  TData,
  TError,
> extends UseTRPCQueryOptions<TPath, TInput, TOutput, TData, TError> {
  initialData: TOutput | InitialDataFunction<TOutput>
}

export interface TRPCQueryOptions<TPath, TInput, TData, TError>
  extends QueryOptions<TData, TError, TData, [TPath, TInput]>,
  TRPCUseQueryBaseOptions { }

export interface ProcedureUseQuery<
   TProcedure extends AnyProcedure,
   TPath extends string,
 > {
  <
    TQueryFnData = inferTransformedProcedureOutput<TProcedure>,
    TData = inferTransformedProcedureOutput<TProcedure>,
  >(
    input: inferProcedureInput<TProcedure>,
    opts: DefinedUseTRPCQueryOptions<
      TPath,
      inferProcedureInput<TProcedure>,
      TQueryFnData,
      TData,
      TRPCClientErrorLike<TProcedure>
    >,
  ): DefinedUseTRPCQueryResult<TData, TRPCClientErrorLike<TProcedure>>
}

// TODO figure out DefinedUseTRPCQueryResult - look into useHookResult

export function getPathAndInput(params: QueryParams) {
  const [model, action] = params.split('.')

  return { model, action }
}

export function useQuery(params: QueryParams, input) {
  const { $client } = useNuxtApp()

  const { model, action } = getPathAndInput(params)
  const queryFn = async (): RouterOutput[model][action] => $client[model][action].useQuery({ input })

  return _useQuery([model, action], queryFn)
}

