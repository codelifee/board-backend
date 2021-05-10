const express = require('express');
const mariaDB = require('../lib/mariadb');

//유저 단일정보
const userall = function(){
    return mariaDB.select('user_no','user_id','user_name').from('si_users');
}

//유저 단일정보
const userinfo = function(data){
    return mariaDB.select('user_id','user_name').from('si_users').where('user_no', id);
}

//유저 정보업데이트
const userupdate = function(data){
    return mariaDB('si_users').where('user_no', data.user_id).update({user_name:data.user_name});
}

//유저 정보등록
const userinsert = function(data){
    const newpwd = mariaDB.raw('select password(?) as newpwd', data.user_pwd).then((res) =>{ 
        return mariaDB('si_users').insert({user_id: data.user_id, user_pwd:res[0][0].newpwd, user_name:data.user_name});
    });
}

//유저 정보삭제
const userdelete = function(data){
    return mariaDB('si_users').where('user_no', data.user_id).del();
}

module.exports = {
    userall: userall,
    userinfo: userinfo,
    userupdate: userupdate,
    userinsert: userinsert,
    userdelete: userdelete
}
