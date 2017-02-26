# Case studies
* CASE 0 - starting point (initial project) : [master branch](https://github.com/thatseeyou/jspm-typescript-seed/tree/master)
* CASE 1 - Use globals module : [jquery branch](https://github.com/thatseeyou/jspm-typescript-seed/tree/jquery)
* CASE 2 - Use angular2 module : angular2 branch (HERE)

# Use Angular2 modules
## install & run final state
```
> git clone 'git@github.com:thatseeyou/jspm-typescript-seed.git'
> cd jspm-typescript-seed
proj> git checkout angular2
proj> npm install
proj> jspm install
proj> npm run build
proj> npm run bundle
proj> npm run serve
```

# CASE 2-1: install & setup
        << tag : git checkout angular2/setup >>
## 1. Install 
### [required packages](https://angular.io/docs/ts/latest/guide/npm-packages.html) with jspm
```
proj> jspm install core-js
proj> jspm install rxjs
proj> jspm install zone.js
proj> jspm install npm:@angular/common
proj> jspm install npm:@angular/core
proj> jspm install npm:@angular/forms
proj> jspm install npm:@angular/http
proj> jspm install npm:@angular/platform-browser
proj> jspm install npm:@angular/platform-browser-dynamic
proj> jspm install npm:@angular/router
```

### declaration packages with npm
```
proj> npm install --save @types/node
    ↳ module.id is referenced
```

## 2. Setup
### src/tsconfig.json
* Currently typescript does not support jspm_packages. So we add mappings manually if you do not want to install duplicated packages with npm.
* Specific version must be matched with your installed version.
* Because 'target' is 'es5, 'es2016' should be added to 'lib'.
```
{
    "compilerOptions": {
        ...
        "lib": [
            "es2016",
            "dom"
        ],
        "types": ["node"],   

        // related to import MODULE
        "baseUrl": "..",
        "paths": {
            "rxjs" : ["jspm_packages/npm/rxjs@5.2.0"],
            "rxjs/*" : ["jspm_packages/npm/rxjs@5.2.0/*"],
            "core-js": ["jspm_packages/npm/core-js@2.4.1"],
            "core-js/*": ["jspm_packages/npm/core-js@2.4.1/*"],
            "zone.js": ["jspm_packages/npm/zone.js@0.7.7"],
            "zone.js/*": ["jspm_packages/npm/zone.js@0.7.7/*"],
            "zone.js/dist/zone": ["jspm_packages/npm/zone.js@0.7.7/dist/zone.js.d.ts"],
            "@angular/*": ["jspm_packages/npm/@angular/*@2.4.8"],
            "@angular/router": ["jspm_packages/npm/@angular/router@3.4.8"],
            "*": [
                "types/*",   // custom declarations
                "node_modules/@types/*"
            ]
        }
    }
}

```

### 3. Source files
Source files has been copied from [angular CLI quickstart](https://angular.io/docs/ts/latest/cli-quickstart.html)

### src/index.html
* import src/main.js -> import main.js
* \<app-root\> element added
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <script src="jspm_packages/system.js"></script>
        <script src="systemjs.config.js"></script>
        <script>
            SystemJS.import('main.js');
        </script>
    </head>
    <body>
        <app-root>Loading...</app-root>
    </body>
</html>
```

### src/main.ts
```
import './polyfills';
...
```

### src/app/app.component.ts
* module.id added for [component-relative paths](https://angular.io/docs/ts/latest/cookbook/component-relative-paths.html)
```
import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  ...
})
...
```

## 4. build and run
```
proj> npm run build 
    ↳ or run "npm run build:trace" to check resolution process.
proj> npm run serve
```

# CASE 2-2: bundle modules to build.js
        << tag : git checkout angular2/jspm-bundle >>
jspm supports bundle modules into one file. 
## 1. run bundle command
### edit scripts of package.json 
* 'jspm bundle' command must be runned on baseURL(src) directory.
* --inject option modifies src/systesmjs.config.js 

```
  "scripts": {
    ...
    "bundle": "cd src && jspm bundle main --inject",
    ...
  },
```

## 2. run bundle command
```
proj> npm run bundle
```

## 3. No need to edit index.html
* If requested module exists in 'bundles' setting of systemjs.config.js SystemJs automatically loads bundle file(build.js).

# How to construct initial project from scratch
* CASE 0 - starting point (initial project) : [master branch](https://github.com/thatseeyou/jspm-typescript-seed/tree/master)
