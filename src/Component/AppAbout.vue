<template>
    <div>
        <h2>About</h2>
        <div class="todo-app">
            <div class="todo-app-wraper">
                <div class="add-todo">
                    <h3>ToDo List  <span v-if="todos.length">({{totalComplete}}/{{totalTodos}})</span></h3>  
                    <div class="add-wraper">
                        <input v-model="newTodo" type="text" placeholder="Add a Todo">
                        <button @click="addTodo">Add</button>
                    </div>
                </div>
                <div v-if="todos.length">
                    <div  class="show-todo" v-for="(todo,index) in todos" :key="index">
                        <div>
                            <input @input="selectedF(index)" :checked="todo.completed" type="checkbox" :id="`todo-${todo.id}`" >
                            <label  :for="`todo-${todo.id}`">{{todo.name}}</label>
                        </div>
                        <button @click="deleteTodo(index)">Delete</button>
                    </div>
                </div>
                <div v-else class="div">
                    No Data
                </div>
            </div>
        </div>
        {{ $route.query.email }}
        {{ id }}
    </div>
</template>



<script>
import { useRoute } from 'vue-router';
export default {
    props:['id'],
    data(){
        return{
            todos:[
                {name:"Todo-1",id:1, completed:false},
                {name:"Todo-2",id:2, completed:true}
            ],
            newTodo:''
        }
    },
    methods:{
        addTodo(){
            if(this.newTodo==''){
                return;
            }
            else {
                this.todos.push({
                    id: this.todos.length+1,
                    name: this.newTodo,
                    completed:false
                })
                this.newTodo = ''
            }
        },
        selectedF(index){
            this.todos[index].completed = !this.todos[index].completed
        },
        deleteTodo(index){
            this.todos.splice(index,1)
            console.log(index)
        },
        call(){
            console.log(useRoute().query.email)
            console.log(useRoute().params.id)
        }
    },
    computed:{
        totalTodos(){
            return this.todos.length
        },
        totalComplete(){
            return this.todos.filter((each)=>each.completed).length
        }
    },
    mounted(){
        this.call()
    }
}
</script>


<style>

    .todo-app-wraper{
        width:400px;
        margin: 0 auto;
        border:1px solid rgb(243, 233, 216);
        padding:15px;
    }
    .todo-app-wraper input{
        width:80%;
        border:none;
        border-bottom: 2px solid black;
        border-radius: 0;
        padding: 10px 10px;
    }
    .add-wraper{
        display: flex;
        gap:10px;
        align-items: center;
    }
    .add-wraper button{
        padding: 10px !important;
        height: 40px;
        font-weight: 600;
        background: rgb(71, 71, 70);
        border: none;
        border-radius: 3px;
        color:white;
    }
    .add-wraper button:active{
        border:1px solid red;
    }
    .show-todo{
        display: flex;
        /* justify-content: center; */
        justify-content: space-between;
        align-items: center;
    }
    .show-todo div{
        display: flex;
        align-items: center;
        gap:5px;
        width:39%;
        justify-content: center !important;
    }
    .show-todo input{
        width:20%
    }
    label{
        width:100%;
        display: inline-block;
  }
</style>