import React from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
// Date Picker
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import format from 'date-fns/format';
import ruLocale from 'date-fns/locale/ru';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
// Styled Components
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// Icons
import DateRangeIcon from '@material-ui/icons/DateRange';

const useStyles = makeStyles(theme => ({
  datePicker: {
    marginTop: '16px',
    width: '100%',
  },
  datePickerIcon: {
    marginRight: '16px',
  },
  buttonsContainer: {
    marginTop: '16px',
  },
}));

// Определение стилей компонента DatePicker
const themeDatePicker = {
  props: {
    MuiButton: {
      variant: 'default',
    },
  },
  overrides: {
    MuiPickersDay: {
      current: {
        color: 'inherit',
      },
    },
  },
};

// Установка формата даты и месяца в шапке календаря
class localizedUtils extends DateFnsUtils {
  getDatePickerHeaderText(date) {
    return format(date, "d MMMM", { locale: this.locale });
  };
  getCalendarHeaderText(date) {
    return format(date, "LLLL", { locale: this.locale });
  };
};

export default function DateWidget(props) {
  const { date: { to: date }, setDate } = props;
  const classes = useStyles();
  const [localDate, setLocalDate] = React.useState(date);

  // Сброс даты
  const resetDate = () => {
    setLocalDate('');
    setDate('');
  };

  // Преобразование даты в формат строки
  const handleDate = (date) => {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate() - 1;
    setLocalDate(date ? `${year}-${month}-${day}` : '');
  };

  return (
    <div>
      <Typography variant="h6">Фильтровать по дате</Typography>
      <Typography variant="caption">Выберите дату публикации новостей</Typography>
      <ThemeProvider theme={themeDatePicker}>
        <MuiPickersUtilsProvider utils={localizedUtils} locale={ruLocale}>
          <DatePicker
            className={classes.datePicker}
            showTodayButton
            format="d MMMM yyyy"
            minDate={new Date().setDate(new Date().getDate() - 31)}
            maxDate={new Date()}
            value={localDate ? Date.parse(localDate) + (24 * 3600000) : new Date()}
            onChange={handleDate}
            okLabel="Выбрать"
            todayLabel="Текущая дата"
            cancelLabel=""
            InputProps={{
              startAdornment: <Typography className={classes.datePickerIcon}>по</Typography>,
              endAdornment: <IconButton><DateRangeIcon /></IconButton>
            }}
          />
        </MuiPickersUtilsProvider>
      </ThemeProvider>
      <Grid container spacing={3} className={classes.buttonsContainer}>
        <Grid item>
          <Button
            color="primary"
            disabled={localDate === date}
            onClick={() => setDate(localDate)}
          >Показать</Button>
        </Grid>
        <Grid item>
          <Button
            color="secondary"
            disabled={!localDate && !date}
            onClick={resetDate}
          >Сбросить</Button>
        </Grid>
      </Grid>
    </div>
  );
};