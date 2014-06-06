## dogeson express middleware 

(Work in progress!)

Install by doing:

```sh
npm install --save dson-middleware
```

### Usage

```js
var dogesonParser = require('dson-middleware');

var express = require('express');
var app = express();

app.use(dogesonParser());

app.get('/', function (req, res) {
  res.end(200, 'so dson such doge');
});


app.listen(3000);

```


