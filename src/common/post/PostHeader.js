import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ProfileIcon from '../../common/profile/ProfileIcon';

const useStyles = makeStyles({

    header: {
        width: '100%',
        marginLeft: '0',
        paddingTop: '1%',
        paddingRight: '1%',
        paddingBottom: '1%'
    },

    bold: {
        fontWeight: 750
    },

    lite: {
        fontWeight: 500
    }

});



export default function PostHeader(props) {
    const classes = useStyles();

    return (
        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-start" className={"post-user " + classes.header}>
            <ProfileIcon type="avatarOnly" />
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="flex-start">
                <Typography className={classes.bold} variant="body1">{props.postUser}</Typography>
                <Typography className={classes.lite} variant="subtitle2">{props.postedTime}</Typography>
            </Box>
        </Box>
    );
}