import axios from "axios";

const URL = axios.create({
  baseURL: "https://api.github.com/",
  auth: "Bearer " + "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",
});

export default URL;
