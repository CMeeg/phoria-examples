import { phoriaReact } from "@phoria/phoria-react/vite"
import { phoria } from "@phoria/phoria/vite"
import { dotnetDevCerts } from "@phoria/vite-plugin-dotnet-dev-certs"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
	publicDir: "public",
	plugins: [
    /* This plugin is not required for Phoria to work, but we will be using https
    via dotnet devcerts in our examples and this plugin makes it easy to share
    dotnet devcerts with our Vite Dev Server. */
		dotnetDevCerts(),
    /* The primary purpose of the core plugin is to take care of configuration.
    When we set up our Phoria web app these settings will come from your dotnet
    appseetings file(s), but for now we need to set them here. */
		phoria({
      appsettings: {
        Entry: "ui/src/entry-client.ts",
        SsrEntry: "ui/src/entry-server.ts"
      }
    }),
    /* Each supported UI framework has its own plugin and internally registers
    the Vite framework plugin for you e.g. the `@vitejs/plugin-react` plugin
    in this case */
		phoriaReact()
	]
})
