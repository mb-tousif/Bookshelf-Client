import { RootState } from "../Redux/store";

const getAccessToken = (state: RootState) => {
    return state.auth.accessToken;
  };
  
  export default getAccessToken;