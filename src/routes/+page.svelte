<script lang="ts">
	import SensorCard from "../components/SensorCard/SensorCard.svelte";
</script>

<div class="flex flex-wrap gap-4 m-4">
	<SensorCard value="23" name="Freezer" />
	<SensorCard value="12" name="Fridge" colorState="green" />
	<SensorCard value="65.78" name="Another" colorState="orange" />
	<SensorCard value="65.78" name="Another" colorState="purple" />
	<SensorCard value="65.78" name="Another" colorState="red" />
</div>
