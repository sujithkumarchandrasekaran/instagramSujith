import React, { Component } from "react";
import { Card, CardContent, Typography, FormControl, Input, InputLabel, Button } from '@material-ui/core';
import './Login.css';
import Config from '../../common/config';

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

        alert("home page");
    }

    render() {
        return (
            <div>
                <Card className="login-card" >
                    <CardContent>
                        <FormControl margin="normal" size="big" variant="standard">
                            <Typography variant="h5" component="h5" color="textPrimary"
                            >LOGIN</Typography>
                        </FormControl>
                        <FormControl fullWidth required margin="normal" size="medium" variant="standard">
                            <InputLabel htmlFor="username">Username</InputLabel>
                            <Input type="text" onChange={this.getUsername} />

                        </FormControl>
                        <FormControl fullWidth required margin="normal" size="medium" variant="standard">
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input type="password" onChange={this.getPassword} />

                        </FormControl>

                        <FormControl margin="normal" size="medium" variant="standard">
                            <Button variant="contained" color="primary" onClick={this.loginHandler}>LOGIN</Button>
                        </FormControl>

                    </CardContent>

                </Card>
            </div>
        )
    }
}
