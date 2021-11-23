import bg from "./background.svg"
const styles = {
    root: {
      //background image url provided by svgbackgrounds.com//
      backgroundImage: `url(${bg})`,
      height: "100vh",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      //viewheight not working properly when additional content added, the below 2 css styles fixed it//
      backgroundRepeat: "repeat",
      overflowY: 'scroll',
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
      color:"white",
      alignItems: "center",
      "& a": {
        textDecoration: "none",
        color: "white"
      }
    },
    navButtons:{
      display: "flex",
    },
    palettes: {
      boxSize: "border-box",
      width: "100%",
      display: "grid",
      gridTemplateColumns: "repeat(3, 30%)",
      gridGap: "5%"
    },
  };
  export default styles