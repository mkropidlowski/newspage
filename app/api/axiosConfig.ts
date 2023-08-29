import axios from "axios";
import { publicEnvs } from "../config/envs";

const instance = axios.create();

instance.defaults.baseURL = publicEnvs.BASE_API_URL;

export default instance;
