function getMinMax(str) {
  const arrFromStr = str.split(" ").map((element) => Number(element));
  const onlyNumbers = arrFromStr.filter((element) => !isNaN(element));

  return {
    min: Math.min(...onlyNumbers),
    max: Math.max(...onlyNumbers),
  };
}
