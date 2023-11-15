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

export const useSensorGetAllHook = () => {
	const sensorGetAll = useCustomClient<SensorDto[]>();

	return () => {
		return sensorGetAll({ url: `/sensor`, method: "get" });
	};
};

export const getSensorGetAllQueryKey = () => {
	return [`/sensor`] as const;
};

export const useSensorGetAllQueryOptions = <
	TData = Awaited<ReturnType<ReturnType<typeof useSensorGetAllHook>>>,
	TError = ErrorType<InternalErrorResponse>,
>(options?: {
	query?: CreateQueryOptions<
		Awaited<ReturnType<ReturnType<typeof useSensorGetAllHook>>>,
		TError,
		TData
	>;
}) => {
	const { query: queryOptions } = options ?? {};

	const queryKey = queryOptions?.queryKey ?? getSensorGetAllQueryKey();

	const sensorGetAll = useSensorGetAllHook();

	const queryFn: QueryFunction<Awaited<ReturnType<ReturnType<typeof useSensorGetAllHook>>>> = () =>
		sensorGetAll();

	return { queryKey, queryFn, ...queryOptions } as CreateQueryOptions<
		Awaited<ReturnType<ReturnType<typeof useSensorGetAllHook>>>,
		TError,
		TData
	> & { queryKey: QueryKey };
};

export type SensorGetAllQueryResult = NonNullable<
	Awaited<ReturnType<ReturnType<typeof useSensorGetAllHook>>>
>;
export type SensorGetAllQueryError = ErrorType<InternalErrorResponse>;

export const createSensorGetAll = <
	TData = Awaited<ReturnType<ReturnType<typeof useSensorGetAllHook>>>,
	TError = ErrorType<InternalErrorResponse>,
>(options?: {
	query?: CreateQueryOptions<
		Awaited<ReturnType<ReturnType<typeof useSensorGetAllHook>>>,
		TError,
		TData
	>;
}): CreateQueryResult<TData, TError> & { queryKey: QueryKey } => {
	const queryOptions = useSensorGetAllQueryOptions(options);

	const query = createQuery(queryOptions) as CreateQueryResult<TData, TError> & {
		queryKey: QueryKey;
	};

	query.queryKey = queryOptions.queryKey;

	return query;
};

export const useSensorEditHook = () => {
	const sensorEdit = useCustomClient<unknown>();

	return (request: BodyType<Request>) => {
		return sensorEdit({
			url: `/sensor`,
			method: "put",
			headers: { "Content-Type": "application/json" },
			data: request,
		});
	};
};

export const useSensorEditMutationOptions = <
	TError = ErrorType<ErrorResponse | InternalErrorResponse>,
	TContext = unknown,
>(options?: {
	mutation?: CreateMutationOptions<
		Awaited<ReturnType<ReturnType<typeof useSensorEditHook>>>,
		TError,
		{ data: BodyType<Request> },
		TContext
	>;
}): CreateMutationOptions<
	Awaited<ReturnType<ReturnType<typeof useSensorEditHook>>>,
	TError,
	{ data: BodyType<Request> },
	TContext
> => {
	const { mutation: mutationOptions } = options ?? {};

	const sensorEdit = useSensorEditHook();

	const mutationFn: MutationFunction<
		Awaited<ReturnType<ReturnType<typeof useSensorEditHook>>>,
		{ data: BodyType<Request> }
	> = (props) => {
		const { data } = props ?? {};

		return sensorEdit(data);
	};

	return { mutationFn, ...mutationOptions };
};

export type SensorEditMutationResult = NonNullable<
	Awaited<ReturnType<ReturnType<typeof useSensorEditHook>>>
>;
export type SensorEditMutationBody = BodyType<Request>;
export type SensorEditMutationError = ErrorType<ErrorResponse | InternalErrorResponse>;

export const createSensorEdit = <
	TError = ErrorType<ErrorResponse | InternalErrorResponse>,
	TContext = unknown,
>(options?: {
	mutation?: CreateMutationOptions<
		Awaited<ReturnType<ReturnType<typeof useSensorEditHook>>>,
		TError,
		{ data: BodyType<Request> },
		TContext
	>;
}) => {
	const mutationOptions = useSensorEditMutationOptions(options);

	return createMutation(mutationOptions);
};
export const useSensorDeleteHook = () => {
	const sensorDelete = useCustomClient<unknown>();

	return (request2: BodyType<Request2>) => {
		return sensorDelete({
			url: `/sensor`,
			method: "delete",
			headers: { "Content-Type": "*/*" },
			data: request2,
		});
	};
};

export const useSensorDeleteMutationOptions = <
	TError = ErrorType<ErrorResponse | InternalErrorResponse>,
	TContext = unknown,
>(options?: {
	mutation?: CreateMutationOptions<
		Awaited<ReturnType<ReturnType<typeof useSensorDeleteHook>>>,
		TError,
		{ data: BodyType<Request2> },
		TContext
	>;
}): CreateMutationOptions<
	Awaited<ReturnType<ReturnType<typeof useSensorDeleteHook>>>,
	TError,
	{ data: BodyType<Request2> },
	TContext
> => {
	const { mutation: mutationOptions } = options ?? {};

	const sensorDelete = useSensorDeleteHook();

	const mutationFn: MutationFunction<
		Awaited<ReturnType<ReturnType<typeof useSensorDeleteHook>>>,
		{ data: BodyType<Request2> }
	> = (props) => {
		const { data } = props ?? {};

		return sensorDelete(data);
	};

	return { mutationFn, ...mutationOptions };
};

export type SensorDeleteMutationResult = NonNullable<
	Awaited<ReturnType<ReturnType<typeof useSensorDeleteHook>>>
>;
export type SensorDeleteMutationBody = BodyType<Request2>;
export type SensorDeleteMutationError = ErrorType<ErrorResponse | InternalErrorResponse>;

export const createSensorDelete = <
	TError = ErrorType<ErrorResponse | InternalErrorResponse>,
	TContext = unknown,
>(options?: {
	mutation?: CreateMutationOptions<
		Awaited<ReturnType<ReturnType<typeof useSensorDeleteHook>>>,
		TError,
		{ data: BodyType<Request2> },
		TContext
	>;
}) => {
	const mutationOptions = useSensorDeleteMutationOptions(options);

	return createMutation(mutationOptions);
};
export const useSensorCreateHook = () => {
	const sensorCreate = useCustomClient<Sensor>();

	return (request3: BodyType<Request3>) => {
		return sensorCreate({
			url: `/sensor`,
			method: "post",
			headers: { "Content-Type": "application/json" },
			data: request3,
		});
	};
};

export const useSensorCreateMutationOptions = <
	TError = ErrorType<ErrorResponse | InternalErrorResponse>,
	TContext = unknown,
>(options?: {
	mutation?: CreateMutationOptions<
		Awaited<ReturnType<ReturnType<typeof useSensorCreateHook>>>,
		TError,
		{ data: BodyType<Request3> },
		TContext
	>;
}): CreateMutationOptions<
	Awaited<ReturnType<ReturnType<typeof useSensorCreateHook>>>,
	TError,
	{ data: BodyType<Request3> },
	TContext
> => {
	const { mutation: mutationOptions } = options ?? {};

	const sensorCreate = useSensorCreateHook();

	const mutationFn: MutationFunction<
		Awaited<ReturnType<ReturnType<typeof useSensorCreateHook>>>,
		{ data: BodyType<Request3> }
	> = (props) => {
		const { data } = props ?? {};

		return sensorCreate(data);
	};

	return { mutationFn, ...mutationOptions };
};

export type SensorCreateMutationResult = NonNullable<
	Awaited<ReturnType<ReturnType<typeof useSensorCreateHook>>>
>;
export type SensorCreateMutationBody = BodyType<Request3>;
export type SensorCreateMutationError = ErrorType<ErrorResponse | InternalErrorResponse>;

export const createSensorCreate = <
	TError = ErrorType<ErrorResponse | InternalErrorResponse>,
	TContext = unknown,
>(options?: {
	mutation?: CreateMutationOptions<
		Awaited<ReturnType<ReturnType<typeof useSensorCreateHook>>>,
		TError,
		{ data: BodyType<Request3> },
		TContext
	>;
}) => {
	const mutationOptions = useSensorCreateMutationOptions(options);

	return createMutation(mutationOptions);
};
