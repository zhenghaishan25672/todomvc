/*
包含所有基于state的getter计算属性的对象
*/
export default{
    //剩余代办事项
    count(state){
        return state.todos.reduce((preTotal,todo) => {
            return preTotal + (todo.completed ?0:1) 
        },0)
    },
    showClear(state){
        return state.todos.some((todo) => todo.completed == true);
    },
    total(state){
        return state.todos.length;
    },

}