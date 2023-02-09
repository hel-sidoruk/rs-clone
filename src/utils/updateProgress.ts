import {
  awardedHonorPerKata,
  awardedHonorPerRankingUp,
  awardedScorePerKata,
  scoreNeededForRankingUp,
} from './constants';

export function updateProgress(
  kataRank: string,
  honor: number,
  rank: number,
  score: number
): { newScore: number; newHonor: number; newRank?: string } {
  const scoreForNextRank = scoreNeededForRankingUp[rank - 1];
  const newScore = score + awardedScorePerKata[kataRank];
  let newHonor = honor + awardedHonorPerKata[kataRank];
  let newRank = rank;
  if (newScore >= scoreForNextRank) {
    newRank = rank - 1;
    newHonor += awardedHonorPerRankingUp[newRank];
    return { newScore, newHonor, newRank: `${newRank} kyu` };
  }
  return { newScore, newHonor };
}
