<template>

  <div id="app">
  <el-menu :default-active="activeIndex" class="el-menu-demo" background-color = "#264026" text-color="#fff" active-text-color="#ffd04b" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">Home</el-menu-item>
  <el-menu-item index="2">About</el-menu-item>
    </el-menu>
    <img alt="Vue logo" src="./assets/logo.png"/>
    <p>{{msg}}</p>
  </div>
  
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  
  data() {
    return {
      msg: '',
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    getMessage() {
      axios.get('http://localhost:5000/api/getMessage')
        .then((res) => {
          this.msg = res.data;
          console.log(this.msg);
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
  },
  created() {
    this.getMessage();
  },
};

</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: -15px;
  margin-left: -10px;
  margin-right: -10px;
}
</style>
