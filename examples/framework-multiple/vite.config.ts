import { phoriaReact } from "@phoria/phoria-react/vite"
import { phoriaSvelte } from "@phoria/phoria-svelte/vite"
import { phoriaVue } from "@phoria/phoria-vue/vite"
import { phoria } from "@phoria/phoria/vite"
import { dotnetDevCerts } from "@phoria/vite-plugin-dotnet-dev-certs"
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  publicDir: "public",
  plugins: [
    tsconfigPaths({ root: "../../" }),
    dotnetDevCerts(),
    phoria({ cwd: "WebApp" }),
    phoriaReact(),
    phoriaSvelte(),
    phoriaVue()
  ]
})
