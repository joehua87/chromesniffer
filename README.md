## Introduction
* Similar to builtwith.com
* This project is an npm package forked from https://github.com/nqbao/chromesniffer (a chrome extension)

## Usage

###
```
npm i --save site-detector
```

### ES6
```js
import siteDetector from 'site-detector'
siteDetector('https://your-site.com/').then((app) => console.log(app))
```

### ES5 Promise Style
```js
var siteDetector = require('site-detector')
siteDetector('https://your-site.com/').then(function(app) {
  console.log(app)
})
```

### ES5 Callback Style
```js
var siteDetector = require('site-detector')
siteDetector('https://your-site.com/', function(app) {
  console.log(app)
})
```

## TODO
* [ ] Clean up (remove redundant files)
* [ ] Add command line tool
* [ ] Add more tests
* [ ] Add more features (platform, script)

## Credit
https://github.com/nqbao/chromesniffer
