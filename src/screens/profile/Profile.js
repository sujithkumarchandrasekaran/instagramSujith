import React, { Component } from 'react';
import { GridList, GridListTile, Box, Modal, Backdrop, Fade, Typography } from '@material-ui/core';
import PostContent from '../../common/post/PostContent';
import PostCaption from '../../common/post/PostCaption';
import DynamicHeader from '../../common/header/DynamicHeader';
import AcctDetails from '../../common/profile/AcctDetails';
import ProfileIcon from '../../common/profile/ProfileIcon';
import PostHeader from '../../common/post/PostHeader';
import Config from '../../common/config';
import './Profile.css';

export default class Profile extends Component {
    constructor() {
        super();
        this.state = {
            userPosts: [],
            open: false,
            userPost: {}
        }
        this.logoutUser = this.logoutUser.bind(this);
        this.gotoHome = this.gotoHome.bind(this);
    }
    logoutUser = () => {
        sessionStorage.clear();
        this.props.history.replace('/');
    }


    gotoHome = () => this.props.history.push('/home');


    getProfileAvatar = () => {
        return (
            <Box ml="auto" display="flex" flexDirection="row" alignItems="center">
                <ProfileIcon type="avatarWithMenu" menuOptions={['Logout']} handlers={[this.logoutUser]} />
            </Box>);
    };

    // Fetch user's posts by making a API call
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
                // posts[i].comments = [];
                // posts[i].isLiked = false;
                // posts[i].numLikes = ;
            }
            this.setState({ userPosts: posts });
        }
    }

    // Handler to open post modal
    openPostDetails = (e) => {
        this.setState({ open: true, userPost: this.state.userPosts.find((post) => post.id === e.target.id) });
    }

    // Handler to close post modal
    closePostDetails = (e) => {
        this.setState({ open: false, userPost: {} });
    }

    render() {
        return (
            <DynamicHeader title="Image Viewer" positionLeft={this.getProfileAvatar}>
                {
                    (this.state.userPosts.length > 0) ?
                        (<Box>
                            <AcctDetails className="profileDetail" userName={this.state.userPosts[0].username} numPosts={this.state.userPosts.length}
                            fullName="Sujith" follows={5}
                            followers={50} />
                            
                            < Box className="imageGrid">

                                <GridList cellHeight={300} cols={3}>
                                    {this.state.userPosts.map((userPost) => (
                                        <GridListTile key={userPost.id} >
                                            <img id={userPost.id} src={userPost.media_url} alt={userPost.id} onClick={this.openPostDetails} />
                                        </GridListTile>
                                    ))}
                                </GridList>

                            </Box>

                            <Modal className="modal" open={this.state.open}
                                
                                onClose={this.closePostDetails} closeAfterTransition BackdropComponent={Backdrop}>
                                
                                <Fade in={this.state.open}>
                                    <Box width="60%" display="flex" flexDirection="row" justifyContent="space-evenly" className="modalContent">
                                        
                                        <Box m="1%" width="50%" className="image-container" >
                                        
                                            {(this.state.userPost.media_url) ? <PostContent media={this.state.userPost.media_url} mediaId={this.state.userPost.id} minWidth="350px" minHeight="350px" /> : ""}
                                        
                                        </Box>
                                        
                                        <Box m="2%" width="50%" display="flex" flexDirection="column" justifyContent="left" alignItems="center" >
                                        
                                            <PostHeader postUser={this.state.userPost.username} postedTime={this.state.userPost.timestamp} />

                                            <PostCaption mb="auto" text={this.state.userPost.caption} />

                                        </Box>
                                    </Box>
                                </Fade>

                            </Modal>
                        
                        </Box>) : ""}
            </DynamicHeader>
        );
    }
}