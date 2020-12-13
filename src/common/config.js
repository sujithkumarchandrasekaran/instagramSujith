var Config = {
    "login": {
        "username": "sujith",
        "password": "sujith"
    },
    "auth": {

        "access-token": "IGQVJYTlpXdFlELVNQbHZANVDFTN0VDYVIxQnNmaGQ5Y0ZAkZAFlYaThhSEpEaDRKTHRXRkt5R2xWWXM2NHNMNDdhYXRnODZAON2RTVmFjbC12cEM5TUVMZAk1rQ0RVRzZAQeC1YWVF3aV9CbjJvY3RYYjg0V3ZAwVHhBRW8wWlFj"
	},
    "api":
    {
        "mock": false,
        "endpoints":
            [
                {
                    "name": "Get post URI",
                    "uri": "https://graph.instagram.com/me/media?fields=id,caption&access_token=$accessToken"
                },
                {
                    "name": "Get Post Details URI",
                    "uri": "https://graph.instagram.com/$postId?fields=id,media_type,media_url,username,timestamp&access_token=$accessToken"
                }
            ]
    }
};
export default Config;