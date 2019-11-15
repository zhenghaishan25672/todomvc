<template>
    <div><!--避免 v-if 和 v-for 用在一起   可以将v-if移至容器元素-->
         <div class = "input_detail" 
              v-for="todo in filteredTodos"
              :key="todo.id" 
             > <!--为 v-for 设置键值 -->
             <!-- v-show='show(todo)' -->
            <div class="input_detail_img" 
                :class="{'input_detail_img_active':todo.completed}" 
                @click = "reCompleted(todo)">
            </div>

            <div class ="input_detail_delete" 
                 @click="deleteTodo(todo)">
                删除
            </div>
            
            <textarea class='input_detail_content' 
                :class="{'input_detail_img_content':todo.completed,'input_detail_content_active':!todo.edit}"
                v-model="todo.title" 
                @dblclick ='editing(todo);'
                @blur='editing(todo);'
                :readonly="todo.edit"
                >
            </textarea>

         </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import storageUtil from './../../util/storageUtil';
// import storageUtil from './../../util/storageUtil'

export default{
    name: 'Todos',
    watch:{     //深度监视todos的变化，并保存如localstorage中
        todos:{
            deep:true,
            handler:storageUtil.saveTodos
        }
    },
    computed:{
        ...mapState(['todos']),
        /*这里不需要更改todos中的值，只需要拿出来做筛选，所以就不用状态管理了*/ 
        filteredTodos(){
            switch(this.$route.path){
                case '/all': 
                    return this.todos;
                case '/active':
                    return this.todos.filter(todo => todo.completed == false);
                case '/completed':
                    return this.todos.filter(todo => todo.completed == true);
                default:
                    break;
            }
            return this.todos;
        },     
    },
    methods: {
        editing(todo) {  
            this.$store.dispatch('editing',todo);
        },
        deleteTodo(todo){
            this.$store.dispatch('deleteTodo',todo);
        },
        reCompleted(todo){
            this.$store.dispatch('reCompleted',todo);
        },
        
  }
}
</script>

<style scoped>/* 为组件样式设置作用域 */
    .input_detail{
        width: 400px;
        height:50px;
        background:white;
        border-top: 1px solid gainsboro;
    }
    .input_detail_content{
        width:300px;
        height:49px;
        line-height: 50px;
        margin-left: 40px;
        color: black;
        font-family:Arial;
        font-style: italic;
        font-size: 20px;
        border: 0px;
        cursor: default;
        resize:none;
        outline:none;
        overflow: hidden; 
        text-overflow: ellipsis;
        white-space: nowrap;  
        transition:0.2s linear; 
    }
    .input_detail_delete{
        margin-left: 350px;
        margin-top:14px;
        position:absolute;
        color: red;
        font-family:Arial;
        font-style: italic;
        font-size: 15px;
        cursor: pointer;
        display: none;
    }
    .input_detail:hover .input_detail_delete{
        display: block;
    }
     .input_detail_img{
        width: 37px;
        height: 37px;
        background-image: url(./../../assets/choose.png);
        background-size:37px 37px;
        position:absolute;
        margin-top:6px;
        margin-left:1px;
    }
    .input_detail_img_active{
        background-image: url(./../../assets/choosed.png);
    }
    .input_detail_img_content{
        text-decoration: line-through;
        opacity: 0.3;
    }
    .input_detail_content_active{
        box-shadow: 0px 0px 5px #888888 inset;
        opacity: 1;
        text-decoration: none;
    }
</style>