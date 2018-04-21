var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId:1575839806,
  channelSecret:c4e6901098475cda925135d6e9b5f7eb,
  channelAccessToken:PUHpVlZ9aX6MXbdK9AI85vb4WLNz3Uxfk3jNqxeQfxNJKVtULADS48heQR6ZrmvsNqgBaEuP+dKdRP7+LOZsr9EA9DEqLfrJiEQ87GblUbgCUN7iJ7VfQm2pAQQwqALcXIiReanyQOk7xvg3yDIDiQdB04t89/1O/w1cDnyilFU=
});
bot.on('message', function(event) {
  console.log(event); //把收到訊息的 event 印出來看看
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});