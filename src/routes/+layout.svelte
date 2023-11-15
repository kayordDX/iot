<script>
	import { ModeWatcher, ThemeSwitch } from "@kayord/ui";
	import { browser } from "$app/environment";
	import { QueryClient, QueryClientProvider } from "@tanstack/svelte-query";
	import "../app.postcss";

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				enabled: browser,
			},
		},
	});
</script>

<ModeWatcher />
<div
	class="dark:bg-neutral-900 bg-neutral-50 flex justify-between p-2 h-14 items-center border-b-2 border-secondary"
>
	<div class="flex items-center"><img src="logo.svg" alt="logo" class="h-10" />ayord.IOT</div>
	<span></span>
	<ThemeSwitch class="text-secondary-foreground" />
</div>

<QueryClientProvider client={queryClient}>
	<slot />
</QueryClientProvider>
