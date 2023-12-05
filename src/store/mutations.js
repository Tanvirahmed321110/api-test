// export const ADD_TO_DO_LIST = (state,data)=>{
//     state.playersId.push(data)
//     console.log(data)
// }



export const ADD_TO_DO_LIST = (state,data)=>{
    state.names.push(data)
}


export const GET_DATA =(state,data)=>{
    state.postData.push(data)
}