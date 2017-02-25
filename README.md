# Case studies
* CASE 1 - globals module : [jquery branch](https://github.com/thatseeyou/jspm-typescript-seed/tree/jquery)
* CASE 0 - starting point : [master branch](https://github.com/thatseeyou/jspm-typescript-seed/tree/master)

# How to construct initial project from scratch

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




