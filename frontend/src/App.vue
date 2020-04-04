<template>

  <div id="app">
  <el-menu :default-active="activeIndex" class="el-menu-demo" background-color = "#264026" text-color="#fff" active-text-color="#ffd04b" mode="horizontal" @select="handleSelect">
  
  <el-menu-item index="1">Home</el-menu-item>
  <el-menu-item index="2">About</el-menu-item>
    </el-menu>
    <el-card class="box-card" style = "margin-top: 1.5%" >
  <div slot="header" class="clearfix">
    <span>Dining Staffing Prediction Form</span>
  </div>
  <el-form ref="form" :model="form" label-width="120px" size="mini">
    <el-form-item label="Meal type">
    <el-select v-model="form.meal" placeholder="please select" style = "margin-left: -60%">
      <el-option label="Breakfast" value="0"></el-option>
      <el-option label="Lunch" value="1"></el-option>
      <el-option label="Dinner" value="2"></el-option>
    </el-select>
    </el-form-item>
    <el-form-item label="Day of the week" >
    <el-select v-model="form.day" placeholder="please select" style = "margin-left: -60%">
      <el-option label="Sunday" value="0"></el-option>
      <el-option label="Monday" value="1"></el-option>
      <el-option label="Tuesday" value="2"></el-option>
      <el-option label="Wednesday" value="3"></el-option>
      <el-option label="Thursday" value="4"></el-option>
      <el-option label="Friday" value="5"></el-option>
      <el-option label="Saturday" value="6"></el-option>
    </el-select>
    </el-form-item>
    <el-form-item label="Location">
    <el-select v-model="form.location" placeholder="please select" style = "margin-left: -60%">
      <el-option label="Buffet" value="0"></el-option>
      <el-option label="The Mix" value="1"></el-option>
      <el-option label="C store" value="2"></el-option>
      <el-option label="Edge" value="3"></el-option>
    </el-select>
    </el-form-item>
    <el-form-item label="Week Number">
    <el-input v-model="form.week" style = "width: 40%; margin-left: -58%"></el-input>
  </el-form-item>
  <el-form-item label="Year">
    <el-input v-model="form.year" style = "width: 40%; margin-left: -58%"></el-input>
  </el-form-item>
  <el-form-item label="Temperature">
    <el-input v-model="form.temp" style = "width: 40%; margin-left: -58%"></el-input>
  </el-form-item>
  <el-form-item label="Snow Amount">
    <el-input v-model="form.snow" style = "width: 40%; margin-left: -58%"></el-input>
  </el-form-item>
  <el-form-item label="Precipitation Amount">
    <el-input v-model="form.prec" style = "width: 40%; margin-left: -58%"></el-input>
  </el-form-item>
  
  <el-form-item label="Semester">
    <el-radio-group v-model="form.semester" size="small" style = "margin-left: -60%">
      <el-radio border label="Fall"></el-radio>
      <el-radio border label="Spring" style = "margin-left: -10%"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="Event type">
    <el-checkbox-group v-model="form.type" >
      <el-checkbox-button label="NOAA(Severe weather)" name="type" style = "margin-left: -23%"></el-checkbox-button>
      <el-checkbox-button label="Football/Holiday Weekend" name="type"></el-checkbox-button>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item size="large" style = "margin-left: -25%" >
    <el-button type="success" @click="onSubmit" style = "color: black">Predict</el-button>
  </el-form-item>
  </el-form>
    </el-card>
    
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
      activeIndex2: '1',
      form: {
        day: '', 
        meal: '',
        prec: '', 
        snow: '',
        type: [],
        temp: '',
        year: '',
        week: '',
        location: '',
        semester: ''
      }
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
  background-color: #f9f9f9;
  padding-bottom: 31%
}
.el-card__header {
    padding: 18px 20px;
    border-bottom: 1px solid #EBEEF5;
    box-sizing: border-box;
    background-color: #949245;
}
.text {
    font-size: 14px;
  }
.el-input__inner {
    -webkit-appearance: none;
    background-color: #FFF;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #DCDFE6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
}
  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
.box-card {
    width: 600px;
    align-self: auto;
    margin-left: 27%
  }
</style>
