const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('./config/db');

const { checkUser, requireAuth } = require('./middleware/auth');
const postRoutes = require('./routes/posts');
const userRoutes = require('./routes/user');

const PORT = process.env.PORT || '5500';

const corsOption = {
  origin: process.env.APP,
  credentials: true,
  allowedHeaders: ['sessionId', 'Content-Type'],
  exposeHeaders: ['sessionId'],
  methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
  prefFlightContinue: false,
};

app.use(cors(corsOption));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('*', checkUser);
app.get('/jwtid', requireAuth, (req, res) => {
  res.status(200).send(res.locals.user._id);
});

app.use('/posts', postRoutes);
app.use('/user', userRoutes);

app.listen(PORT, () => console.log(`Server started: ${PORT}`));
