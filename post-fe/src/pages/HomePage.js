import React, { useState } from 'react';
import { Container, Fab } from '@mui/material';
import Header from '../components/header/Header';
import PostsList from '../components/postsList/PostsList';
import AddIcon from "@mui/icons-material/Add";
import "./HomePage.css";
import ModalCreate from '../components/postsList/ModalCreate';


function HomePage(props) {


    const [ishow, setIsShow] = useState(false);

    const handleCreatePost = () => {
        setIsShow(true)
    }

    return (
        <>
            <Container maxWidth="lg" >
                <Header />
                <PostsList />
                <Fab className='add-icon' color="primary" onClick={() => handleCreatePost()}>
                    <AddIcon />
                </Fab>
                <ModalCreate
                    title="Create New Post"
                    isShowModal={ishow}
                    setIsShowModal={setIsShow} />
            </Container>
        </>

    );
}

export default HomePage;
