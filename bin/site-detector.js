#!/usr/bin/env node

var program = require('commander')
var siteDetector = require('../index')

var urlValue

program
  .version('0.1.0')
  .arguments('<url>')
  .action(function (url) {
    urlValue = url.match(/^http/) ? url : `http://${url}`;
  });

program.parse(process.argv)

if (typeof urlValue === 'undefined') {
  console.error('no url given!');
  process.exit(1);
}

siteDetector(urlValue)
  .then((app) => console.log(app))
