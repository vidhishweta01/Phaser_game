import { postScore, getScore } from './api';

describe('function to get saved scores to api', () => {
    test('getScore  fetch scores from api', () => {
        const scores = getScore();
        expect(scores).not.toBeFalsy();
    });
});