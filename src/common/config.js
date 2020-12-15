var Config = {
    "login": {
        "username": "sujith",
        "password": "sujith"
    },
    "auth": {

        "access-token": "IGQVJWYVY1LVF2Y1BsT0thTEg1X2RINUlKbFU1T1ZAUYkQzaVozTDE4Y2EwcXpfRDNub0thS2VYenlOaEQ3N05WM1ZA5ZAzhIWkc2UkxldXNMdTlxZADFjc29ZAY3lkOVBzWEpRTXR3OGFnbl9CcmVTSUZA5eTJmZAXFISjRiaG9r"
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

