const postScore = (score) => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/wFMA4yliEBsVkDHCw7Xx/scores';
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: gameConfig.user,
      score,
    }),
  }).then((response) => response.json())
    .catch((error) => {
      throw new Error('Error:', error);
    });
};

const getScore = () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/wFMA4yliEBsVkDHCw7Xx/scores';
  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
    .then((data) => {
      return data.result;
    })
    .catch((error) => {
      throw new Error('Error:', error);
    });
};

export { postScore, getScore };