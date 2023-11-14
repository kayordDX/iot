<script lang="ts">
	import { Card, Badge } from "@kayord/ui";
	import { SensorIcon } from ".";
	import type { ColorState } from "./types";

	export let value: string;
	export let name: string;
	export let colorState: ColorState = "blue";
	export let badge: string | undefined = undefined;
</script>

<Card class="flex p-4 items-center min-w-full justify-between">
	<div class="flex items-center">
		<SensorIcon {colorState} />
		<div class="ml-4">
			<div class="text-lg font-semibold">
				{value}°C
			</div>
			<div class="">
				{name}
			</div>
		</div>
	</div>
	{#if badge}
		<Badge variant="secondary">{badge}</Badge>
	{/if}
</Card>
