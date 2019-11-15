<template>
    <div id = "app">
      <div id="input_box">
        <TodoAdd/>
        <TodoItem/>
        <TodoFooter/>
      </div>
    </div>
</template>

<script>
/*npm i axios来进行ajax动态获取数据*/
// import axios from 'axios';

// 单文件组件的文件名应该要么始终是单词大写开头 (PascalCase)，要么始终是横线连接 (kebab-case)。
// 基础组件名？（展示类的、无逻辑的或无状态的组件) 全部以一个特定的前缀开头，比如 Base、App 或 V。
// 单例组件名(只应该拥有单个活跃实例的组件应该以 The 前缀命名，以示其唯一性。)
// 和父组件紧密耦合的子组件应该以父组件名作为前缀命名。
import TodoAdd from './components/TodoComponents/TodoAdd.vue';
import TodoItem from './components/TodoComponents/TodoItem.vue';//组件名称不能用单个单词
import TodoFooter from './components/TodoComponents/TodoFooter.vue';

export default {
  name: 'app',
// created:在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图。
// mounted:在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。
  mounted(){
    //发送命令给action：异步获取保存todos数据并显示
    this.$store.dispatch('reqTodos');
  },
  components: {
    TodoAdd,
    TodoItem,
    TodoFooter
  },
};
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  #input_box{
    width: 400px;
    background:white;
    position: absolute;
    left:50%;
    margin-left:-200px;
    margin-top:200px;
    box-shadow: 0px 2px 10px #888888;
  }
</style>
