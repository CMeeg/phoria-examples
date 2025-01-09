import "@phoria/phoria-react/server"
import "./components/register"
import type { PhoriaIsland } from "@phoria/phoria/server"
import { renderWithStyledComponents } from "./server/ssr"

async function renderPhoriaIsland(island: PhoriaIsland) {
	switch (island.framework) {
		case "react":
			return await island.render({
				renderComponent: renderWithStyledComponents
			})
		default:
			return await island.render()
	}
}

export { renderPhoriaIsland }
