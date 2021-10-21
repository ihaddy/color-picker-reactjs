// {
//     paletteName: "Flat UI Colors Spanish",
//     id: "flat-ui-colors-spanish",
//     emoji: "🇪🇸",
//     colors: [
//       { name: "JacksonsPurple", color: "#40407a" },
//       { name: "C64Purple", color: "#706fd3" },
//       { name: "SwanWhite", color: "#f7f1e3" },
//       { name: "SummerSky", color: "#34ace0" },
//       { name: "CelestialGreen", color: "#33d9b2" },
//       { name: "LuckyPoint", color: "#2c2c54" },
//       { name: "Liberty", color: "#474787" },
//       { name: "HotStone", color: "#aaa69d" },
//       { name: "DevilBlue", color: "#227093" },
//       { name: "PalmSpringsSplash", color: "#218c74" },
//       { name: "FlourescentRed", color: "#ff5252" },
//       { name: "SyntheticPumpkin", color: "#ff793f" },
//       { name: "CrocodileTooth", color: "#d1ccc0" },
//       { name: "MandarinSorbet", color: "#ffb142" },
//       { name: "SpicedButterNut", color: "#ffda79" },
//       { name: "EyeOfNewt", color: "#b33939" },
//       { name: "ChileanFire", color: "#cd6133" },
//       { name: "GreyPorcelain", color: "#84817a" },
//       { name: "AlamedaOchre", color: "#cc8e35" },
//       { name: "Desert", color: "#ccae62" }
//     ]
//   },

import chroma from "chroma-js";

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function generatePalette(starterPalette) {
  let newPalette = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    colors: {},
  };
  for (let level of levels) {
    newPalette.colors[level] = [];
  }

  for (let color of starterPalette.colors) {
    let scale = generateScale(color.color, 10).reverse();
    for (let i in scale) {
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, "-"),
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i])
          .css()
          .replace("rgba", "rgba")
          .replace(")", ",1.0)"),
      });
    }
  }
  return newPalette;
}
function getRange(hexColor) {
  const end = "#fff";
  return [chroma(hexColor).darken(1.4).hex(), hexColor, end];
}
function generateScale(hexColor, numberOfColors) {
  return chroma.scale(getRange(hexColor)).mode("lab").colors(numberOfColors);
}

export default generatePalette;
