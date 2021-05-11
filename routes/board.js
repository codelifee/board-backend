const express = require('express');
const router = express.Router();
const knex_query = require('../model/board');

//게시판 목록 가져오기
router.get('/all', async function(req, res, next){
    res.json(await knex_query.boardall());
});

//게시물 상세
router.get('/:id', async function(req, res, next){    
    res.json(await knex_query.boarddetail(req.params.id));
});

//게시물 등록
router.post('/', async function(req, res, next){    
    res.json(await knex_query.boardinsert(req.body));
});

//게시물 수정
router.put('/:id', async function(req, res, next){
    res.json(await knex_query.boardupdate(req.body));    
});

//게시물 삭제
router.delete('/', async function(req, res, next){    
    res.json(await knex_query.boarddelete(req.body));
});


//
module.exports = router;