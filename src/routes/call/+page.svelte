<script lang="ts">
	import { SensorCard } from "../../components/SensorCard";

	import type { PageData } from "./$types";
	export let data: PageData;
</script>

<div class="flex flex-wrap gap-4 m-4">
	{#each data.results as item}
		<SensorCard
			value={item.state.toString()}
			name={item.name ?? item.topic}
			badge={item.lastUpdated.toString()}
		/>
	{/each}
</div>
