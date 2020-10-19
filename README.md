## Simple Microfrontend Sample

- `mfe` - micro frontend application
- `mfe-utils` - util lib for loading micro frontends
- `playground` - blank app to demo micro frontend

### Setup and Running

- #### USE YARN ONLY
- `yarn install` in mfe, mfe-utils, playground projects
- `yarn build` in mfe-utils project
- `yarn start` in both mfe and playground projects parallely

### Build System
this project uses [ngx-build-plus](https://github.com/manfredsteyer/ngx-build-plus) which extends the default build system for externals support

`webpack.externals.js` defines the external webpack modules (i.e we need to full fill there dependencies manually) this way we can externalize angular runtime and ensure it is loaded once only.

`scripts []` in angular json defines the modules to be added to `scripts.js` bundle which can be loaded once on demand

### Micro-Frontend Build Output

- `main.js` - bundle containing the web components
- `scripts.js` - bundle containing angular runtime  load this bundle only if not provided by the host application, this should be loaded once and can be shared between multiple web component bundles
- `polyfills.js` - legacy support bundle
- `styles.js` - css bundle

### Refrences

- [Angular Elements](https://angular.io/guide/elements)
- [Ngx-build-plus](https://github.com/manfredsteyer/ngx-build-plus)
- [Angular Micro Frontends](https://www.angulararchitects.io/aktuelles/your-options-for-building-angular-elements/)