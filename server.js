const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/coopersystem-challenge'));

app.get('/*', (req, res) => {
  res.sendFile('/dist/coopersystem-challenge/index.html')
});

app.listen(PORT, () => {
  console.log('Server started on port ' + PORT);
})