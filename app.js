const express = require('express');
const app = express();
const logger = require('morgan');
const cors = require('cors');

const RestapiPort = 4000;
/*라우터 추가*/
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const boardRouter = require('./routes/board');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//
app.use('/', indexRouter);
app.use('/user', cors(), userRouter);
app.use('/board', cors(), boardRouter);

app.listen(RestapiPort, function(){
    console.log(`server on! http://localhost:${RestapiPort}`);
});

//module.exports = app;
