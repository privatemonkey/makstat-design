# Readme

Basic frontend dev setup for North Macedonia statistical office website. 

It includes a basic server for development purpose, a SASS and component setup.

## TODO

- [x] Finish start page template (Desktop)
- [ ] Add theme template
- [x] Add template for statistics start page
- [x] Add template for regular page
- [x] Create responsive menus (Mobile)
- [ ] Printversion
- [ ] Make templates fully responsive

## Setup

- Make sure you have Node.js and NPM installed.
- Install live-server
- Github desktop is a good help

### Install server

I recommend install (live-server)[https://www.npmjs.com/package/live-server] globally.

```bash
npm install -g live-server
```

### Initialize project

Run this in the root of the directory

```bash
npm install
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

Files that should be used for production are stored in this directory. The CSS is also built to the CSS catalogue.

### Components and elements

HTML snippets are stored in this catalogue. If a component has variants it is stored in a library with the component name and template name. In the SCSS library you'll find a corresponding ```_component.scss``` file.

**Example**

```components/list/news/start.html``` contains news showed in the startpage template.

## Templating

To include a component we use a simple ```data-include="path/filename.html"``` attribute on a div tag. A script runs on load, adds components to the page and removes div tags.
