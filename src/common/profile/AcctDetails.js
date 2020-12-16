import React from 'react';
import { Box, Typography, Button, Modal, Backdrop, Fade, FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import EditIcon from "@material-ui/icons/Edit";
import { makeStyles } from '@material-ui/core/styles';
import ProfileIcon from './ProfileIcon';
import AcctIcon from './AcctIcon';

const useStyles = makeStyles({

    btnEdit: {
        borderRadius: '50px',
        minWidth: '50px',
        height: '50px',
        marginLeft: '5%'
    },

    profileDetails: {
        marginTop: '2%',
        marginBottom: '2%',
        marginLeft: '25%',
        marginRight: '25%'
    },

    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    modalContent: {
        backgroundColor: "white",
        borderRadius: "2%",
        padding: "2%",
        display: "flex",
        flexDirection: "column"
    },

    btnUpdate: {
        marginTop: "12%"
    },

    dispNone: {
        display: "none"
    },

    dispBlock: {
        display: 'block'
    }
});

export default function ProfileDetails(props) {

    const [fullName, setFullName] = React.useState(props.fullName);
    const [input, setInput] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [error, setError] = React.useState("dispNone");
    const classes = useStyles();

    const openModal = () => {
        setError("dispNone");
        setOpen(true);
    }

    const closeModal = () => {
        setError("dispNone");
        setInput(null);
        setOpen(false);
    };

    const getName = (e) => {
        setError("dispNone");
        setInput(e.target.value);
        console.log(e.target.value);
    };

    const updateName = () => {
        if (!input) {
            setError("dispBlock");
        } else {
            setFullName(input);
            closeModal();
        }
    };

    return (
        <Box width="50%" display="flex" flexDirection="row" alignItems="center" justifyContent="space-evenly" className={classes.profileDetails + " " + props.className}>

            <AcctIcon />

            <Box width="50%" display="flex" flexDirection="column" alignContent="space-around" >

                <Typography variant="h4">{props.userName}</Typography>

                <Box display="flex" flexDirection="row" justifyContent="space-between">
                    <Typography variant="h6">Posts: {props.numPosts}</Typography>
                    <Typography gutterBottom variant="h6">Follows: {props.follows}</Typography>
                    <Typography variant="h6">Followed By: {props.followers}</Typography>
                </Box>

                <Typography variant="h4">
                    {fullName}
                    <Button className={classes.btnEdit} variant="contained" color="secondary" onClick={openModal}>
                        <EditIcon fontSize="inherit" />
                    </Button>
                </Typography>

            </Box>

            <Modal className={classes.modal} open={open} onClose={closeModal} closeAfterTransition BackdropComponent={Backdrop}>

                <Fade in={open}>

                    <div className={classes.modalContent}>

                        <FormControl variant="standard">
                            <Typography variant="h5" component="h5" color="textPrimary">
                                EDIT
                            </Typography>
                        </FormControl>

                        <FormControl required variant="standard">
                            <InputLabel htmlFor="field-fullname">Fullname</InputLabel>
                            <Input type="text" onChange={getName} />
                            <FormHelperText error className={error}>required</FormHelperText>
                        </FormControl>

                        <FormControl variant="standard">
                            <Button className={classes.btnUpdate} variant="contained" color="primary" onClick={updateName}>
                                UPDATE
                            </Button>
                        </FormControl>

                    </div>

                </Fade>

            </Modal>
        </Box>
    );
}