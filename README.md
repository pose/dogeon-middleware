## dogeson express middleware

Install by doing:

```sh
npm install --save dogeson-middleware
```

### Usage

```js
var dogesonParser = require('dogeson-middleware');

var express = require('express');
var app = express();

app.use(dogesonParser);

app.get('/', function (req, res) {
  res.send('so dson such doge');
});
```


