import React from 'react';
import { Typography } from '@mui/material';
import "./Header.css";

function Header(props) {

    return (
        <Typography variant='h4' align='center' className='header'>
            Blog
        </Typography>
    );
}

export default Header