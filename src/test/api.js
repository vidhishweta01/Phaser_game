const fetch = require('node-fetch');

const postScore = async (score) => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/wFMA4yliEBsVkDHCw7Xx/scores';
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: 'Demo',
      score,
    }),
  })
    .then((response) => response.json())
    .catch((error) => {
      throw new Error('Error:', error);
    });
  return res;
};

const getScore = () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/wFMA4yliEBsVkDHCw7Xx/scores';
  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
    .then((data) => data.result)
    .catch((error) => {
      throw new Error('Error:', error);
    });
};

export { postScore, getScore };