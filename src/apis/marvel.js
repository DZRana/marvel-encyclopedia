import axios from "axios";
import md5 from "md5";

const limit = 100;
const ts = 1;
const privateKey = process.env.REACT_APP_PRIVATE_KEY;
const publicKey = process.env.REACT_APP_PUBLIC_KEY;
const hash = md5(ts + privateKey + publicKey);
//const request = `https://gateway.marvel.com:443/v1/public/characters?limit=${limit}&ts=${ts}&apikey=${publicKey}&hash=${hash}`;

export default axios.create({
  baseURL: "https://gateway.marvel.com:443/v1/public",
  params: {
    limit,
    ts,
    apikey: publicKey,
    hash,
  },
});
