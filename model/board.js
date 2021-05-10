const express = require('express');
const mariaDB = require('../lib/mariadb');

//유저 단일정보
const boardall = function(){
    return mariaDB.select().from('si_board');
}


module.exports = {
    boardall: boardall
}
