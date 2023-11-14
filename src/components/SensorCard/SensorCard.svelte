<script lang="ts">
	import { Card } from "@kayord/ui";
	import { SensorIcon } from ".";

	export let value: string;
	export let name: string;
</script>

<Card class="flex p-4 items-center  w-52">
	<SensorIcon colorState="green" />
	<div class="ml-4">
		<div class="text-lg font-semibold">
			{value}°C
		</div>
		<div>
			{name}
		</div>
	</div>
</Card>
