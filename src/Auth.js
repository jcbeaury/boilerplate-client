import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'hello-jcb.auth0.com',
    clientID: 'o7UMSRQ3BrqNpVsUGP55XfdqfoZ7D5ZB',
    redirectUri: window.location.origin + '/authenticate',
    audience: 'https://hello-jcb.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  constructor() {
    this.isAuthenticated = this.isAuthenticated()
  }

  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        // go to home page
      } else if (err) {
        // go to home page
        console.log(err);
      }
    });
  }

  setSession(authResult) {
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    // go to home page
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // go to home page
  }

  isAuthenticated() {
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
}
