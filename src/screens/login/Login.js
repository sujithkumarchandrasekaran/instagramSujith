import React, { Component } from "react";
import { Card,  CardContent, Typography,  FormControl,  Input, InputLabel, Button } from '@material-ui/core';
import './Login.css';

export default class Login extends Component{


    loginhandler () {
        alert ("login button");
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
                            <Input type="text" />
                        </FormControl>
                        <FormControl fullWidth required margin="normal" size="medium" variant="standard">
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input type="password"/>

                        </FormControl>

                        <FormControl margin="normal" size="medium" variant="standard">
                            <Button variant="contained" color="primary" onClick={this.loginhandler}>LOGIN</Button>
                        </FormControl>
                        
                    </CardContent>

                </Card>
            </div>
        )
    }
}
