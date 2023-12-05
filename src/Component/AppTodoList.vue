<template>
    <div class="todo-list">
        <h2>To Do List</h2>
        <input type="text" v-model="toDoName">
        <button @click="addToDoList">Add</button>
        <hr>
        
        <ul>
            <li v-for="each in nameList" :key="each"> {{ each }}</li>
        </ul>
        <div v-for="post in postData" :key="post">
            <li>_</li>
            <p>{{ post.title }}</p>
        </div>
    </div>
</template>


<script>
import { computed,onMounted } from 'vue'
import { useStore } from 'vuex'
import { comState } from '../assets/comState'

    export default{
        setup(){
            const store =  useStore()
            const {toDoName,postData} = comState()
            
            const nameList = computed(()=>{
                return store.state.names
            })
            
            const addToDoList = ()=>{
                store.dispatch("addToDo",{title:toDoName.value,id:1})
                toDoName.value = ''
            }
            
            // onMounted(()=>{
            //     store.dispatch("getData")
            //     .then(data=>postData.value = data)
            //     .catch((error)=>{console.log(error)})
            // })
            
            onMounted(()=>{
                store.dispatch('getData')
                .then(data=> postData.value = data)
                .catch(error=>console.log(error))
            })
            
            return {toDoName,addToDoList,nameList,postData}
        }
    }
</script>



<style>
    .todo-list{
        border: 1px solid rgba(189, 185, 189, 0.445);
        width: 533px;
        padding: 40px;
        margin: 0 auto;
        border-radius: 12px;
    }
    button{
        padding: 5px 15px;
    }
</style>