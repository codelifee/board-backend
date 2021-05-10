const express = require('express');
const router = express.Router();
const knex_query = require('../model/user');

//유저 단일정보 가져오기
router.get('/:id', async function(req, res, next){
    res.json(await knex_query.userinfo(req.params.id));
});

//유저 정보업데이트
router.put('/', async function(req, res, next){
    res.json(await knex_query.userupdate(req.body));
});

//유저 정보등록
router.post('/', async function(req, res, next){
    res.json(await knex_query.userinsert(req.body));
});

//유저 삭제
router.delete('/:id', async function(req, res, next){
    res.json(await knex_query.userdelete(req.body));
});

//
module.exports = router;