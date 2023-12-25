function camelize(str) {
  const wordArray = str.split("-");
  const firstLetterUpperCase = wordArray.map((word, index) =>
    index === 0 ? word : word[0].toUpperCase() + word.slice(1)
  );
  const camelizedStr = firstLetterUpperCase.join("");

  return camelizedStr;
}
