import LocalStorage from "./LocalStorage";
import Requests from "./Requests";

class Auth {
  constructor() {
    
    this.authenticated = this.isAuthenticated();
    this.tokenStarageName= "spotifyAuthToken";
    this.redirect_url="http://localhost:3000/";
    this.spotify_accounts="https://accounts.spotify.com";
    this.client_id="3b35acf6d48245cd81a9e73675c2eed3";
  }
  getHashParams() {
    const hashParams = {};
    const r = /([^&;=]+)=?([^&;]*)/g;
    const q = window.location.hash.substring(1);
    let e = r.exec(q);
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    return hashParams;
  }

  login(event) {
    //event.preventDefault();
    let url =
      `${this.spotify_accounts}/authorize` +
      '?response_type=token' +
      `&client_id=${this.client_id}`+
      '&scope=' +
      encodeURIComponent('user-read-private%20user-read-email') +
      '&redirect_uri=' +
      encodeURIComponent(this.redirect_url);
    window.location = url;
  }
  
  getAuthTokenFromUrl=()=>{
    const params = this.getHashParams();
    const access_token = params.access_token;
    LocalStorage.setStorage('spotifyAuthToken', access_token,()=>{});
    return access_token;
  }
  isAuthenticated() {
    console.log("check storage",LocalStorage.checkStorage(this.tokenStarageName))
    return LocalStorage.checkStorage(this.tokenStarageName);
  }
}
export default new Auth();

