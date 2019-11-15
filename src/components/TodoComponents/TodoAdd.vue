<template>
    

    <div>
        <!-- 利用ant来设计样式 -->
        <div class = 'input_detail'>
            <a-input placeholder="what needs to be done？"  @keydown.enter = 'submit' v-model='title' size= 'large'>
                <a-icon slot="prefix" type="down" @click='choosenAll' />
            </a-input>
        </div>
      <!-- 全选按钮 -->
        <div 
            id='choose_all' 
            @click='choosenAll' 
            ref='choose_all'>

        <i class="down"></i>

        </div>
      <!-- 输入框 -->
        <input 
            type='text' 
            id='input' 
            @keydown.enter = 'submit' 
            placeholder='what needs to be done？' 
            v-model='title'/>

    </div>
    
</template>

<script>
import uuid from 'uuid';

export default{ 
    name:'TodoAdd',
    data(){
        return{
            title:"" //内部组件使用的状态不需要使用vuex管理
        }
    },
    methods:{
        submit(){
            const todo = {
                id:uuid.v4(),
                title:this.title,
                completed:false,
                edit:true
            };
            this.$store.dispatch('addTodo',todo);
        },
        choosenAll(){
            if(this.$refs.choose_all.style.opacity != '1'){
                this.$refs.choose_all.style.opacity = 1;
                this.$store.dispatch('allCompleted');
            }else{
                this.$refs.choose_all.style.opacity = 0.2;
                this.$store.dispatch('allActived');
            }
        },
    }
}
</script>

<style scoped>
    input{
        width: 340px;
        height: 50px;
        border: 0px; 
        margin-left: 40px;
        font-family:Arial;
        font-style: italic;
        font-size: 20px;
    }
    input:focus{
        outline:none;
    }
    input::-webkit-input-placeholder {  
        opacity: 0.5;
    }
    #choose_all{
        position: absolute;
        width: 40px;
        height: 50px;
        opacity: 0.2;
        cursor: pointer;
        /* display: none; */
    }
    #choose_all i { 
        position: absolute;
        margin-left: 13px;
        margin-top: 18px;
        border: solid black;
        border-width: 0 2px 2px 0;
        display: inline-block;
        padding: 4px;
    }
    .down {
      transform: rotate(45deg);
    }
</style>