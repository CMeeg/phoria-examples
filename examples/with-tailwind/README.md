# With Tailwind example

This example demonstrates how to use [Tailwind](https://tailwindcss.com/) in your Phoria project.

You can use this example as a template for your own project by running:

```shell
npx giget@latest gh:cmeeg/phoria-examples/examples/with-tailwind <target_dir>
```

> [!IMPORTANT]
> You will need to replace:
> * `<target_dir>` with the name of the local directory you want to clone the example project to

## Tailwind

This example uses [Tailwind](https://tailwindcss.com/) v4:

* Tailwind is added via the [official Vite plugin](https://tailwindcss.com/docs/installation/using-vite)
* Tailwind is configured in `WebApp/ui/src/styles/global.css`
  * [Source files are configured](https://tailwindcss.com/docs/detecting-classes-in-source-files#setting-your-base-path) here so that Tailwind finds classes in the Phoria (dotnet) Web App as well as Phoria Island (React) components
  * React is used in this example, but you can use any other UI framework supported by Phoria and Tailwind
* `global.css` is imported in Phoria's Client Entry `WebApp/ui/src/entry-client.ts`
  * This ensures that Vite takes care of HMR for Tailwind in dev, and bundling the CSS for prod

## Usage

> [!NOTE]
> See the [Phoria docs](https://github.com/CMeeg/phoria#usage) for general usage information.

Once cloned you will need to install the dependencies:

```shell
corepack enable pnpm
pnpm install
```

Then you can run the project in dev mode:

```shell
# Add dev certs
dotnet dev-certs https --trust

# Start the Phoria Server
pnpm dev

# Start the Phoria Web App
# You will need to run this in a separate terminal instance/tab to the Phoria Server
dotnet run --project WebApp/WebApp.csproj --launch-profile Development
```

Or build the project for production:

```shell
# Build the project
pnpm build

# Preview the production build
pnpm preview
```

Or run the production build in a Docker container:

```shell
# Build the container image
docker build -f ./WebApp/Dockerfile -t phoriaapp:latest .

# Run the container image (and browse on http://localhost:3001)
docker run --name phoriaapp -d -p 3001:8080 phoriaapp:latest

# Stop the container image
docker stop phoriaapp

# Remove the container image
docker rm phoriaapp
```

> [!NOTE]
> You will need to have [Docker Desktop](https://docs.docker.com/desktop/) installed before running the above commands.
