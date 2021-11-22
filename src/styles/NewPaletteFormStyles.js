import {DRAWER_WIDTH} from "../constants";
const drawerWidth = DRAWER_WIDTH
const styles = (theme) => ({
    root: { display: "flex" },
  
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 20,
    },
  
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      display: "flex",
      alignItems: "center",
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: "0 8px",
      width: "100%",
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
    content: {
      flexGrow: 1,
      height: "calc(100vh - 64px)",
      padding: 0,
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    container: {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "stretch",
      flexDirection: "column",
      justifyContent: "center",
      paddingLeft: "10px",
      paddingRight: "10px",
    },
    buttons: { width: "100%" },
    button: { width: "50%" },
  });

  export default styles