import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
// Styled Components
import Toolbar from '@material-ui/core/Toolbar';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
// Icons
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    bottom: '16px',
    right: '16px',
    zIndex: theme.zIndex.speedDial,
  },
  toolbar: {
    position: 'absolute'
  },
}));

export default function ScrollTop() {
  const classes = useStyles();

  // Параметры отображения кнопки
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 500,
  });

  // Поиск элемента по id и запуск прокрутки по клику
  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar} id="back-to-top-anchor" />
      <Zoom in={trigger}>
        <div onClick={handleClick} role="presentation" className={classes.root}>
          <Fab color="primary" size="small">
            <KeyboardArrowUpIcon />
          </Fab>
        </div>
      </Zoom>
    </React.Fragment>
  );
};