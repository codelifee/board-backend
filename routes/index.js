const express = require('express');
const router = express.Router();
const mariaDB = require('../lib/mariadb');

router.get('/', async function(req, res, next){
    res.json(await getdata());
});

async function getdata(){    
    return await mariaDB.select('user_id','user_name').from('si_users');
}

module.exports = router;