import TodoItem from './../components/TodoComponents/TodoItem.vue';

export const routes = [
    {path:'/all',component : TodoItem},
    {path:'/active',component : TodoItem},
    {path:'/completed',component : TodoItem}
]
