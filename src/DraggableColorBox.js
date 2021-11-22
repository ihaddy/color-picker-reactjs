import React from 'react'
import withStyles from '@material-ui/styles/withStyles'
import Delete from '@material-ui/icons/Delete'
import { SortableElement } from 'react-sortable-hoc'
import styles from './styles/DraggableColorBoxStyles'

const DraggableColorBox = SortableElement(props => {
    const { classes, deleteColor, name, color } = props;
    return (
      <div className={classes.root} style={{ backgroundColor: color }}>
        <div className={classes.boxContent}>
          <span> {name}</span>
          <Delete className={classes.deleteIcon} onClick={deleteColor} />
        </div>
      </div>
    );
  });
  export default withStyles(styles)(DraggableColorBox);

