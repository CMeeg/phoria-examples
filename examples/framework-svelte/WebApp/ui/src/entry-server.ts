import "@phoria/phoria-svelte/server"
import "./components/register"
import type { PhoriaIsland } from "@phoria/phoria/server"

async function renderPhoriaIsland(island: PhoriaIsland) {
  return await island.render()
}

export { renderPhoriaIsland }
