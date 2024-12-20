# React framework example

Phoria Islands using React.

## Getting started

The example can be run in development or preview (production build) mode.

### Run in development mode

```shell
# Change into the WebApp directory
cd ./WebApp

# Install dependencies
corepack install
pnpm install

# Create dotnet dev cert
dotnet dev-certs https --trust

# Run Phoria dev server
pnpm run dev

# Run Phoria web app (in different terminal window/tab)
dotnet run

# The web app should be running at https://localhost:5246/
```

### Run in preview mode

```shell
# Change into the WebApp directory
cd ./WebApp

# Install dependencies
corepack install
pnpm install

# Create dotnet dev cert
dotnet dev-certs https --trust

# Create production build
pnpm run build

# Run Phoria web app
pnpm run preview

# The web app should be running at http://localhost:5245/
```
