import React, { Component } from 'react';
import { Box, Card, CardContent, CardActions, CardHeader, Typography } from '@material-ui/core';
import PostContent from '../../common/post/PostContent';
import PostCaption from '../../common/post/PostCaption';
import DynamicHeader from '../../common/header/DynamicHeader';
import ProfileIcon from '../../common/profile/ProfileIcon';
import Config from '../../common/config';
import './Home.css';


export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            userPosts: []
        }
        this.logoutUser = this.logoutUser.bind(this);
        this.gotoProfile = this.gotoProfile.bind(this);
    }

    // to log out of the application
    logoutUser = () => {
        sessionStorage.clear();
        this.props.history.replace('/');
    }

    // to go to the profile page
    gotoProfile = () => this.props.history.push('/profile');


    // to convert the date into DD/MM/YYYY HH:MM:SS

    covertDate = (x) => {
        let date = new Date(x);
        let dd = date.getDate();
        let mm = date.getMonth() + 1;
        dd = (dd < 10) ? ("0" + dd) : dd;
        mm = (mm < 10) ? ("0" + mm) : mm;
        return dd + '/' + mm + '/' + date.getFullYear() +
            ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
    };


    // to get the profile ICON using Avatar Material UI from ProfileIcon
    getProfileAvatar = () => {
        return (
            <Box ml="auto" display="flex" flexDirection="row" alignItems="center">
                <ProfileIcon type="avatarWithMenu" menuOptions={['My Account', 'Logout']}
                    handlers={[this.gotoProfile, this.logoutUser]} />
            </Box>);
    };


    // API call for Instagram

    async componentDidMount() {
        if (!Config.api.mock) {
            let accessToken = window.sessionStorage.getItem("access-token");
            let getPostsURI = Config.api.endpoints.find((endpoint) => endpoint.name === "Get post URI").uri.replace('$accessToken', accessToken);
            let getPostDetailsURI = Config.api.endpoints.find((endpoint) => endpoint.name === "Get Post Details URI").uri.replace('$accessToken', accessToken);

            let response = await fetch(getPostsURI);
            let posts = await response.json();
            posts = posts.data;

            for (let i = 0; i < posts.length; i++) {
                response = await fetch(getPostDetailsURI.replace('$postId', posts[i].id));
                let details = await response.json();
                posts[i].media_type = details.media_type;
                posts[i].media_url = details.media_url;
                posts[i].username = details.username;
                posts[i].timestamp = details.timestamp;
            }
            this.setState({ userPosts: posts });
            this.setState({ posts: posts.filter(x => true) });
        }
    }

    render() {
        return (
            <DynamicHeader title="Image Viewer" positionLeft={this.getProfileAvatar}>
                {
                    (this.state.userPosts.length > 0) ?
                        (
                            <Box display="flex" width="90%" m="auto" flexDirection="row" flexWrap="wrap" alignItems="space-around" justifyContent="space-between">
                                {
                                    this.state.userPosts.map(userPost => (
                                        <Card key={userPost.id + "post"} raised className="post">
                                            <CardHeader className="postheader" disableTypography
                                                avatar={<ProfileIcon type="avatarOnly" />}
                                                title={<Typography className="textbold" variant="body1">{userPost.username}</Typography>}
                                                subheader={<Typography className="textlite" variant="subtitle2">{this.covertDate(userPost.timestamp)}</Typography>}>
                                            </CardHeader>

                                            <CardContent className="postcontent">
                                                <PostContent media={userPost.media_url} mediaId={userPost.id} />
                                                <PostCaption text={userPost.caption} />
                                            </CardContent>


                                        </Card>
                                    ))
                                }
                            </Box>) : ""}
            </DynamicHeader>
        );
    }
}