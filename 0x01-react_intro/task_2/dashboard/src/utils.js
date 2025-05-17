export const getFullYear = () => new Date().getFullYear();

export const getFooterCopy = (isIndex) => (isIndex ? "ALX School" : "ALX main dashboard");

export const getLatestNotification = () => {
  return "<strong>Urgent requirement</strong> - complete by EOD";
};
