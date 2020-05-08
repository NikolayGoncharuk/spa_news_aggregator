import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
// Styled Components
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  datePicker: {
    marginTop: '16px',
  },
  buttonsContainer: {
    marginTop: '16px',
  },
}));

export default function Date() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h6">Фильтровать по дате</Typography>
      <Typography variant="caption">Выберите дату публикации новостей</Typography>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker className={classes.datePicker} />
      </MuiPickersUtilsProvider>
      <Grid container spacing={3} className={classes.buttonsContainer}>
        <Grid item>
          <Button>Показать</Button>
        </Grid>
        <Grid item>
          <Button>Сбросить</Button>
        </Grid>
      </Grid>
    </div>
  );
};