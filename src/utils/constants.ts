export const GITHUB_AUTH_URL = 'https://github.com/login/oauth/authorize';
export const CLIENT_ID_LOGIN = 'b67da247620e2e266ba4';
export const CLIENT_ID_REGISTRATION = 'ff8172a4250438893a45';
export const WS_URL = 'ws://localhost:9000';
export const SUITE_START = '--suite-start--';
export const SUITE_END = '--suite-end--';
export const DEFAULT_AVATAR = 'https://avatars.githubusercontent.com/u/6301773?s=100';

type StringKeys = { [key: string]: number };
type NumberKeys = { [key: number]: number };
export const scoreNeededForRankingUp: NumberKeys = {
  7: 20,
  6: 76,
  5: 229,
  4: 643,
  3: 1768,
  2: 4829,
  1: 13147,
};
export const awardedScorePerKata: StringKeys = {
  '8 kyu': 2,
  '7 kyu': 3,
  '6 kyu': 8,
  '5 kyu': 21,
  '4 kyu': 55,
  '3 kyu': 149,
  '2 kyu': 404,
  '1 kyu': 1097,
};
export const awardedHonorPerKata: StringKeys = {
  '8 kyu': 2,
  '7 kyu': 2,
  '6 kyu': 8,
  '5 kyu': 8,
  '4 kyu': 32,
  '3 kyu': 32,
  '2 kyu': 128,
  '1 kyu': 128,
};
export const awardedHonorPerRankingUp: NumberKeys = {
  7: 20,
  6: 30,
  5: 45,
  4: 70,
  3: 100,
  2: 150,
  1: 225,
};
