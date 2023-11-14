import type { PageLoad } from "./$types";

interface Sensor {
	id: number;
	topic: string;
	name?: string;
	state: number;
	lastUpdated: Date;
}

export const load = (async ({ fetch }) => {
	const res = await fetch(`http://localhost:5117/sensor`);
	const results = (await res.json()) as Array<Sensor>;

	return { results };
}) satisfies PageLoad;
