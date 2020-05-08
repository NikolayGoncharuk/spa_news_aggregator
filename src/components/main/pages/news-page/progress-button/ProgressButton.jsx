import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// Styled Components
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '32px',
    display: 'flex',
  },
  circular: {
    margin: 'auto',
  },
  button: {
    margin: 'auto',
    borderRadius: 999,
  },
}));

export default function ProgressButton(props) {
  const classes = useStyles();

  const setButton = () => {
    if (props.loading) {
      return <CircularProgress
        className={classes.circular}
        color="inherit"
      />
    } else {
      return <Button
        className={classes.button}
        variant="outlined"
      >Показать еще</Button>
    };
  };

  return (
    <div className={classes.root}>
      {setButton()}
    </div>
  );
};