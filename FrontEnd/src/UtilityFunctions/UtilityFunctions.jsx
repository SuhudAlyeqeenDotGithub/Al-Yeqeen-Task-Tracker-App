const disableScroll = () => {
  document.body.style.overflow = "hidden";
};

const enableScroll = () => {
  document.body.style.overflow = "auto";
};

const formatDate = (date) => {
  const formattedDate = new Date(date).toLocaleDateString("en-GB");
  console.log("gb formattedDate", formattedDate);
  return formattedDate;
};

const formatDateToUsStandard = (date) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US");
  console.log("US formattedDate", formattedDate);
  return formattedDate;
};

export { disableScroll, enableScroll, formatDate, formatDateToUsStandard };
