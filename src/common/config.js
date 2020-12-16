var Config = {
    "login": {
        "username": "sujith",
        "password": "sujith"
    },
    "auth": {

        "access-token": "IGQVJYbHRhMUxTSDlxNHBfaExaT1ViZAzhIbUJUR1M3VVlVM053VDhmTERGcFFIbjFaNTVVbU5WeE5GVTVQemlzekRaLVVPVkNHYVlFTXRuOG0yUFV2QkV2aURLd2NVdnBYTDd2U2Vta01BSHFCekZAhcjFNLWoyVzBpWTlz"
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

