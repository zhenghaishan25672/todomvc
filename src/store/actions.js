import { ADD_TODO } from "./mutation-types";
import { DELETE_TODO } from "./mutation-types";
import { ALL_COMPLETED } from "./mutation-types";
import { ALL_ACTIVED } from "./mutation-types";
import { EDITING } from "./mutation-types";
import { RECOMPLETED } from "./mutation-types";
import { CLEARTODO } from "./mutation-types";
import { RECEIVE_TODOS } from "./mutation-types";
import storageUtil from './../util/storageUtil';
/*
接收组件通知触发mutation调用间接状态的方法对象
 */
export default{
    addTodo({commit},todo){
        commit(ADD_TODO,{todo})
    },
    deleteTodo({commit},todo){
        //返回与所选id不同的剩余id
        commit(DELETE_TODO,{todo})
    },
    allCompleted({commit}){
        //将所有completed设置为true
        commit(ALL_COMPLETED)
    },
    allActived({commit}){
        //将所有completed设置为true
        commit(ALL_ACTIVED)
    },
    editing({commit},todo){
        //编辑
        commit(EDITING,{todo})
    },
    reCompleted({commit},todo){
        commit(RECOMPLETED,{todo})
    },
    clearTodo({commit},todo){
        commit(CLEARTODO,{todo})
    },
    //异步获取todos并更新状态
    reqTodos({commit}){
        const todos = storageUtil.readTodos()
        //提交mutation
        commit(RECEIVE_TODOS,todos);
    },
}