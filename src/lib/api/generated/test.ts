/**
 * Generated by orval v6.20.0 🍺
 * Do not edit manually.
 * Kayord.IOT
 * OpenAPI spec version: v1
 */
import { createMutation, createQuery } from "@tanstack/svelte-query";
import type {
	CreateMutationOptions,
	CreateQueryOptions,
	CreateQueryResult,
	MutationFunction,
	QueryFunction,
	QueryKey,
} from "@tanstack/svelte-query";
import type { InternalErrorResponse } from "./api.schemas";
import { useCustomClient } from "../mutator/useCustomClient";
import type { ErrorType } from "../mutator/useCustomClient";

export const useApiTestHook = () => {
	const apiTest = useCustomClient<string>();

	return () => {
		return apiTest({ url: `/test`, method: "get" });
	};
};

export const getApiTestQueryKey = () => {
	return [`/test`] as const;
};

export const useApiTestQueryOptions = <
	TData = Awaited<ReturnType<ReturnType<typeof useApiTestHook>>>,
	TError = ErrorType<InternalErrorResponse>,
>(options?: {
	query?: CreateQueryOptions<Awaited<ReturnType<ReturnType<typeof useApiTestHook>>>, TError, TData>;
}) => {
	const { query: queryOptions } = options ?? {};

	const queryKey = queryOptions?.queryKey ?? getApiTestQueryKey();

	const apiTest = useApiTestHook();

	const queryFn: QueryFunction<Awaited<ReturnType<ReturnType<typeof useApiTestHook>>>> = () =>
		apiTest();

	return { queryKey, queryFn, ...queryOptions } as CreateQueryOptions<
		Awaited<ReturnType<ReturnType<typeof useApiTestHook>>>,
		TError,
		TData
	> & { queryKey: QueryKey };
};

export type ApiTestQueryResult = NonNullable<
	Awaited<ReturnType<ReturnType<typeof useApiTestHook>>>
>;
export type ApiTestQueryError = ErrorType<InternalErrorResponse>;

export const createApiTest = <
	TData = Awaited<ReturnType<ReturnType<typeof useApiTestHook>>>,
	TError = ErrorType<InternalErrorResponse>,
>(options?: {
	query?: CreateQueryOptions<Awaited<ReturnType<ReturnType<typeof useApiTestHook>>>, TError, TData>;
}): CreateQueryResult<TData, TError> & { queryKey: QueryKey } => {
	const queryOptions = useApiTestQueryOptions(options);

	const query = createQuery(queryOptions) as CreateQueryResult<TData, TError> & {
		queryKey: QueryKey;
	};

	query.queryKey = queryOptions.queryKey;

	return query;
};

export const useKayordPOSFeaturesTestHook = () => {
	const kayordPOSFeaturesTest = useCustomClient<unknown>();

	return () => {
		return kayordPOSFeaturesTest({ url: `/test`, method: "post" });
	};
};

export const useKayordPOSFeaturesTestMutationOptions = <
	TError = ErrorType<InternalErrorResponse>,
	TVariables = void,
	TContext = unknown,
>(options?: {
	mutation?: CreateMutationOptions<
		Awaited<ReturnType<ReturnType<typeof useKayordPOSFeaturesTestHook>>>,
		TError,
		TVariables,
		TContext
	>;
}): CreateMutationOptions<
	Awaited<ReturnType<ReturnType<typeof useKayordPOSFeaturesTestHook>>>,
	TError,
	TVariables,
	TContext
> => {
	const { mutation: mutationOptions } = options ?? {};

	const kayordPOSFeaturesTest = useKayordPOSFeaturesTestHook();

	const mutationFn: MutationFunction<
		Awaited<ReturnType<ReturnType<typeof useKayordPOSFeaturesTestHook>>>,
		TVariables
	> = () => {
		return kayordPOSFeaturesTest();
	};

	return { mutationFn, ...mutationOptions };
};

export type KayordPOSFeaturesTestMutationResult = NonNullable<
	Awaited<ReturnType<ReturnType<typeof useKayordPOSFeaturesTestHook>>>
>;

export type KayordPOSFeaturesTestMutationError = ErrorType<InternalErrorResponse>;

export const createKayordPOSFeaturesTest = <
	TError = ErrorType<InternalErrorResponse>,
	TVariables = void,
	TContext = unknown,
>(options?: {
	mutation?: CreateMutationOptions<
		Awaited<ReturnType<ReturnType<typeof useKayordPOSFeaturesTestHook>>>,
		TError,
		TVariables,
		TContext
	>;
}) => {
	const mutationOptions = useKayordPOSFeaturesTestMutationOptions(options);

	return createMutation(mutationOptions);
};
