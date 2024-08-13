import { takeLatest, call, put } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../../api";

function* fetchPostSaga(action) {
    try {
        const posts = yield call(api.fetchPosts);
        yield put(actions.getPosts.getPostsSuccess(posts.data))
    } catch (error) {
        yield put(actions.getPosts.getPostsFailure(error))
    }
}

function* createPostSaga(action) {
    try {
        const posts = yield call(api.createPost, action.payload);
        console.log("Check >>>>", posts);
        yield put(actions.createPost.createPostSuccess(posts.data))
    } catch (error) {
        yield put(actions.createPost.createPostFailure(error))
    }
}

function* updatePostSaga(action) {
    try {
        const posts = yield call(api.updatePost, action.payload);
        console.log("Check >>>>", posts);
        yield put(actions.updatePost.updatePostSuccess(posts.data))
    } catch (error) {
        yield put(actions.updatePost.updatePostFailure(error))
    }
}

function* deletePostSaga(action) {
    try {
        const { id } = action.payload;
        yield call(api.deletePost, id);
        yield put(actions.deletePost.deletePostSuccess(id));
    } catch (error) {
        yield put(actions.deletePost.deletePostFailure(error));
    }
}

function* mySaga() {
    yield takeLatest(actions.getPosts.getPostsRequest, fetchPostSaga);
    yield takeLatest(actions.createPost.createPostRequest, createPostSaga);
    yield takeLatest(actions.updatePost.updatePostRequest, updatePostSaga);
    yield takeLatest(actions.deletePost.deletePostRequest, deletePostSaga);
}

export default mySaga;