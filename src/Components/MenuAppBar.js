import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function MenuAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="grey">
        <Toolbar>
           &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <IconButton href="/" className={classes.menuButton} color="grey" aria-label="Menu">
              <i class="fas fa-home"></i>
          </IconButton>   
          <IconButton href="/gallery" className={classes.menuButton} color="grey" aria-label="Menu">
            <i class="fas fa-th-large"></i>
          </IconButton>       
          <IconButton href="/project" className={classes.menuButton} color="grey" aria-label="Menu">
            <i class="fas fa-palette"></i>
          </IconButton>         
          <Typography align="center" variant="h6" color="grey" className={classes.grow}>
            Moody Van Gogh &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          </Typography>
          <IconButton href="https://github.com/vivian5668" className={classes.menuButton} color="grey" aria-label="Menu">
            <i class="fab fa-github"></i>
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/chelsea-qianwei-zhu/" className={classes.menuButton} color="grey" aria-label="Menu">
            <i class="fab fa-linkedin"></i>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);