const GITHUB_OAUTH_URL = "https://github.com/login/oauth/authorize";
const SCOPE = "user";
const client_id = "Iv1.71523ce61764faf7";
module.exports = {
  github: {
    client_id,
    client_secret: "54a7d4a66618dad71de207bbf3e000fbc4ee93ca",
    github_base_url: "https://api.github.com",
    request_token_url: "https://github.com/login/oauth/access_token",
  },
  redis: {
    host: '127.0.0.1',
    port: 6379,
    password: "root@redis",
    family: 4
  },
  GITHUB_OAUTH_URL,
  OAUTH_URL: `${GITHUB_OAUTH_URL}?client_id=${client_id}&scope=${SCOPE}`,
};
