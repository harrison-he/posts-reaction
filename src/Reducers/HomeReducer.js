import {
    GET_POSTS_START,
    GET_POSTS_SUCCESS,
    GET_POSTS_FAILURE
} from './../Constants/HomeConstants'

const initalState = {
    loading: false,
    error: null,
    posts: []
}

const sample = (state = initalState, action) => {
    switch (action.type) {
        case GET_POSTS_START:
            return {
                ...state,
                loading: true,
                error: null
            }
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: action.posts
            }
        case GET_POSTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state
    }
} 

export default sample