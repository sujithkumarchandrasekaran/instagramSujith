import React from 'react';
import { Box, Divider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

    caption: {
        color: 'black',
        marginLeft: '0',
        paddingTop: '1%',
        paddingRight: '1%',
        paddingBottom: '1%'
    },

    hashtags: {
        color: 'blue',
        marginLeft: '0',
        paddingTop: '1%',
        paddingRight: '1%',
        paddingBottom: '1%'
    },

    separator: {
        marginTop: '3%',
        marginBottom: '2%',
        marginLeft: '0'
    }

});

export default function PostCaption(props) {
    const classes = useStyles();
    let hashtags = (!props.text) ? " " : props.text.split(' ').filter(str => str.startsWith('#')).join(' ');
    let caption = (!props.text) ? " " : props.text.split(' ').filter(str => !str.startsWith('#')).join(' ');
    return (
        <Box width="100%" >
            <Divider className={classes.separator} />
            <Typography className={classes.caption} variant="subtitle1">{caption}</Typography>
            <Typography className={classes.hashtags} variant="subtitle2">{hashtags}</Typography>
        </Box>
    );
}