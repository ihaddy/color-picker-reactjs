import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import chroma from "chroma-js";
import withStyles from "@material-ui/styles/withStyles";
import "./ColorBox.css";

const styles = {
  colorBox: {
    width: "20%",
    height: (props) => (props.ShowingFullPalette ? "25%" : "50%"),
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-4px",
    "&:hover $copyButton": {
      opacity: "1",
      transition: "all 0.3s ease-in",
    }
  }, 
  boxContent: {
      position: 'absolute',
      width: '100%',
      left: "0px",
      bottom: "0px",
      padding: "10px",
      color: 'black',
      letterSpacing: "1px",
      textTransform: 'uppercase',
      fontSize: "12px",
  
  },

  copyText: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.7 ? "black" : "white",
  },
  colorName: {
    color: (props) =>
      chroma(props.background).luminance() <= 0.075 ? "white" : "black",
  },
  seeMore: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.5 ? "rgba(0,0,0,0.6)" : "white",
    background: "rgba(255,255, 255, 0.3)",
    position: "absolute",
    border: "none",
    right: "0px",
    bottom: "0px",
    width: "60px",
    height: "30px",
    textAlign: "center",
    lineHeight: "30px",
    textTransform: "uppercase",
  },
  copyButton: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.5 ? "rgba(0,0,0,0.7)" : "white",
    width: "100px",
    height: "30px",
    position: "absolute",
    display: "inline-block",
    top: "50%",
    left: "50%",
    marginLeft: "-50px",
    marginTop: "-15px",
    textAlign: "center",
    outline: "none",
    background: "rgba(255,255, 255, 0.3)",
    fontSize: "1rem",
    lineHeight: "30px",
    textTransform: "uppercase",
    border: "none",
    textDecoration: "none",
    opacity: "0",
  },
  copyOverlay: {
    opacity:  "0",
    zIndex: "0",
    transform:'scale(0.1)',
    width: '100%',
    height: '100%',
    transition: ' transform 0.6s ease-in-out',
  
},
  showCopyOverlay: {
    opacity: "1",
    zIndex: "10",
    transform: 'scale(50)',
    position: 'absolute',
  },
  copyMessage: {
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    fontSize: '4rem',
    transform: 'scale(0.1)',
    opacity: 0,
    color: 'white',
  },
  showCopyMessage:{
    opacity: 1,
    transform: 'scale(1)',
    zIndex: 25,
    transition: 'all 0.4s ease-in-out',
    transitionDelay: '0.3s',
    "& $h1": {
    fontWeight: "400",
    textShadow: '1px 2px black',
    background: 'rgba(255,255, 255, 0.3)',
    width: '100%',
    textAlign: 'center',
    marginBottom: "0",
    padding: '1rem',
    textTransform: 'uppercase',
    },
    "& $p": {
    fontSize: '2rem',
    fontWeight: 100,
    }

  }

};
class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }

  render() {
    const {
      name,
      background,
      paletteId,
      id,
      ShowingFullPalette,
      classes,
    } = this.props;
    const { copied } = this.state;
    return (
      // copytoclipboard is wrapping the entire colorboxnot the button
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background: background }} className={classes.colorBox}>
          <div
            style={{ background }}
            className={`${classes.copyOverlay} ${copied && classes.showCopyOverlay}`}
          />
          <div className={`${classes.copyMessage} ${copied && classes.showCopyMessage}  `}>
            <h1>Copied!</h1>
            <p className={classes.copyText}>{background}</p>
          </div>
          <div>
            <div className={classes.boxContent}>
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={classes.copyButton}> Copy </button>
          </div>
          {ShowingFullPalette && (
            <Link
              to={`/palette/${paletteId}/${id}`}
              onClick={(e) => e.stopPropagation()}
            >
              <span className={classes.seeMore}>MORE</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
