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
  const dateDay = String(dateObj.getDate()).padStart(2, "0");
  const dateMonth = String(dateObj.getMonth() + 1).padStart(2, "0");
  const dateYear = dateObj.getFullYear()

  const formattedDate = `${dateYear}-${dateMonth}-${dateDay}`

  return formattedDate;
};

export { disableScroll, enableScroll, formatDate, formatDateToDefault };
