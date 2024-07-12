const { json } = require('body-parser');
const express = require('express');
const userRouter = require('./routes/User/userRoutes');
const postRouter = require('./routes/Posts/postRoutes');
const commentRouter = require('./routes/Comments/commentRoutes');
const categoriesRouter = require('./routes/Categories/categoryRoutes');

require('./config/dbConnect');
const app = express();

app.use(express.json());
//middlewares
app.use('/api/v1/users',userRouter);
app.use('/api/v1/posts',postRouter);
app.use('/api/v1/comments',commentRouter);
app.use('/api/v1/categories',categoriesRouter);

//Error handlers middleware
//Listen to server
const PORT = process.env.PORT || 9000;
app.listen(PORT , console.log(`Server is up and running on ${PORT}`));



