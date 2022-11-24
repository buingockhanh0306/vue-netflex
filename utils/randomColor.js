const randomColor = () => {
  const colorList = [
    "#000",
    "#fcba03",
    "#03bafc",
    "#03fcc2",
    "#fc037b",
    "#fc5e03",
  ];
  const min = 0;
  const max = colorList.length - 1;
  const randNumber = Math.floor(Math.random() * (max - min) + min);
  return colorList[randNumber];
};

export default randomColor;
