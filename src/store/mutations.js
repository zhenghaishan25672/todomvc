/*
包含多个由action触发去直接更新状态的方法对象
*/
import { ADD_TODO } from "./mutation-types";
import { DELETE_TODO } from "./mutation-types";
import { ALL_COMPLETED } from "./mutation-types";
import { ALL_ACTIVED } from "./mutation-types";
import { EDITING } from "./mutation-types";
import { RECOMPLETED } from "./mutation-types";
import { CLEARTODO } from "./mutation-types";
import { RECEIVE_TODOS } from "./mutation-types";

export default{
    [ADD_TODO] (state,{todo}){
        state.todos.unshift(todo);
    },
    [DELETE_TODO] (state,{todo}){
        state.todos.splice(todo,1);
    },
    [ALL_COMPLETED](state){
        state.todos.forEach((todo) => {todo.completed = true});
    },
    [ALL_ACTIVED](state){
        state.todos.forEach((todo) => {todo.completed = false});
    },
    [EDITING](state,{todo}){
        todo.edit = !todo.edit;
    },
    [RECOMPLETED](state,{todo}){
        todo.completed = !todo.completed;
    },
    [CLEARTODO](state){
        state.todos = state.todos.filter(todo => !todo.completed);
    },  
    [RECEIVE_TODOS](state,todos){
        state.todos = todos;
    }, 
}