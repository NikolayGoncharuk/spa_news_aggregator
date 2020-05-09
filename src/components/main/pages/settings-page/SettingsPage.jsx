import React from 'react';
import { connect } from 'react-redux';
import { saveSettings } from '../../../../model/reducers/themeReducer';
import { makeStyles } from '@material-ui/core/styles';
// Styled Components
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Switch from '@material-ui/core/Switch';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles(theme => ({
  settingItem: {
    padding: '16px 0',
  },
  buttonsContainer: {
    paddingTop: '24px',
  },
  successMessageWrapper: {
    display: 'flex',
    height: '100%'
  },
  successMessage: {
    margin: 'auto',
  },
}));

const mapStateToProps = (state) => {
  return {
    pageSize: state.news.newsParams.pageSize,
    fontSize: state.theme.typography.fontSize,
    darkMode: state.theme.darkMode
  };
};

export default connect(mapStateToProps, { saveSettings })(
  function SettingsPage(props) {
    const { pageSize, fontSize, darkMode } = props;
    const classes = useStyles();

    // Значения для настроек по умолчанию
    const defaultPageSize = 10;
    const defaultFontSize = 14;
    const defaultDarkMode = true;

    return (
      <div>
        <div className={classes.settingItem}>
          <Typography gutterBottom variant="h5">Количество выводимых новостей: {pageSize}</Typography>
          <Grid container spacing={3}>
            <Grid item xs>
              <Typography>Orci sagittis eu volutpat odio facilisis mauris sit. Ac placerat vestibulum lectus mauris ultrices eros in. Vitae tortor condimentum lacinia quis vel eros donec. Pharetra convallis posuere morbi leo urna molestie at elementum eu.</Typography>
            </Grid>
            <Grid item xs>
              <Typography><strong>Выберите количество выводимых новостей</strong></Typography>
              <Typography variant="caption">По умолчанию {defaultPageSize}</Typography>
              <Slider valueLabelDisplay="auto" marks step={5} min={10} max={30} />
            </Grid>
          </Grid>
        </div>
        <Divider />
        <div className={classes.settingItem}>
          <Typography gutterBottom variant="h5">Размер шрифта: {fontSize}</Typography>
          <Grid container spacing={3}>
            <Grid item xs>
              <Typography>Orci sagittis eu volutpat odio facilisis mauris sit. Ac placerat vestibulum lectus mauris ultrices eros in. Vitae tortor condimentum lacinia quis vel eros donec. Pharetra convallis posuere morbi leo urna molestie at elementum eu.</Typography>
            </Grid>
            <Grid item xs>
              <Typography><strong>Выберите размер шрифта</strong></Typography>
              <Typography variant="caption">По умолчанию {defaultFontSize}</Typography>
              <Slider valueLabelDisplay="auto" marks step={1} min={10} max={20} />
            </Grid>
          </Grid>
        </div>
        <Divider />
        <div className={classes.settingItem}>
          <Typography gutterBottom variant="h5">Тема: {darkMode}</Typography>
          <Grid container spacing={3}>
            <Grid item xs>
              <Typography>Orci sagittis eu volutpat odio facilisis mauris sit. Ac placerat vestibulum lectus mauris ultrices eros in. Vitae tortor condimentum lacinia quis vel eros donec. Pharetra convallis posuere morbi leo urna molestie at elementum eu.</Typography>
            </Grid>
            <Grid item xs>
              <Typography><strong>Переключите цветовую тему</strong></Typography>
              <Typography variant="caption">По умолчанию {defaultDarkMode}</Typography>
              <div>
                <FormControl component="fieldset">
                  <FormControlLabel
                    control={<Switch color="primary" />}
                  />
                </FormControl>
              </div>
            </Grid>
          </Grid>
        </div>
      </div >
    );
  }
);