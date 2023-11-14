<script lang="ts">
	import { Thermometer } from "lucide-svelte";

	type ColorState = "red" | "blue" | "green" | "orange" | "purple";

	export let iconColor: string | undefined = undefined;
	export let bgColor: string | undefined = undefined;
	export let borderColor: string | undefined = undefined;
	export let colorState: ColorState = "blue";

	if (colorState == "blue") {
		iconColor = iconColor ?? "rgb(33, 150, 243)";
		bgColor = bgColor ?? "#1c3243";
		borderColor = borderColor ?? "#1c3243";
	} else if (colorState == "red") {
		iconColor = iconColor ?? "rgb(244, 67, 54)";
		bgColor = bgColor ?? "#472320";
		borderColor = borderColor ?? "#472320";
	} else if (colorState == "green") {
		iconColor = iconColor ?? "rgb(76, 175, 80)";
		bgColor = bgColor ?? "#253926";
		borderColor = borderColor ?? "#253926";
	} else if (colorState == "orange") {
		iconColor = iconColor ?? "rgb(255, 152, 0)";
		bgColor = bgColor ?? "#493416";
		borderColor = borderColor ?? "#493416";
	} else if (colorState == "purple") {
		iconColor = iconColor ?? "rgb(147, 42, 177)";
		bgColor = bgColor ?? "#2a213b";
		borderColor = borderColor ?? "#2a213b";
	}
</script>

<div
	class="w-10 h-10 rounded-full flex items-center justify-center border-2"
	style="background-color: {bgColor}; border-color: {borderColor}"
>
	<slot><Thermometer class="h-5" style="color: {iconColor}" /></slot>
</div>
