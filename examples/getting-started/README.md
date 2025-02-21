# Getting started example

This is the example project created by following these guides:

* [Manually add Phoria to an existing project](https://github.com/CMeeg/phoria/blob/main/docs/guides/getting-started.md##manually-add-phoria-to-an-existing-dotnet-project)
* [Building for production](https://github.com/CMeeg/phoria/blob/main/docs/guides/building-for-production.md)
* [Deployment to Azure Container Apps](https://github.com/CMeeg/phoria/blob/main/docs/guides/deployment.md##deploy-to-azure-container-apps)

You can by all means use this project as a template for your own, but you may be better served using one of the other more specific [examples](https://github.com/CMeeg/phoria-examples/tree/main/examples).

You can clone this example by running:

```shell
npx giget@latest gh:cmeeg/phoria-examples/examples/getting-started <target_dir>
```

> [!IMPORTANT]
> You will need to replace:
> * `<target_dir>` with the name of the local directory you want to clone the example project to

## Usage

Once cloned you will need to install the dependencies:

```shell
corepack enable pnpm
pnpm install
```

Then you can run the project in dev mode:

```shell
pnpm dev
```

Or build the project for production:

```shell
pnpm build

# To preview the production build
pnpm preview
```

Or deploy the project to Azure Container Apps:

```shell
azd auth login
azd up
```

> [!NOTE]
> You will need to have [Docker Desktop](https://docs.docker.com/desktop/) and [azd](https://learn.microsoft.com/en-us/azure/developer/azure-developer-cli/install-azd) installed before running the above commands.
