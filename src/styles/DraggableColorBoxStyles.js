import chroma from "chroma-js";
const styles = {
  root: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-4px",
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    left: "0px",
    bottom: "0px",
    padding: "10px",
    color: (props) =>
      chroma(props.color).luminance() <= 0.075 ? "white" : "black",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
    display: "flex",
    justifyContent: "space-between",
  },
  deleteIcon: {
    zIndex: "0",
    color: "rgba(0,0,0, 0.5)",
    transition: "all 0.4s ease-in-out",
    //jss will not apply properly if you use spaces between the selectors "&:hover", "& :hover, will not apply
    // the deleteIcon non-hovered transitions, only the hover selectors transitions
    "&:hover": {
      color: "white",
      zIndex: "10",
      transform: "scale(1.5)",
      transition: "all 0.4s ease-in",
    },
  },
};
export default styles;
