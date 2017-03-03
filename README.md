## Introduction

This is a sample Progressive Web App(PWA) project built on Rails.

## Setup

* Disable the `debug` mode for assets in development. This is allow 
concatenation of assets in development and so `service workers` 
could be configured to cache the built asset files. For the purpose
of this project, `application.js` and `application.css` are cached.

* Register the `service worker`. It can be done using

```
navigator.serviceWorker.register('/serviceWorker.js')
```

We keep the initialiser with other `.js` files.

* Prepare the `service worker`. The path for the worker should match the one provided to the `serviceWorker.register` method.
Service Workers should be publicly accessible. It can be placed inside the `assets` folder and then precompiled as a separate
file with `finger-print` disabled or simply placed under the `public` folder.

For the purpose of this project, we place it inside `public/`.

* We use the event handlers for service workers as defined 
[here](https://developers.google.com/web/fundamentals/getting-started/codelabs/your-first-pwapp/).

    Basically, the service workers have a list of relative paths to cache. Any network request to those path would be 
cached. 