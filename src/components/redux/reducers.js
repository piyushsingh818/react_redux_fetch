
const initialState = {
    title: [],
    userid:"",
    id:"",
    loading:false
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_POSTS_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_POSTS_SUCCESS':
        return { ...state, loading: false, title: action.payload };
      case 'FETCH_POSTS_FAILURE':
        return { ...state, loading: false };
      default:
        return state;
    }
  };
  
  export default postReducer;