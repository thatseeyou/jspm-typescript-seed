# Case studies
* CASE 0 - starting point (initial project) : [master branch](https://github.com/thatseeyou/jspm-typescript-seed/tree/master)
* CASE 1 - Use globals module : [jquery branch](https://github.com/thatseeyou/jspm-typescript-seed/tree/jquery)
* CASE 2 - Use angular2 module : [angular2 branch](https://github.com/thatseeyou/jspm-typescript-seed/tree/angular2)
* CASE 3 - Angular2 + [Tour Of Heroes](https://angular.io/docs/ts/latest/tutorial/) : toh branch (HERE)

# Tour of Heroes (Angular2 official tutorial)
We built the sample app using [Angular2 official tutorial codes](https://angular.io/resources/zips/toh-6/toh-6.zip)
## install & run final state
```
> git clone 'git@github.com:thatseeyou/jspm-typescript-seed.git'
> cd jspm-typescript-seed
proj> git checkout toh
proj> npm install
proj> jspm install
proj> npm run build
proj> npm run bundle
proj> npm run serve
```

# CASE 3: Tour Of Heroes
## 1. copy
copy src/*

## 2. install and edit
### angular-in-memory-web-api
```
proj> jspm install npm:angular-in-memory-web-api -o '{ "peerDependencies": [] }'
    ↳ override package.json to prevent jspm from installing another @angular version.
```

### tsconfig.json
```
...
	"angular-in-memory-web-api": ["jspm_packages/npm/angular-in-memory-web-api@0.3.1"],
...
```

### index.html
```
...
    <head>
        <base href="/">
...
```

## 3. build and run
```
proj> npm run build 
    ↳ or run "npm run build:trace" to check resolution process.
proj> npm run bundle
    ↳ or run "npm run unbundle"
proj> npm run serve
```
