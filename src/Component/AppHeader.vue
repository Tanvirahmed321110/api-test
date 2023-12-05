<template>

    <div class="header">
        <div class="header-wraper">
            <h3>Logo</h3>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="login">Login</router-link></li>
                <li><router-link to="register">Register</router-link></li>
                <li><router-link to="other">Product</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppHeader'
}
</script>

<style scoped>
    
    .header-wraper{
        width:100%;
        background:blueviolet;
        display: flex;
        font-size: 28px;
        color :white;
        align-items: center;
        /* z-index: 10; */
        height:70px;
    }
    .header-wraper ul{
        
        display: flex;
        align-items: center;
        margin-left: auto;
    }
    .header-wraper a {
        
        color :white;
        font-size: 20px;
        letter-spacing: 1px;
        margin: 0 15px;
    }
</style>