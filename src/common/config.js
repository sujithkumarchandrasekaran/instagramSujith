var Config = {
    "login": {
        "username": "sujith",
        "password": "sujith"
    },
    "auth": {

        "access-token": "IGQVJWeEJ3SVZAHZAWU4T2NwdmYybElLUWVhTlM1LTM0TkVkdDRxTDJ3V2FxTkpJVXpmcXMwTVZAtR2c2NkVOUjV5b1pQcFNiWEJXMTdBMUR5VEI4QXJqU0VtamhSTjFaOEpMbl9TS2tfRHBfRG9UTEdmblE0LUVHLVNpN3NR"
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

