var newrelic = require('newrelic');
var koa = require('koa');
var app = koa();

// Set X-Response-Time
app.use(function *(next) {
  var start = new Date;
  yield next;
  var ms = new Date - start;
  this.set('X-Response-Time', ms + 'ms');
});

// Logger
app.use(function *(next) {
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

// Response
app.use(function *() {
  this.body = 'Hello World!';
});

app.listen(3000);
