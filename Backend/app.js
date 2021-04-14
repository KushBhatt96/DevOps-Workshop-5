const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const postsRoutes = require('./routes/postsRoutes');

const app = express();

// parse any incoming request body and convert the json into js object
app.use(cors());
app.use(bodyParser.json());

// requests will only hit postsRoutes router object if the endpoint url starts with /api/posts
app.use('/api/posts', postsRoutes);

app.listen(5000, () => {
  console.log('Listening on port 5000.');
});
