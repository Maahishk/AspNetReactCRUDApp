const API_BASE_URL = "https://localhost:7048";
const API_BASE_URL_PRODUCTION = "";

const ENDPOINT_URL = {
  GET_ALL_POST: "get-all-posts",
  GET_POSTS_BY_ID: "get-post-by-id",
  CREATE_POST: "create-post",
  UPDATE_POST: "update-post",
  DELETE_POST_BY_ID: "delete-post-by-id",
};

const development = {
  API_URL_GET_ALL_POST: `${API_BASE_URL}/${ENDPOINT_URL.GET_ALL_POST}`,
  API_URL_GET_POSTS_BY_ID: `${API_BASE_URL}/${ENDPOINT_URL.GET_POSTS_BY_ID}`,
  API_URL_CREATE_POST: `${API_BASE_URL}/${ENDPOINT_URL.CREATE_POST}`,
  API_URL_UPDATE_POST: `${API_BASE_URL}/${ENDPOINT_URL.UPDATE_POST}`,
  API_URL_DELETE_POST_BY_ID: `${API_BASE_URL}/${ENDPOINT_URL.DELETE_POST_BY_ID}`,
};
const production = {
  API_URL_GET_ALL_POST: `${API_BASE_URL_PRODUCTION}/${ENDPOINT_URL.GET_ALL_POST}`,
  API_URL_GET_POSTS_BY_ID: `${API_BASE_URL_PRODUCTION}/${ENDPOINT_URL.GET_POSTS_BY_ID}`,
  API_URL_CREATE_POST: `${API_BASE_URL_PRODUCTION}/${ENDPOINT_URL.CREATE_POST}`,
  API_URL_UPDATE_POST: `${API_BASE_URL_PRODUCTION}/${ENDPOINT_URL.UPDATE_POST}`,
  API_URL_DELETE_POST_BY_ID: `${API_BASE_URL_PRODUCTION}/${ENDPOINT_URL.DELETE_POST_BY_ID}`,
};
const Constant =
  process.env.NODE_ENV === "development" ? development : production;
export default Constant;