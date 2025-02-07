import React from 'react';
import './Footer.css';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import SkipPreviousOutlinedIcon from '@mui/icons-material/SkipPreviousOutlined';
import SkipNextOutlinedIcon from '@mui/icons-material/SkipNextOutlined';
import ShuffleOutlinedIcon from '@mui/icons-material/ShuffleOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import { Grid, Slider } from '@mui/material';
import PlaylistPlayOutlinedIcon from '@mui/icons-material/PlaylistPlayOutlined';
import VolumeDownOutlinedIcon from '@mui/icons-material/VolumeDownOutlined';



function Footer() {
    return (
        <div className='footer'>
            <div className='footer__left'>
                <img className='footer__albumLogo' src='https://upload.wikimedia.org/wikipedia/en/1/1a/Usher_-_8701.png' alt='' />
                <div className='footer__songInfo'>
                    <h4>Yeah!</h4>
                    <p>Usher</p>
                </div>
        </div>

            <div className='footer__center'>
                <ShuffleOutlinedIcon className='footer__green' />
                <SkipPreviousOutlinedIcon className='footer__icon' />
                <PlayCircleOutlineOutlinedIcon fontSize='large' className='footer__icon' />   
                <SkipNextOutlinedIcon className='footer__icon' />
                <RepeatOutlinedIcon className='footer__green' />
            </div>

            <div className='footer__right'>
            <Grid container spacing={2}>
                <Grid item>
                    <PlaylistPlayOutlinedIcon />
                </Grid>
                <Grid item>
                    <VolumeDownOutlinedIcon />
                </Grid>
                <Grid item xs>
                    <Slider />
                </Grid>
            </Grid>
            </div>
        </div>
    )
}

export default Footer
