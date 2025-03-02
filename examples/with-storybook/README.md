# With Storybook example

This example demonstrates how to use Storybook in your Phoria project.

You can use this example as a template for your own project by running:

```shell
npx giget@latest gh:cmeeg/phoria-examples/examples/with-storybook <target_dir>
```

> [!IMPORTANT]
> You will need to replace:
> * `<target_dir>` with the name of the local directory you want to clone the example project to

## Storybook

You can run Storybook in this project using:

```shell
pnpm storybook
```

Storybook has been setup for both:

* Documentation: MDX, auto-generated component docs; and
* Testing: Fast browser-based component tests, watch mode

> [!NOTE]
> Where possible the default Storybook options have left alone to keep the configuration simple and unopinionated. This means that Storybook's [telemetry](https://storybook.js.org/docs/configure/telemetry) is enabled, but you can opt out of that if you want.

The Storybook configuration found at `.storybook/main.ts` has been modified to:

* Include Stories found in `WebApp/ui`
* Set Vite's `base` and `publicDir` options appropriately for Storybook

And `.storybook/preview.ts` has been renamed to `.storybook/preview.tsx` (because the example uses React) and modified to:

* Import global css styles
  * This is the same file that is imported in Phoria Client Entry
* Wrap all stories in a `main` element
  * This is to mimic the WebApp's `_Layout.cshtml` file

`tsconfig.json` has been modified to include the TypeScript files found in `.storybook`.

For testing purposes:

* Storybook is configured to use the experimental [Test add-on](https://storybook.js.org/docs/writing-tests/test-addon)
* Vitest is configured via a [Workspace](https://vitest.dev/guide/workspace.html) file at `vitest.workspace.ts`
* Vitest can be run using `npx vitest --project=storybook` or using the offical [Vitest VS Code extension](https://marketplace.visualstudio.com/items?itemName=vitest.vitest)

> [!TIP]
> For more information using and configuring Storybook visit the official [Storybook docs](https://storybook.js.org/docs).

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
