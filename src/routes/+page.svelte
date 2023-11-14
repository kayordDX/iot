<script lang="ts">
	import { Badge, Button, Card, CardContent, CardHeader, CardTitle } from "@kayord/ui";
	import { Thermometer } from "lucide-svelte";
	import SensorCard from "../components/SensorCard/SensorCard.svelte";
</script>

<div class="flex flex-wrap gap-4 m-4">
	<SensorCard value="23" name="Freezer" />
	<SensorCard value="12" name="Fridge" />
	<SensorCard value="65.78" name="Another" />
</div>
