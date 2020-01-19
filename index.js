const express = require('express');
// const exphbs = require('express-handlebars');

// const manifest = require('./public/manifest.json');

const app = express();

// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');
// app.get('/', (req, res) => {
//   const mapped = Object.keys(manifest).map((key) => manifest[key]);
//   res.render('index', {
//     manifest: mapped,
//   });
// });

app.use(express.static('public'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
