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
import type {
	ErrorResponse,
	InternalErrorResponse,
	Request,
	Request2,
	Request3,
	Sensor,
	SensorDto,
} from "./api.schemas";
import { useCustomClient } from "../mutator/useCustomClient";
import type { ErrorType, BodyType } from "../mutator/useCustomClient";

export const useKayordIOTFeaturesSensorGetAllHook = () => {
	const kayordIOTFeaturesSensorGetAll = useCustomClient<SensorDto[]>();

	return () => {
		return kayordIOTFeaturesSensorGetAll({ url: `/sensor`, method: "get" });
	};
};

export const getKayordIOTFeaturesSensorGetAllQueryKey = () => {
	return [`/sensor`] as const;
};

export const useKayordIOTFeaturesSensorGetAllQueryOptions = <
	TData = Awaited<ReturnType<ReturnType<typeof useKayordIOTFeaturesSensorGetAllHook>>>,
	TError = ErrorType<InternalErrorResponse>,
>(options?: {
	query?: CreateQueryOptions<
		Awaited<ReturnType<ReturnType<typeof useKayordIOTFeaturesSensorGetAllHook>>>,
		TError,
		TData
	>;
}) => {
	const { query: queryOptions } = options ?? {};

	const queryKey = queryOptions?.queryKey ?? getKayordIOTFeaturesSensorGetAllQueryKey();

	const kayordIOTFeaturesSensorGetAll = useKayordIOTFeaturesSensorGetAllHook();

	const queryFn: QueryFunction<
		Awaited<ReturnType<ReturnType<typeof useKayordIOTFeaturesSensorGetAllHook>>>
	> = () => kayordIOTFeaturesSensorGetAll();

	return { queryKey, queryFn, ...queryOptions } as CreateQueryOptions<
		Awaited<ReturnType<ReturnType<typeof useKayordIOTFeaturesSensorGetAllHook>>>,
		TError,
		TData
	> & { queryKey: QueryKey };
};

export type KayordIOTFeaturesSensorGetAllQueryResult = NonNullable<
	Awaited<ReturnType<ReturnType<typeof useKayordIOTFeaturesSensorGetAllHook>>>
>;
export type KayordIOTFeaturesSensorGetAllQueryError = ErrorType<InternalErrorResponse>;

export const createKayordIOTFeaturesSensorGetAll = <
	TData = Awaited<ReturnType<ReturnType<typeof useKayordIOTFeaturesSensorGetAllHook>>>,
	TError = ErrorType<InternalErrorResponse>,
>(options?: {
	query?: CreateQueryOptions<
		Awaited<ReturnType<ReturnType<typeof useKayordIOTFeaturesSensorGetAllHook>>>,
		TError,
		TData
	>;
}): CreateQueryResult<TData, TError> & { queryKey: QueryKey } => {
	const queryOptions = useKayordIOTFeaturesSensorGetAllQueryOptions(options);

	const query = createQuery(queryOptions) as CreateQueryResult<TData, TError> & {
		queryKey: QueryKey;
	};

	query.queryKey = queryOptions.queryKey;

	return query;
};

export const useKayordIOTFeaturesSensorEditHook = () => {
	const kayordIOTFeaturesSensorEdit = useCustomClient<unknown>();

	return (request: BodyType<Request>) => {
		return kayordIOTFeaturesSensorEdit({
			url: `/sensor`,
			method: "put",
			headers: { "Content-Type": "application/json" },
			data: request,
		});
	};
};

export const useKayordIOTFeaturesSensorEditMutationOptions = <
	TError = ErrorType<ErrorResponse | InternalErrorResponse>,
	TContext = unknown,
>(options?: {
	mutation?: CreateMutationOptions<
		Awaited<ReturnType<ReturnType<typeof useKayordIOTFeaturesSensorEditHook>>>,
		TError,
		{ data: BodyType<Request> },
		TContext
	>;
}): CreateMutationOptions<
	Awaited<ReturnType<ReturnType<typeof useKayordIOTFeaturesSensorEditHook>>>,
	TError,
	{ data: BodyType<Request> },
	TContext
> => {
	const { mutation: mutationOptions } = options ?? {};

	const kayordIOTFeaturesSensorEdit = useKayordIOTFeaturesSensorEditHook();

	const mutationFn: MutationFunction<
		Awaited<ReturnType<ReturnType<typeof useKayordIOTFeaturesSensorEditHook>>>,
		{ data: BodyType<Request> }
	> = (props) => {
		const { data } = props ?? {};

		return kayordIOTFeaturesSensorEdit(data);
	};

	return { mutationFn, ...mutationOptions };
};

export type KayordIOTFeaturesSensorEditMutationResult = NonNullable<
	Awaited<ReturnType<ReturnType<typeof useKayordIOTFeaturesSensorEditHook>>>
>;
export type KayordIOTFeaturesSensorEditMutationBody = BodyType<Request>;
export type KayordIOTFeaturesSensorEditMutationError = ErrorType<
	ErrorResponse | InternalErrorResponse
>;

export const createKayordIOTFeaturesSensorEdit = <
	TError = ErrorType<ErrorResponse | InternalErrorResponse>,
	TContext = unknown,
>(options?: {
	mutation?: CreateMutationOptions<
		Awaited<ReturnType<ReturnType<typeof useKayordIOTFeaturesSensorEditHook>>>,
		TError,
		{ data: BodyType<Request> },
		TContext
	>;
}) => {
	const mutationOptions = useKayordIOTFeaturesSensorEditMutationOptions(options);

	return createMutation(mutationOptions);
};
export const useKayordIOTFeaturesSensorDeleteHook = () => {
	const kayordIOTFeaturesSensorDelete = useCustomClient<unknown>();

	return (request2: BodyType<Request2>) => {
		return kayordIOTFeaturesSensorDelete({
			url: `/sensor`,
			method: "delete",
			headers: { "Content-Type": "*/*" },
			data: request2,
		});
	};
};

export const useKayordIOTFeaturesSensorDeleteMutationOptions = <
	TError = ErrorType<ErrorResponse | InternalErrorResponse>,
	TContext = unknown,
>(options?: {
	mutation?: CreateMutationOptions<
		Awaited<ReturnType<ReturnType<typeof useKayordIOTFeaturesSensorDeleteHook>>>,
		TError,
		{ data: BodyType<Request2> },
		TContext
	>;
}): CreateMutationOptions<
	Awaited<ReturnType<ReturnType<typeof useKayordIOTFeaturesSensorDeleteHook>>>,
	TError,
	{ data: BodyType<Request2> },
	TContext
> => {
	const { mutation: mutationOptions } = options ?? {};

	const kayordIOTFeaturesSensorDelete = useKayordIOTFeaturesSensorDeleteHook();

	const mutationFn: MutationFunction<
		Awaited<ReturnType<ReturnType<typeof useKayordIOTFeaturesSensorDeleteHook>>>,
		{ data: BodyType<Request2> }
	> = (props) => {
		const { data } = props ?? {};

		return kayordIOTFeaturesSensorDelete(data);
	};

	return { mutationFn, ...mutationOptions };
};

export type KayordIOTFeaturesSensorDeleteMutationResult = NonNullable<
	Awaited<ReturnType<ReturnType<typeof useKayordIOTFeaturesSensorDeleteHook>>>
>;
export type KayordIOTFeaturesSensorDeleteMutationBody = BodyType<Request2>;
export type KayordIOTFeaturesSensorDeleteMutationError = ErrorType<
	ErrorResponse | InternalErrorResponse
>;

export const createKayordIOTFeaturesSensorDelete = <
	TError = ErrorType<ErrorResponse | InternalErrorResponse>,
	TContext = unknown,
>(options?: {
	mutation?: CreateMutationOptions<
		Awaited<ReturnType<ReturnType<typeof useKayordIOTFeaturesSensorDeleteHook>>>,
		TError,
		{ data: BodyType<Request2> },
		TContext
	>;
}) => {
	const mutationOptions = useKayordIOTFeaturesSensorDeleteMutationOptions(options);

	return createMutation(mutationOptions);
};
export const useKayordIOTFeaturesSensorCreateHook = () => {
	const kayordIOTFeaturesSensorCreate = useCustomClient<Sensor>();

	return (request3: BodyType<Request3>) => {
		return kayordIOTFeaturesSensorCreate({
			url: `/sensor`,
			method: "post",
			headers: { "Content-Type": "application/json" },
			data: request3,
		});
	};
};

export const useKayordIOTFeaturesSensorCreateMutationOptions = <
	TError = ErrorType<ErrorResponse | InternalErrorResponse>,
	TContext = unknown,
>(options?: {
	mutation?: CreateMutationOptions<
		Awaited<ReturnType<ReturnType<typeof useKayordIOTFeaturesSensorCreateHook>>>,
		TError,
		{ data: BodyType<Request3> },
		TContext
	>;
}): CreateMutationOptions<
	Awaited<ReturnType<ReturnType<typeof useKayordIOTFeaturesSensorCreateHook>>>,
	TError,
	{ data: BodyType<Request3> },
	TContext
> => {
	const { mutation: mutationOptions } = options ?? {};

	const kayordIOTFeaturesSensorCreate = useKayordIOTFeaturesSensorCreateHook();

	const mutationFn: MutationFunction<
		Awaited<ReturnType<ReturnType<typeof useKayordIOTFeaturesSensorCreateHook>>>,
		{ data: BodyType<Request3> }
	> = (props) => {
		const { data } = props ?? {};

		return kayordIOTFeaturesSensorCreate(data);
	};

	return { mutationFn, ...mutationOptions };
};

export type KayordIOTFeaturesSensorCreateMutationResult = NonNullable<
	Awaited<ReturnType<ReturnType<typeof useKayordIOTFeaturesSensorCreateHook>>>
>;
export type KayordIOTFeaturesSensorCreateMutationBody = BodyType<Request3>;
export type KayordIOTFeaturesSensorCreateMutationError = ErrorType<
	ErrorResponse | InternalErrorResponse
>;

export const createKayordIOTFeaturesSensorCreate = <
	TError = ErrorType<ErrorResponse | InternalErrorResponse>,
	TContext = unknown,
>(options?: {
	mutation?: CreateMutationOptions<
		Awaited<ReturnType<ReturnType<typeof useKayordIOTFeaturesSensorCreateHook>>>,
		TError,
		{ data: BodyType<Request3> },
		TContext
	>;
}) => {
	const mutationOptions = useKayordIOTFeaturesSensorCreateMutationOptions(options);

	return createMutation(mutationOptions);
};