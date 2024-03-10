# Built In Detroit Project Website

**Official website for the Built In Detroit Project.**

## Usage

To add a new event:

```sh
hugo new events/[uuid]
```

Replace the `[uuid]` field with a universally unique identifier (UUID), in
lowercase.

On macOS and Linux systems, a UUID can be generated with:

```sh
uuidgen | tr "[:upper:]" "[:lower:]"
```

On Windows systems, a UUID can be generated in a PowerShell session with:

```ps1
powershell -Command "[guid]::NewGuid().ToString()"
```

## Development

### Setup

1. Install [Hugo](https://gohugo.io/installation/).
1. Install [Node.js](https://nodejs.org/en). Ensure that the minimum Node.js version is installed per the root "package.json" file.
1. If Node.js was installed on a macOS machine with Homebrew, install "corepack" with `brew install corepack`.
1. Run `corepack enable`.
1. Run `pnpm install`.
1. Create a Python virtual environment. Visual Studio Code offers a convenient `Python: Create Environment...` option in the Command Palette that will create a virtual environment in the repository root.
1. Activate the Python virtual environment, if not active already.
1. Run `hugo server` to start a development server locally to view the site.
1. Run `hugo` to publish (but not deploy) the static site to the "public" directory.

### Building

For development:

Run the Tailwind compiler and watch for changes to the CSS, content and configuration associated with Tailwind:

```sh
pnpm run serve:dev
```

In another tab, start a development server locally to view the site:

```sh
hugo server
```

To view the production site locally:

```sh
pnpm run serve:prod
```

## Licenses

The written material, images, animations and videos in the "content" and "static" directories are licensed
under the [Attribution-NonCommercial-ShareAlike 4.0 International](./LICENSE-CONTENT).

All other source code is under the [MIT License](./LICENSE).
