<script>
	import { ModeWatcher, ThemeSwitch } from "@kayord/ui";
	import "../app.postcss";
</script>

<ModeWatcher />
<div class="dark:bg-neutral-900 bg-neutral-200 flex justify-between p-2 h-14 items-center">
	<div class="flex items-center"><img src="logo.svg" alt="logo" class="h-10" />ayord.IOT</div>
	<span></span>
	<ThemeSwitch />
</div>

<slot />
