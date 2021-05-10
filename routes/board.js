const express = require('express');
const router = express.Router();
const knex_query = require('../model/board');

//게시판 목록 가져오기
router.get('/all', async function(req, res, next){
    res.json(await knex_query.boardall());
});

//
module.exports = router;