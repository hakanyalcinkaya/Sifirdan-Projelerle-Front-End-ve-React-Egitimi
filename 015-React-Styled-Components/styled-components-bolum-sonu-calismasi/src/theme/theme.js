const green = "#2ecc71";
const blue = "#3498db";
const yellow = "#f1c40f";
const red = "#e74c3c";
const darkBlue = "#34495e";
const midnightBlue = "#2c3e50";
const lightWhite = "#ecf0f1";
const silver = "#bdc3c7";

const boxSize = "900px";

const bgColor = lightWhite;
const textColor = midnightBlue;
const bodyColor = "white";
const linkColor = blue;
const linkColorHover = darkBlue;

const lightTheme = {
  colors: {
    bgColor,
    textColor,
    bodyColor,
    linkColor,
    linkColorHover,
    blue,
    darkBlue,
    silver,
    red,
    yellow,
    green
  },
  sizes: {
    boxSize
  }
};

const darkTheme = JSON.parse(JSON.stringify(lightTheme));
darkTheme.colors.bodyColor = midnightBlue;
darkTheme.colors.bgColor = darkBlue;
darkTheme.colors.textColor = lightWhite;

export { lightTheme, darkTheme };
