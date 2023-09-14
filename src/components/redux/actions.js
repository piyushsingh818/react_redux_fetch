import axios from "axios";

 export const fetchPostsUsingAxios = ()=> async (dispatch) =>{
    dispatch({type:"FETCH_POSTS_REQUEST"});

    try{
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
        dispatch({type:"FETCH_POSTS_SUCCESS", payload:response.data})
    }catch(error){
        dispatch({type:"FETCH_POSTS_FAILURE"})
    }

};