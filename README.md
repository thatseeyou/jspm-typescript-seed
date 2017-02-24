# CASE 1-1: import jquery
## 1. add declaration & source files
```
proj> npm install --save @types/jquery
proj> jspm install jquery
    ↳ package.json and src/systemjs.config.js changed
```
## 2. write codes
### src/app/jquery/ready.ts
```javascript
import * as $ from 'jquery';

export function ready() {
    $(document).ready(() =>{
        $('<p>Hello World</p>').appendTo('body');
    });
}
```
### src/app/main.ts
```javascript
import { ready } from './jquery/ready';

ready();
```
## 3. build and run
```
proj> npm run build 
    ↳ 'npm run build:trace' shows the resolution process.
proj> npm run serve
```

# CASE 1-2: import jqueryui
Because jqueryui extends jquery, just import is needed.
## 1. add declaration & source files
```
proj> npm install --save @types/jqueryui
proj> jspm install jqueryui
    ↳ package.json and src/systemjs.config.js changed
```

## 2. write codes
### src/app/jquery/datepicker.ts
```javascript
import * as $ from 'jquery';
import 'jqueryui';

export function datepicker() {
    $('<input>')
        .appendTo('body')
        .datepicker();
}
```

### src/app/jquery/ready.ts
```javascript
import * as $ from 'jquery';
import { datepicker } from './datepicker';

export function ready() {
    ...
        datepicker();
    ...
}
```

## 3. build and run
```
proj> npm run build && npm run serve
```

# CASE 1-3: import css
SystemJS plugins makes it possible to load non-javascript files.
## 1. install SystemJs css [plugin](https://github.com/systemjs/systemjs/blob/master/docs/plugins.md)

```
proj> jspm install css
    ↳ css also is just module.
```

## 2. prepare css
```
proj> cp <somewhere> src/css/jquery-ui.css
proj> cp <somewhere> src/css/jquery-ui.theme.css
```
## 3. edit codes
### src/app/jquery/ready.ts
```javascript
import '../css/jquery-ui.css!css'
import '../css/jquery-ui.theme.css!css'

...

```

## 3. build and run
```
proj> npm run build && npm run serve
```

# CASE 1-4: reference custom declarations
@types/[code-prettify](https://github.com/google/code-prettify) does not exist. I make it for myself.

## 1. install source module
```
proj> jspm install npm:code-prettify
```

## 2. write custom declaration file
### types/code-prettify/index.d.ts
```javascript
// partial declarations
declare const PR: {
    prettyPrint(opt_whenDone?:any, opt_root?:any): void;
}
```
refer "baseUrl", "paths" settings of src/tsconfig.json
```
    ...
       "baseUrl": "..",
        "paths": {
            "*": [
                "node_modules/@types/*",
                "types/*"   // custom declarations
            ]
        }
    ...
```

## 3. write codes
### src/jquery/code-prettify.ts
```javascript
import '../../css/prettify.css!css';

import * as $ from 'jquery';
import 'code-prettify';

const code = ...;

export function prettify() {
    $(`<pre class="prettyprint"><pre>`)
        .appendTo('body')
        .text(code);

    PR.prettyPrint();
}
```

### src/jquery/ready.ts
```javascriopt
...
import { prettify } from './code-prettify';

export function ready() {
    ...
        prettify();
    ...
}
```

## 4. build and run
```
proj> npm run build && npm run serve
```

# CASE 1-5: bundle modules to build.js
jspm supports bundle modules into one file. 
## 1. run bundle command
### edit scripts of package.json 
```
  "scripts": {
    ...
    "bundle": "cd src && jspm bundle app/main --inject",
    ...
  },
```
'jspm bundle' command must be runned on baseURL(src) directory.

--inject option modifies src/systesmjs.config.js 

## 2. run bundle command
```
proj> npm run bundle
```
### src/systemjs.config.js
```javascript
...
  bundles: {
    "build.js": [
      "app/main.js",
      "app/jquery/ready.js",
      "app/jquery/code-prettify.js",
      "npm:code-prettify@0.1.0.js",
      "npm:code-prettify@0.1.0/src/prettify.js",
      "github:jspm/nodelibs-process@0.1.2.js",
      "github:jspm/nodelibs-process@0.1.2/index.js",
      "npm:process@0.11.9.js",
      "npm:process@0.11.9/browser.js",
      "npm:jquery@3.1.1.js",
      "npm:jquery@3.1.1/dist/jquery.js",
      "css/prettify.css!github:systemjs/plugin-css@0.1.32.js",
      "app/jquery/datepicker.js",
      "npm:jqueryui@1.11.1.js",
      "npm:jqueryui@1.11.1/jquery-ui.js",
      "css/jquery-ui.theme.css!github:systemjs/plugin-css@0.1.32.js",
      "css/jquery-ui.css!github:systemjs/plugin-css@0.1.32.js"
    ]
  },
...
```

## 3. No need to edit index.html
If requested module exists in 'bundles' setting of systemjs.config.js SystemJs automatically loads bundle file(build.js).

# CASE 1-5: bundle all to build-all.js
system.js + systemjs.config.js + import main module + other modules
## 1. run bundle-sfx command
### edit scripts of package.json 
```
  "scripts": {
    ...
    "bundle-sfx": "cd src && jspm bundle-sfx app/main build-all.js",
    ...
  },
```
## 2. run bundle command
```
proj> npm run bundle-sfx
```
## 3. edit index.html
### src/index-all.html
```javascripot
<!DOCTYPE html>
<html>
    <head>
        <script src="build-all.js"></script>
    </head>
    <body>
    </body>
</html>
```

# Structuring from scratch

### npm init 
```
> mkdir proj && cd $_
proj> npm init -y
proj> npm install -g jspm
    ↳ Global jspm runs local jspm if local jspm exist.
proj> npm install --save-dev typescript jspm lite-server
```

### jspm init
```
proj> mkdir -p src/app src/css
proj> jspm init
    ↳ Use default values except the followings.
...
Enter server baseURL (public folder path) [./]:src
Enter jspm packages folder [src/jspm_packages]:jspm_packages
Enter config file path [src/config.js]:src/systemjs.config.js
Do you wish to use a transpiler? [yes]:no
...
```

- packages.json
```json
...
  "jspm": {
    "directories": {
      "baseURL": "src",
      "packages": "jspm_packages"
    },
    "configFile": "src/systemjs.config.js",
    "devDependencies": {}
  }
...
```

- src/systemjs.config.js
```javascript
System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: false,
  paths: {}
});
```

### edit "scripts" of packages.json
```json
...
  "scripts": {
    "tsc": "tsc",
    "build": "tsc -p src",
    "build:trace": "tsc -p src --traceResolution",
    "build:debug": "tsc -p src --listFiles --listEmittedFiles",
    "serve": "lite-server"
  },
...
```

### tsc --init
```
proj> npm run tsc -- --init && mv tsconfig.json src/
```

### bs-config.json for lite-server
```json
{
  "server": {
    "baseDir": "src",
    "routes": {
      "/jspm_packages": "jspm_packages"
    }
  }
}
```

### src/index.html
```html
<!DOCTYPE html>
<html>
    <head>
        <script src="jspm_packages/system.js"></script>
        <script src="systemjs.config.js"></script>
        <script>
            SystemJS.import('app/main.js');
        </script>
    </head>
    <body>
    </body>
</html>
```

### src/app/main.ts
```
console.log('Hello world');
```

### tsconfig.json
```
{
    "compilerOptions": {
        "module": "commonjs",
        "target": "es5",
        "noImplicitAny": true,
        "sourceMap": true,

        // related to Angular2
        "experimentalDecorators": true, 
        "emitDecoratorMetadata": true,  

        // related to /// <reference types="..." />
        "typeRoots": [
            "../types",
            "../node_modules/@types"
        ],
        "types": [],   // no implicit reference

        // related to import MODULE
        "baseUrl": "..",
        "paths": {
            "*": [
                "types/*",   // custom declarations
                "node_modules/@types/*"
            ]
        }
    }
}
```

### .vscode/tasks.json (for visual studio code)
- Run background compile task by command palette

```json
{
    "version": "0.1.0",
    "command": "tsc",
    "isShellCommand": true,
    "args": ["-w", "-p", "src"],
    "showOutput": "silent",
    "isBackground": true,
    "problemMatcher": "$tsc-watch"
}
```

### build & run
```
proj> npm run build
proj> npm run serve
```

# Troubleshooting
### jspm install ERROR
```
TypeError: Install of jspm to ^0.16.52 has no registry property provided.
```
* check the existence of "devDependencies" (or dependencies) at package.json
```json
"jspm": {
    "directories": {
      "baseURL": "src",
      "packages": "jspm_packages"
    },
    "configFile": "src/systemjs.config.js",
    "devDependencies": {}
  }
```




