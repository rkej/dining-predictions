<template>

  <div id="app">
  <el-menu :default-active="activeIndex" class="el-menu-demo" background-color = "#491d70" text-color="#fff" active-text-color="#ffd04b" mode="horizontal">
  
  <el-menu-item index="1">Home</el-menu-item>
    </el-menu>
    <el-card class="box-card" style = "margin-top: 1.5%" >
  <div slot="header" class="clearfix">
    <span>Dining Staffing Prediction Form</span>
  </div>
  <el-form ref="form" :model = "form" label-width="120px" size="mini">
    <el-form-item label="Meal type" prop = "meal" required>
    <el-select v-model="form.meal" placeholder="please select" style = "margin-left: -59%" required>
      <el-option label="Breakfast" value="0"></el-option>
      <el-option label="Lunch" value="1"></el-option>
      <el-option label="Dinner" value="2"></el-option>
    </el-select>
    </el-form-item>
    <el-form-item label="Day" prop = "day" required>
    <el-select v-model="form.day" placeholder="please select" style = "margin-left: -59%">
      <el-option label="Sunday" value="0"></el-option>
      <el-option label="Monday" value="1"></el-option>
      <el-option label="Tuesday" value="2"></el-option>
      <el-option label="Wednesday" value="3"></el-option>
      <el-option label="Thursday" value="4"></el-option>
      <el-option label="Friday" value="5"></el-option>
      <el-option label="Saturday" value="6"></el-option>
    </el-select>
    </el-form-item>
    <el-form-item label="Location" prop = "location" required>
    <el-select v-model="form.location" placeholder="please select" style = "margin-left: -59%">
      <el-option label="Buffet" value="0"></el-option>
      <el-option label="The Mix" value="1"></el-option>
      <el-option label="Edge" value="2"></el-option>
    </el-select>
    </el-form-item>
    <el-form-item label="Week Number" prop = "week" required>
    <el-input v-model="form.week" style = "width: 40%; margin-left: -58%" ></el-input>
  </el-form-item>
  <el-form-item label="Year" prop = "year" required>
    <el-input v-model="form.year" style = "width: 40%; margin-left: -58%"></el-input>
  </el-form-item>
  <el-form-item label="Temperature" prop = "temp" required>
    <el-input v-model="form.temp" style = "width: 40%; margin-left: -58%"></el-input>
  </el-form-item>
  <el-form-item label="Snow Amount" prop = "snow" required>
    <el-input v-model="form.snow" style = "width: 40%; margin-left: -58%"></el-input>
  </el-form-item>
  <el-form-item label="Precipitation Amount" prop = "prec" required>
    <el-input v-model="form.prec" style = "width: 40%; margin-left: -58%"></el-input>
  </el-form-item>
  
  <el-form-item label="Semester" prop = "semester" required>
    <el-radio-group v-model="form.semester" size="small" style = "margin-left: -60%">
      <el-radio border label="Fall" value = "1"></el-radio>
      <el-radio border label="Spring" value = "0" style = "margin-left: -10%"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="Event type" prop = "type">
    <el-checkbox-group v-model="form.type" >
      <el-checkbox-button label="NOAA(Severe weather)" name="type" style = "margin-left: -23%"></el-checkbox-button>
      <el-checkbox-button label="Football/Holiday Weekend" name="type"></el-checkbox-button>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item size="large" style = "margin-left: -25%" >
    <el-button @click="onSubmit('form')" style = "color: black; background-color:#FFD100" >Predict</el-button>
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
      },
       rules: {
          day: [
            { required: true, message: 'Please check your inputs!', trigger: 'blur' },
          ],
          location: [
            { required: true, message: 'Please select Activity zone', trigger: 'blur' }
          ],
          year: [
            {required: true, message: 'Please check your inputs', trigger: 'blur' }
          ],
          snow: [
            {required: true, message: 'Please check your inputs!', trigger: 'blur' }
          ],
          
          prec: [
            {required: true, message: 'Please check your inputs!', trigger: 'blur' }
          ],
          temp: [
            {required: true, message: 'Please check your inputs!', trigger: 'blur' }
          ],
          semester: [
            {required: true, message: 'Please check your inputs!', trigger: 'blur' }
          ],
          week: [
            {required: true, message: 'Please check your inputs!', trigger: 'blur' }
          ],
          meal: [
            {required: true, message: 'Please check your inputs!', trigger: 'blur' }
          ]
       }
    };
  },
  
  methods: {
    onSubmit(formName){
      this.$refs[formName].validate((valid) => {
          if (valid) {
            axios.post('/api/getPredictions', this.form)
        .then(response=>{
            alert("The predicted customers is: " + response.data);
        })
          }
        });
    },
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
    background-color: #264026;
    color: #ffffffff;
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
    margin: 0 auto
  }
</style>
