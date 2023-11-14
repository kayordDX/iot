<script lang="ts">
	import { onMount } from "svelte";

	onMount(async () => {
		const signalR = await import("@microsoft/signalr");
		const connection = new signalR.HubConnectionBuilder()
			.withUrl("http://localhost:5117/chatHub")
			.build();

		connection
			.start()
			.then(() => console.log("hub connected"))
			.catch((err) => console.error(err));

		connection.on("ReceiveMessage", (message: string) => {
			console.log(message);
		});

		connection.start().catch((err) => console.error(err));
	});
</script>
