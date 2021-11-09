import React from "react";
import withStyles from "@material-ui/styles/withStyles";
import styles from "./styles/PaletteFooterStyles";

 function paletteFooter(props) {
  const { paletteName, emoji, classes } = props;
  return (
    <div>
      <footer className={classes.paletteFooter}>
        {paletteName}
        <span className={classes.Emoji}>{emoji}</span>
      </footer>
    </div>
  );
}

export default withStyles(styles)(paletteFooter)
