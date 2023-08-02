const getDateTextHelper = (date, language) => {
  const optionsDate = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dateFormated = new Date(date).toLocaleDateString(language, optionsDate);
  return dateFormated;
};

export default getDateTextHelper;
