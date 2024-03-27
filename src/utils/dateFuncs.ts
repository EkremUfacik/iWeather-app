export const formatDate = (date: string) => {
  const d = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return d.toLocaleDateString("en-US", options);
};

export const getDay = (date: string) => {
  const d = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
  };
  return d.toLocaleDateString("en-US", options);
};

export const isDayTime = () => {
  const hours = new Date().getHours();
  return hours > 7 && hours < 19;
};
