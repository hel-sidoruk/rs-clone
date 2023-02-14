export const getDateString = (date: string): string => {
  const dateObj = new Date(date);
  const delta = Date.now() - Date.parse(dateObj.toString());
  const days = Math.round(delta / 86400000);
  if (days < 1) return 'Today';
  if (days === 1) return 'Yesterday';
  if (days <= 30) return `${days} days ago`;
  if (days <= 365) return `${Math.round(days / 30)} months ago`;
  return `${Math.round(days / 365)} years ago`;
};
