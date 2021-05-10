const express = require('express');
const mariaDB = require('../lib/mariadb');

//게시물 전체가져오기
const boardall = function(){
    return mariaDB.select().from('si_board');
}

//게시물 상세가져오기
const boarddetail = function(id){    
    return mariaDB.select().from('si_board').where('board_no', id);
}

//게시물 등록
const boardinsert = function(data){    
    return mariaDB('si_board').insert({user_no: 1, board_title: data.title, board_content: data.content});
}

//게시물 수정
const boardupdate = function(data){    
    return mariaDB('si_board').where('board_no', data.board_no).update({board_title: data.title, board_content: data.content});
}

//게시물 삭제
const boarddelete = function(data){    
    return mariaDB('si_board').where('board_no', data.board_no).del();
}

module.exports = {
    boardall: boardall,
    boarddetail: boarddetail,
    boardinsert: boardinsert,
    boardupdate: boardupdate,
    boarddelete: boarddelete
}
