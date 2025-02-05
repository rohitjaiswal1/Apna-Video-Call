let IS_PROD = false;
const server = IS_PROD
  ? "https://apnavideobackend-rnu3.onrender.com"
  : "http://localhost:8000";

export default server;
