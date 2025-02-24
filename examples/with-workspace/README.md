# With workspace example

This example demonstrates how to setup and use Phoria in a workspace (monorepo).

You can use this example as a template for your own project by running:

```shell
npx giget@latest gh:cmeeg/phoria-examples/examples/with-workspace <target_dir>
```

> [!IMPORTANT]
> You will need to replace:
> * `<target_dir>` with the name of the local directory you want to clone the example project to

## Workspace

This example project uses a [pnpm workspace](https://pnpm.io/workspaces) to manage dependencies and [Lerna](https://lerna.js.org/) as a task runner.

It should be possible to use other workspace and task runner tools should you prefer.

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
pnpm lerna run dev

# Start the Phoria Web App
# You will need to run this in a separate terminal instance/tab to the Phoria Server
dotnet run --project packages/WebApp/WebApp.csproj --launch-profile Development
```

Or build the project for production:

```shell
# Build the project
pnpm lerna run build

# Preview the production build
pnpm lerna run preview
```

Or run the production build in a Docker container:

```shell
# Build the container image
docker build -f ./packages/WebApp/Dockerfile -t phoriaapp:latest .

# Run the container image (and browse on http://localhost:3001)
docker run --name phoriaapp -d -p 3001:8080 phoriaapp:latest

# Stop the container image
docker stop phoriaapp

# Remove the container image
docker rm phoriaapp
```

> [!NOTE]
> You will need to have [Docker Desktop](https://docs.docker.com/desktop/) installed before running the above commands.
