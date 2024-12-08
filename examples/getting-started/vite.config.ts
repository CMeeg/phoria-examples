import { phoriaReact } from "@phoria/phoria-react/vite"
import { phoria } from "@phoria/phoria/vite"
import { dotnetDevCerts } from "@phoria/vite-plugin-dotnet-dev-certs"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  publicDir: "public",
  plugins: [
    /* This plugin is not required for Phoria to work, but we will be using https
    via `dotnet dev-certs` in our examples and this plugin makes it easy to share
    `dotnet dev-certs` with our Vite Dev Server. */
    dotnetDevCerts(),
    /* The primary purpose of the core plugin is to take care of configuration.
    When we set up our Phoria Web App these settings will come from your dotnet
    appseetings file(s), but for now we need to set them here. */
    phoria(),
    /* Each supported UI framework has its own plugin and internally registers
    the Vite framework plugin for you e.g. the `@vitejs/plugin-react` plugin
    in this case */
    phoriaReact()
  ]
})
