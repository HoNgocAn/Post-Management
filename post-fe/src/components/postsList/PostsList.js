import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import Posts from './Post';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from "../../redux/actions";
import { postsState$ } from "../../redux/selectors/index";

function PostsList(props) {

    const dispatch = useDispatch();
    const posts = useSelector(postsState$);

    useEffect(() => {
        dispatch(actions.getPosts.getPostsRequest())
    }, [dispatch])

    return (
        <Grid container spacing={2} sx={{ textAlign: 'left' }}>
            {posts && posts.map(post => (
                <Grid item xs={12} sm={6} md={6} key={post._id}>
                    <Posts post={post} />
                </Grid>
            ))}
        </Grid>
    );
}

export default PostsList;


