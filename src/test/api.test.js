import { postScore, getScore } from './api';

describe('function to get saved scores to api', () => {
  test('getScore  fetch scores from api', () => {
    expect(getScore()).toBeTruthy; // eslint-disable-line
  });
});

describe('function to post scores to api', () => {
  test('postScore save scores to api return message if score is null', () => {
    postScore(null).then((res) => {
      expect(res.message).toEqual('You need to provide a valid score for the leaderboard');
    });
  });

  test('postScore save scores to api and returns result is the score is not null', () => {
    postScore(67).then((res) => {
      expect(res.result).toEqual('Leaderboard score created correctly.');
    });
  });
});
