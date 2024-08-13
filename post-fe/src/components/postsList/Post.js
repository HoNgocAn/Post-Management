import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Card, CardHeader, Avatar, IconButton, CardMedia, CardContent, Typography, CardActions, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import moment from 'moment';
import * as actions from "../../redux/actions"

function Posts({ post }) {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDelete = () => {
        dispatch(actions.deletePost.deletePostRequest(post._id));
        handleClose();
    };

    const clickLike = () => {
        dispatch(actions.updatePost.updatePostRequest({ ...post, likeCount: post.likeCount + 1 }));
    };

    return (
        <Card>
            <CardHeader
                avatar={<Avatar>A</Avatar>}
                title={post.author}
                subheader={moment(post.updatedAt).format('DD/MM/YYYY')}
                action={
                    <>
                        <IconButton onClick={handleClick}>
                            <MoreVertIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={() => handleDelete()}>Delete</MenuItem>
                        </Menu>
                    </>
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