<script lang="ts">
	import { Thermometer } from "lucide-svelte";
	import type { ColorState } from "./types";

	export let iconColor: string | undefined = undefined;
	export let bgColor: string | undefined = undefined;
	export let borderColor: string | undefined = undefined;
	export let colorState: ColorState = "blue";

	if (colorState == "blue") {
		iconColor = iconColor ?? "var(--sensor-blue)";
		bgColor = bgColor ?? "var(--sensor-blue-bg)";
		borderColor = borderColor ?? "var(--sensor-blue-bg)";
	} else if (colorState == "red") {
		iconColor = iconColor ?? "var(--sensor-red)";
		bgColor = bgColor ?? "var(--sensor-red-bg)";
		borderColor = borderColor ?? "var(--sensor-red-bg)";
	} else if (colorState == "green") {
		iconColor = iconColor ?? "var(--sensor-green)";
		bgColor = bgColor ?? "var(--sensor-green-bg)";
		borderColor = borderColor ?? "var(--sensor-green-bg)";
	} else if (colorState == "orange") {
		iconColor = iconColor ?? "var(--sensor-orange)";
		bgColor = bgColor ?? "var(--sensor-orange-bg)";
		borderColor = borderColor ?? "var(--sensor-orange-bg)";
	} else if (colorState == "purple") {
		iconColor = iconColor ?? "var(--sensor-purple)";
		bgColor = bgColor ?? "var(--sensor-purple-bg)";
		borderColor = borderColor ?? "var(--sensor-purple-bg)";
	}
</script>

<div
	class="w-10 h-10 rounded-full flex items-center justify-center border-2"
	style="background-color: {bgColor}; border-color: {borderColor}"
>
	<slot><Thermometer class="h-5" style="color: {iconColor}" /></slot>
</div>
