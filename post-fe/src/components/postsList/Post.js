import React from 'react';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import moment from 'moment';
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions";

function Posts({ post }) {

    const dispatch = useDispatch();

    const clickLike = () => {
        dispatch(actions.updatePost.updatePostRequest({ ...post, likeCount: post.likeCount + 1 })); // Gửi dữ liệu đi
    };

    return (
        <Card>
            <CardHeader avatar={<Avatar>A</Avatar>}
                title={post.author}
                subheader={moment(post.updatedAt).format('DD/MM/YYYY')}
                action={
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                }
            />
            <CardMedia
                component="img"
                image={`data:image/jpeg;base64,${post.attachment}`}
                title="Title"
                style={{
                    width: "95%",
                    height: "250px",
                    objectFit: 'cover',
                    display: 'block',
                    margin: '0 auto'
                }}
            />
            <CardContent>
                <Typography variant='h5' color="textPrimary">{post.title}</Typography>
                <Typography
                    variant='body2'
                    component="p"
                    color="textSecondary"
                    style={{ textAlign: "justify", width: "100%" }}
                >
                    {post.content}
                </Typography>
            </CardContent>
            <CardActions onClick={() => clickLike()}>
                <IconButton>
                    <FavoriteIcon />
                    <Typography component="span" color="textSecondary">{post.likeCount}</Typography>
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default Posts;