import { reactive, toRefs } from "vue"

export const comState = ()=>{
    const state = reactive({
        toDoName : 'Hello new',
        devName : 'Tanvir AHmed',
        postData : []
    })
    return toRefs(state)
}