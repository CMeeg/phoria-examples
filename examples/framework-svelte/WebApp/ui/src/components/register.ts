import { registerComponents } from "@phoria/phoria"

registerComponents({
	Counter: {
		loader: () => import("./Counter/Counter.svelte"),
		framework: "svelte"
	}
})
