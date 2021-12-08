const styles = {
  page: {
    height: "100vh",
    position: "fixed",
    width: "100%",
    top: 0,
    transition: "opacity 0.3s ease-in-out"
  },
  "@global":{
  ".page-enter":{
    opacity:0
  },
  ".page-enter-active":{
    opacity: 1,
    transition: "opacity 0.3s ease-in"
  },
  ".page-exit-active":{
    opacity: 0,
    transition: "opacity 0.3 ease-out"
  }}
};

export default styles;
