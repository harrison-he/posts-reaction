import axios from 'axios'
import {
    GET_POSTS_START,
    GET_POSTS_SUCCESS,
    GET_POSTS_FAILURE
} from './../Constants/HomeConstants'

const url = "https://jsonplaceholder.typicode.com/posts"

export function getPosts() {
    return dispatch => {
        dispatch(getPostsStart())
        axios.get(url)
        .then(({ data }) => dispatch(getPostsSuccess(data)))
        .catch(err => dispatch(getPostsFailure(err)))
    }
}

function getPostsStart() {
    return {
        type: GET_POSTS_START
    }
}

function getPostsSuccess(posts) {
    return {
        type: GET_POSTS_SUCCESS,
        posts
    }
}

function getPostsFailure(error) {
    return {
        type: GET_POSTS_FAILURE,
        error
    }
}