export function getNextRank(rank: string): number {
  return +rank.split(' ').map((item) => (isNaN(+item) ? item : +item - 1))[0];
}
