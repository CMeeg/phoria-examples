# With workspace example

Phoria Islands being used in a pnpm workspace with Lerna as a task runner.

## Getting started

The example can be run in development or preview (production build) mode.

### Run in development mode

```shell
# Install dependencies
corepack install
pnpm install

# Create dotnet dev cert
dotnet dev-certs https --trust

# Run Phoria dev server
pnpm lerna run dev

# Run Phoria web app (in different terminal window/tab)
cd ./packages/WebApp
dotnet run

# The web app should be running at https://localhost:5246/
```

### Run in preview mode

```shell
# Install dependencies
corepack install
pnpm install

# Create dotnet dev cert
dotnet dev-certs https --trust

# Run Phoria web app
pnpm lerna run preview

# The web app should be running at http://localhost:5245/
```
