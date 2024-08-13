import { createActions } from "redux-actions";

export const getType = (reduxAction) => {
    return reduxAction().type;
}

export const getPosts = createActions({
    getPostsRequest: undefined,
    getPostsSuccess: (payLoad) => payLoad,
    getPostsFailure: (err) => err
})

export const createPost = createActions({
    createPostRequest: (payLoad) => payLoad,
    createPostSuccess: (payLoad) => payLoad,
    createPostFailure: (err) => err
})

export const updatePost = createActions({
    updatePostRequest: (payLoad) => payLoad,
    updatePostSuccess: (payLoad) => payLoad,
    updatePostFailure: (err) => err
})

export const deletePost = createActions({
    deletePostRequest: (id) => ({ id }),
    deletePostSuccess: (id) => ({ id }),
    deletePostFailure: (error) => ({ error })
});


