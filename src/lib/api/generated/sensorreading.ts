/**
 * Generated by orval v6.20.0 🍺
 * Do not edit manually.
 * Kayord.IOT
 * OpenAPI spec version: v1
 */
import { createQuery } from "@tanstack/svelte-query";
import type {
	CreateQueryOptions,
	CreateQueryResult,
	QueryFunction,
	QueryKey,
} from "@tanstack/svelte-query";
import type { InternalErrorResponse, SensorReading } from "./api.schemas";
import { useCustomClient } from "../mutator/useCustomClient";
import type { ErrorType } from "../mutator/useCustomClient";

export const useSensorReadingGetAllTodayHook = () => {
	const sensorReadingGetAllToday = useCustomClient<SensorReading[]>();

	return () => {
		return sensorReadingGetAllToday({ url: `/sensorReading`, method: "get" });
	};
};

export const getSensorReadingGetAllTodayQueryKey = () => {
	return [`/sensorReading`] as const;
};

export const useSensorReadingGetAllTodayQueryOptions = <
	TData = Awaited<ReturnType<ReturnType<typeof useSensorReadingGetAllTodayHook>>>,
	TError = ErrorType<InternalErrorResponse>,
>(options?: {
	query?: CreateQueryOptions<
		Awaited<ReturnType<ReturnType<typeof useSensorReadingGetAllTodayHook>>>,
		TError,
		TData
	>;
}) => {
	const { query: queryOptions } = options ?? {};

	const queryKey = queryOptions?.queryKey ?? getSensorReadingGetAllTodayQueryKey();

	const sensorReadingGetAllToday = useSensorReadingGetAllTodayHook();

	const queryFn: QueryFunction<
		Awaited<ReturnType<ReturnType<typeof useSensorReadingGetAllTodayHook>>>
	> = () => sensorReadingGetAllToday();

	return { queryKey, queryFn, ...queryOptions } as CreateQueryOptions<
		Awaited<ReturnType<ReturnType<typeof useSensorReadingGetAllTodayHook>>>,
		TError,
		TData
	> & { queryKey: QueryKey };
};

export type SensorReadingGetAllTodayQueryResult = NonNullable<
	Awaited<ReturnType<ReturnType<typeof useSensorReadingGetAllTodayHook>>>
>;
export type SensorReadingGetAllTodayQueryError = ErrorType<InternalErrorResponse>;

export const createSensorReadingGetAllToday = <
	TData = Awaited<ReturnType<ReturnType<typeof useSensorReadingGetAllTodayHook>>>,
	TError = ErrorType<InternalErrorResponse>,
>(options?: {
	query?: CreateQueryOptions<
		Awaited<ReturnType<ReturnType<typeof useSensorReadingGetAllTodayHook>>>,
		TError,
		TData
	>;
}): CreateQueryResult<TData, TError> & { queryKey: QueryKey } => {
	const queryOptions = useSensorReadingGetAllTodayQueryOptions(options);

	const query = createQuery(queryOptions) as CreateQueryResult<TData, TError> & {
		queryKey: QueryKey;
	};

	query.queryKey = queryOptions.queryKey;

	return query;
};
