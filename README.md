# Readme

This is a basic frontend dev setup for North Macedonia statistical office. It includes a basic server for development purpose, a SASS and component setup.

All template files are served from the root.

## TODO

- [ ] Finish start page template (Desktop)
- [ ] Add theme template
- [ ] Add template for regular page
- [ ] Create responsive menus (Mobile)
- [ ] Make templates fully responsive

## Setup

- Make sure you have Node.js and NPM installed.
- Install live-server

### Install server

I recommend install (live-server)[https://www.npmjs.com/package/live-server] globally.

```bash
npm install -g live-server
```

### Initialize project

```bash
npm init
```

### Run it

```bash
npm run dev
```

### Build

To build minified css for production

```bash
npm run build
```

## About the project

### Assets

Files that should be used for production

### Components

HTML snippets

## Templating

To include a component we use a simple ```data-include="path/filename.html"``` attribute. A script runs on load and adds components to the page.