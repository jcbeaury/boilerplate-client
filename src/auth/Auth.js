import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: process.env.REACT_APP_AUTH0_DOMAIN,
    clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
    redirectUri: window.location.origin + '/authenticate',
    audience: process.env.REACT_APP_AUTH0_SERVER,
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }

  handleAuthentication(history) {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult, history);
      } else if (err) {
        history.push('/');
      }
    });
  }

  setSession(authResult, history) {
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    history.push('/');
  }

  logout(history) {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    history.push('/');
  }

  isAuthenticated() {
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
}
