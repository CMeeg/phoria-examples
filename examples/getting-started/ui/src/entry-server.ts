import "@phoria/phoria-react/server"
import "./components/register"
import type { PhoriaIsland } from "@phoria/phoria/server"

async function renderPhoriaIsland(island: PhoriaIsland) {
  // TODO: Need to deal with the `any` here
	// eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
	return await island.render()
}

export { renderPhoriaIsland }
