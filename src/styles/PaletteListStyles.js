import bg from "./background.svg";
const styles = {
  "@global": {
    ".fade-exit": {
      opacity: 1,
    },
    ".fade-exit-active": {
      opacity: 0,
      transition: "opacity 0.4s ease-out",
    },
  },
  singleButton: {
    margin: "5px"
  },
  title: {
    color: "black",
    backgroundColor: "white",
    padding: 7,
    borderRadius: "7px",
    border: "solid 3px",
  },
  root: {
    //background image url provided by svgbackgrounds.com//
    backgroundImage: `url(${bg})`,
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    // viewheight not working properly when additional content added, the below 2 css styles fixed it//
    backgroundRepeat: "repeat",
    overflowY: "auto",
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "white",
    alignItems: "center",
    "& a": {
      textDecoration: "none",
      color: "white",
    },
  },
  navButtons: {
    display: "flex",
  },
  palettes: {
    boxSize: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%",
  },
};
export default styles;
