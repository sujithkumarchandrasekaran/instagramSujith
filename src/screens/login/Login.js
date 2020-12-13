import React, { Component } from "react";
import { Card,  CardContent, Typography,  FormControl,  Input, InputLabel } from '@material-ui/core';
import './Login.css';

export default class Login extends Component{
    render() {
        return (
            <div>
                <Card className="login-card" >
                    <CardContent>
                        <FormControl margin="normal" size="medium" variant="standard">
                            <Typography variant="h5" component="h5" color="textPrimary"
                            >LOGIN</Typography>
                        </FormControl>
                        <FormControl fullWidth required margin="normal" size="medium" variant="standard">
                            <InputLabel htmlFor="ip-uname">Username</InputLabel>
                            <Input id="ip-uname" type="text" />
                        </FormControl>
                        <FormControl fullWidth required margin="normal" size="medium" variant="standard">
                            <InputLabel htmlFor="ip-passwd">Password</InputLabel>
                            <Input id="ip-passwd" type="password"/>

                        </FormControl>
                        
                    </CardContent>

                </Card>
            </div>
        )
    }
}
