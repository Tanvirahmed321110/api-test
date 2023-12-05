
// export const addToDoList = ({commit},data)=>{
//     console.log(data)
//     commit ('ADD_TO_DO_LIST',data)
// }

export const addToDo = ({commit},data)=>{
    commit("ADD_TO_DO_LIST",data)
}




// export const getData = ({commit})=>{
//     console.log(commit)
//     return  fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((res)=>res.json())
//     .then((data)=>{
//         console.log(data)
//         return data;
//     })
//     .catch(error=>console.log(error))
// }

export const getData = ({commit}) =>{
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data)
        commit('GET_DATA',data.slice(1,3))
        return data;
    })
    .catch(error=>console.log(error))
}