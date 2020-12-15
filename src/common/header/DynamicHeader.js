import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { StylesProvider } from '@material-ui/styles';
import './DynamicHeader.css';
import { Link } from 'react-router-dom';

export default class PageWithHeader extends Component {

    render() {
        return (
            <div className="headerMain">
            <StylesProvider injectFirst>
              <AppBar className="headerPage">
                <Toolbar >
                  <Typography className="textTitle" variant="h6" noWrap><Link className="logoname" to='/home' >{this.props.title}</Link></Typography>
                  <Box ml="auto" display="flex" flexDirection="row" alignItems="center" >
                      {this.props.positionLeft}
                  </Box>
                </Toolbar>
              </AppBar>
              <div className="headerBody">
                  {this.props.children}
              </div>
            </StylesProvider>
          </div>
        );
    }
}