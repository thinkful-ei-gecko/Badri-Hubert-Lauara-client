const config = {
  API_ENDPOINT: 'http://localhost:8000/api',
  REACT_APP_API_BASE:
    process.env.NODE_ENV === 'production'
      ? 'https://learn-spanish-med-terms-api.herokuapp.com'
      : 'http://localhost:8000/api'
}

export default config;

/*export default {
  TOKEN_KEY: 'blogful-client-auth-token',
}*/