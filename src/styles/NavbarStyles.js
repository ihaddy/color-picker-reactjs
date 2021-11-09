const styles = {
    navbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "6vh",
    },

    logo: {
        marginRight: 15,
        padding: "0 13px",
        fontSize: 22,
        backgroundColor: "#eceff1",
        fontFamily: "Roboto",
        height: "100%",
        display: "flex",
        alignItems: "center",
        "& a": {
        textDecoration: "none",
        color: "black",
        },
    },

    slider: {
        width: "340px",
        margin: "0 10px",
        display: "inline-block",
        "& .rc-slider-track": {
        backgroundColor: "transparent",
        },
        "& .rc-slider-rail": {
        height: "8px",
        },
        "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover":
        {
            backgroundColor: "green",
            outline: "none",
            border: "2px solid green",
            boxShadow: "none",
            width: "13px",
            height: "13px",
            marginLeft: "-7px",
            marginTop: "-3px",
        },
  },
    selectContainer: {
        marginLeft: 'auto',
        marginRight: '1rem',
},
    Palette: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
   },
    paletteColors: {
        height: "90%"
   },
    goBack:{
        width: "20%",
        height:  "50%",
        opacity: "1",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-4px",
        backgroundColor: 'black',
            "& $a": {
            width: "100px",
            height: "30px",
            position: 'absolute',
            display: 'inline-block',
            top: '50%',
            left: '50%',
            marginLeft: '-50px',
            marginTop: '-15px',
            textAlign: 'center',
            outline: 'none',
            background: 'rgba(255,255, 255, 0.3)',
            fontSize: '1rem',
            lineHeight: "30px",
            color: 'white',
            textTransform: 'uppercase',
            border: 'none',
            textDecoration: 'none',
            }
     }
};
export default styles;
