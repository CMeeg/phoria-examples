import { registerComponents } from "@phoria/phoria"

registerComponents({
	ReactCounter: {
		loader: () => import("./Counter/Counter.tsx"),
		framework: "react"
	}
})
