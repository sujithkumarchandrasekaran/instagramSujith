import React, { Component } from "react";
import { Card, CardContent, Typography, FormControl, Input, InputLabel, Button, FormHelperText, CardActions } from '@material-ui/core';
import './Login.css';
import Config from '../../common/config';
import DynamicHeader from '../../common/header/DynamicHeader';

export default class Login extends Component {


    constructor() {
        super();
        this.state = {
            usernameVal: "",
            passwordVal: "",
            usernameReq: "dispNone",
            passwordReq: "dispNone",
            incorrectVal: "dispNone"
        }
    }

    getUsername = (e) => this.setState({ usernameVal: e.target.value, usernameReq: "dispNone" });
    getPassword = (e) => this.setState({ passwordVal: e.target.value, passwordReq: "dispNone" });

    //Verify Credentials
    loginHandler = (e) => {
        (!this.state.usernameVal) ? this.setState({ usernameReq: "dispBlock" }) : this.setState({ usernameReq: "dispNone" });
        (!this.state.passwordVal) ? this.setState({ passwordReq: "dispBlock" }) : this.setState({ passwordReq: "dispNone" });
        (this.state.usernameVal === Config.login.username &&
            this.state.passwordVal === Config.login.password) ?
            this.gotoHome() : this.setState({ incorrectVal: "dispBlock" });
    }

    // Redirect to Home Page
    gotoHome = () => {

        this.setState({ incorrectVal: "dispNone" });
        alert("Home page to come");
        window.sessionStorage.setItem('access-token', Config.auth["access-token"]);
        this.props.history.push('/home/');
    }

    render() {
        return (
            <div>
                <DynamicHeader title="Image Viewer">

                    <Card className="loginCard" >

                        <CardContent>

                            <FormControl margin="normal" size="medium" variant="standard">
                                <Typography variant="h5" component="h5" color="textPrimary">
                                LOGIN
                                </Typography>
                            </FormControl>

                            <FormControl fullWidth required margin="normal" size="medium" variant="standard">
                                <InputLabel htmlFor="username">Username</InputLabel>
                                <Input type="text" onChange={this.getUsername} />
                                <FormHelperText error className={this.state.usernameReq}>Enter the User Name</FormHelperText>
                            </FormControl>

                            <FormControl fullWidth required margin="normal" size="medium" variant="standard">
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input type="password" onChange={this.getPassword} />
                                <FormHelperText error className={this.state.passwordReq}>Valid password is required</FormHelperText>
                            </FormControl>

                            <FormHelperText error className={this.state.incorrectVal}>Incorrect username and/or password</FormHelperText>

                            <CardActions>
                                <FormControl margin="normal" size="medium" variant="standard">
                                    <Button variant="contained" color="primary" onClick={this.loginHandler}>LOGIN</Button>
                                </FormControl>
                            </CardActions>


                        </CardContent>

                    </Card>

                </DynamicHeader>
            </div>
        )
    }
}
