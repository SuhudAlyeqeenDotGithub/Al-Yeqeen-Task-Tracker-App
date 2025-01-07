const disableScroll = () => {
  document.body.style.overflow = "hidden";
};

const enableScroll = () => {
  document.body.style.overflow = "auto";
};

const formatDate = (date) => {
  const formattedDate = new Date(date).toLocaleDateString(navigator.language);
  return formattedDate;
};

const formatDateToDefault = (date) => {
  const dateObj = new Date(date);
  const dateDay = dateObj.getDate()
  const dateMonth = dateObj.getMonth()
  const dateYear = dateObj.getFullYear()

  const formattedDate = `${dateYear}-${dateMonth}-${dateDay}`

  return formattedDate;
};

export { disableScroll, enableScroll, formatDate, formatDateToDefault };
