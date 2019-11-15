<template>
    <div id='input_footer' v-show='total'>
        <!-- 计数代办事项 -->
            <div class='input_footer_count'>{{count}} items left</div>
        <!-- 显示全部 -->
            <router-link 
                tag = 'div' 
                to = '/all' 
                class='input_footer_all' 
                :class="{selected: this.$route.path == '/all' || this.$route.path == '/'}" >
                All
            </router-link>
        <!-- 显示代办事项-->
            <router-link 
                tag = 'div' 
                to = '/active' 
                class='input_footer_active' 
                :class="{selected: this.$route.path == '/active'}" >
                Active
            </router-link>
        <!-- 显示完成的事项 -->
            <router-link 
                tag = 'div' 
                to = '/completed'  
                class='input_footer_completed' 
                :class ="{selected: this.$route.path == '/completed'}" >
                Completed
            </router-link>
        <!-- 清除完成的事项 -->
        <div 
            class='input_footer_clear' 
            v-show='showClear' 
            @click ='clearTodo'>
            Clear
        </div>

    </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default{
    name:'TodoFooter',
    computed: {
        ...mapGetters(['count','showClear','total']),
    },
    methods:{
        clearTodo(){
            this.$store.dispatch('clearTodo');
        },
    },
}

</script>

<style scoped>
    a{
        text-decoration:none;
    }
    #input_footer{
        width: 400px;
        height: 30px;
        background:white;
        border-top: 1px solid gainsboro;
        font-family: Arial;
        font-size: 14px;
        color: #888888;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),
                    0 8px 0 -3px #f6f6f6,
                    0 9px 1px -3px rgba(0, 0, 0, 0.2),
                    0 16px 0 -6px #f6f6f6,
                    0 17px 2px -6px rgba(0, 0, 0, 0.2);
    }
    .input_footer_count{
        position: absolute;
        margin-top: 5px;
        margin-left: 10px;
        display: inline-block;
        cursor: default;
    }
    .input_footer_all{
        position: absolute;
        width: 25px;
        height: 20px;
        margin-top:5px;
        margin-left:120px;
        text-align: center;
        line-height: 20px;
        cursor: pointer;
    }
   
    .input_footer_active{
        position: absolute;
        width: 45px;
        height: 20px;
        margin-top:5px;
        margin-left:155px;
        text-align: center;
        line-height: 20px;
        cursor: pointer;
    }
    .input_footer_completed{
        position: absolute;
        width: 72px;
        height: 20px;
        margin-top:5px;
        margin-left:210px;
        text-align: center;
        line-height: 20px;
        cursor: pointer;
    }
    .input_footer_clear{
        position: absolute;
        width: 40px;
        height: 20px;
        margin-top:5px;
        margin-left:332px;
        text-align: center;
        line-height: 20px;
        cursor: pointer;
    }
     .selected{
        margin-top:4px;
        border-radius: 2px;
        border: 1px solid burlywood;
    }
</style>