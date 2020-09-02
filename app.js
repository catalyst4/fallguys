const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '/')));

app.use(require('./routes/index'));
app.use(require('./routes/news'));
app.use(require('./routes/rounds'));

app.listen(PORT, console.log(`Listening on PORT: ${PORT}`));