import React from 'react'
import withStyles from "@material-ui/styles/withStyles";
import styles from "./styles/PageStyles";
//the {children} is a shorthand way of passing in the props and then extracting props.children
function Page(props) {
    const {classes, children} = props
    return(
        <section className={classes.page}>
            {children}
        </section>
    ) 
        
}

export default withStyles(styles)(Page)