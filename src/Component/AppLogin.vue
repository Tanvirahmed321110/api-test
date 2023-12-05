<template>
  <div class="login">
    <div class="login-wraper">
      <h2>Login Page</h2>
      <div class="login-form">
        <form @submit.prevent="loginF" action="#">
          <input v-model="loginData.email" type="text" placeholder="*email">
          <input v-model="loginData.password" type="password" placeholder="*password">
          <input type="submit" value="Login">
        </form>
      </div>
    </div>
  </div>
  <div class="nameAndEmail">
    {{ nameAndEmail}}
  </div>
</template>

<script>
export default {
  data(){
    return {
       loginData:{
        email: '',
        password: '',
       }
    }
  },
  methods:{
    loginF(){
      if(this.loginData.email== '' || this.loginData.password == ''){
        alert('Please type Email and Password')
        return;
      }else {
          
        if(this.loginData.password.length <=4){
          alert ('Password Length Must Be 4 Letter Up')
          return
        }
         else {
          alert(`${this.loginData.email }  ${this.loginData.password}`)
          this.loginData.email = ''
          this.loginData.password = ''
         }
      }
    }
  },
   computed:{
     nameAndEmail(){
       return `${this.loginData.email}    ${this.loginData.password}`
     }
   }
};
</script>


// style
<style>
  .login-form{
    width: 500px;
    margin: 0 auto;
    padding:45px;
    text-align: center;
    background: rgb(111, 112, 112);
    border-radius: 5px;
  }
  .login-form .product-from{
    background: orange;
  }
</style>
