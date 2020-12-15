var Config = {
    "login": {
        "username": "sujith",
        "password": "sujith"
    },
    "auth": {

        "access-token": "IGQVJYQUpSUW1XWkhmTXlwT29iOUdvbkozWUtULVVzVVNNNzBSQmdLNUdLbG5qSC1sVG5Ed2FhRU56ZA2gtZATNGY1JIYkhBTWUxZAXA2WVgxMEtwSC1LbGxqSWg2ZAWNIUkJrYlVJTmlkdnhVeHpESzJtZAWd6djhRRGJCM3Rz"
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

