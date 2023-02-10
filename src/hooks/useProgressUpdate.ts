import {
  awardedHonorPerKata,
  awardedHonorPerRankingUp,
  awardedScorePerKata,
  scoreNeededForRankingUp,
} from '../utils';
import useActions from './useActions';
import useTypedSelector from './useTypedSelector';

export function useProgressUpdate(): [(kataRank: string) => void] {
  const { rank, honor, score } = useTypedSelector((state) => state.account);
  const { addNotification, updateUserProgress } = useActions();

  function update(kataRank: string) {
    if (!rank || score === null || honor === null) return;
    const numberRank = parseInt(rank);

    const scoreForNextRank = scoreNeededForRankingUp[numberRank - 1];
    const newScore = score + awardedScorePerKata[kataRank];
    let newHonor = honor + awardedHonorPerKata[kataRank];
    let newRank = numberRank;

    if (newScore >= scoreForNextRank) {
      newRank = numberRank - 1;
      newHonor += awardedHonorPerRankingUp[newRank];

      addNotification(`Well done! You have ranked up to ${newRank} kyu in Javascript`);
    }
    updateUserProgress(newScore, newHonor, `${newRank} kyu`);
  }

  return [update];
}
