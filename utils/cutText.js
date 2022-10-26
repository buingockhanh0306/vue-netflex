const getWidthOfText = (txt, fontname, fontsize) => {
  if (getWidthOfText.c === undefined) {
    getWidthOfText.c = document.createElement("canvas");
    getWidthOfText.ctx = getWidthOfText.c.getContext("2d");
  }
  var fontspec = fontsize + " " + fontname;
  if (getWidthOfText.ctx.font !== fontspec) getWidthOfText.ctx.font = fontspec;
  return getWidthOfText.ctx.measureText(txt).width;
};

const cutText = (txt, widthParent, font = "Roboto", fontsize = 14) => {
  if (getWidthOfText(txt, font, `${fontsize}px`) < widthParent) {
    return txt;
  }
  const arrWords = txt.split(" ");
  const words = [];

  let count = 0;

  while (
    getWidthOfText(
      `${words.join(" ")} ${arrWords[count]}...`,
      font,
      `${fontsize}px`
    ) <= widthParent
  ) {
    words.push(arrWords[count]);
    count++;
  }
  return words.join(" ") + "...";
};

export default cutText;
