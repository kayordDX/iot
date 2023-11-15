<script lang="ts">
	import { createKayordIOTFeaturesSensorGetAllEndpoint } from "$lib/api";
	import { SensorCard } from "../../components/SensorCard";
	const query = createKayordIOTFeaturesSensorGetAllEndpoint();
</script>

{#if $query.isPending}
	Loading...
{/if}
{#if $query.error}
	An error has occurred:
	{$query.error.reason}
{/if}
{#if $query.isSuccess}
	<div class="flex flex-wrap gap-4 m-4">
		{#each $query.data as item}
			<SensorCard
				value={item.state?.toString() ?? ""}
				name={item.name ?? item.topic}
				badge={item.lastUpdatedString}
			/>
		{/each}
	</div>
{/if}
