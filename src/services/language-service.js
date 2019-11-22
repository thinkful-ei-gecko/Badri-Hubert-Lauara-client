import config from '../config';
import TokenService from './token-service';

const LanguageService = {
  getLanguage: async () => {
    let data;
    try {
      let res = await fetch(`${config.REACT_APP_API_BASE}/language`, {
        headers: {
          'authorization': `Bearer ${TokenService.getAuthToken()}`
        }
      })
      data = await res.json()
    } catch (e) {
      throw new Error(e)
    }
    return data;
  },
  getLanguageHead: async () => {
    let data;
    try {
      let res = await fetch(`${config.REACT_APP_API_BASE}/language/head`, {
        headers: {
          'authorization': `Bearer ${TokenService.getAuthToken()}`
        }
      })
      data = await res.json()
    } catch (e) {
      throw new Error(e)
    }
    return data;
  },

  postGuessWord: async (learnerGuess) => {
    let data;
    let guess = { guess : learnerGuess };
    let options = {
      method: 'POST',
      body: JSON.stringify(guess),
      headers: {
        'content-type' : 'application/json',
        'authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    }
    try {
      let res = await fetch(`${config.REACT_APP_API_BASE}/language/guess`, options)
      data = await res.json()
    } catch (e) {
      throw new Error(e)
    }
    console.log(data);
    return data;
  }
}

export default LanguageService;