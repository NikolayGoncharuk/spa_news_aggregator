import React from 'react';
import { connect } from 'react-redux';
import { saveSettings } from '../../../../model/reducers/themeReducer';
import { makeStyles } from '@material-ui/core/styles';
// Styled Components
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
// Components
import PageSize from './settings-items/PageSize';
import FontSize from './settings-items/FontSize';
import DarkMode from './settings-items/DarkMode';
import ProgressButton from './progress-button/ProgressButton';

const useStyles = makeStyles(theme => ({
  settingItem: {
    padding: '16px 0',
  },
  buttonsContainer: {
    paddingTop: '24px',
  },
}));

const mapStateToProps = (state) => ({
  pageSize: state.news.newsParams.pageSize,
  fontSize: state.theme.typography.fontSize,
  darkMode: state.theme.darkMode
});

export default connect(mapStateToProps, { saveSettings })(
  function SettingsPage(props) {
    const { pageSize, fontSize, darkMode } = props;
    const classes = useStyles();

    // Локальные значения настроек
    const [localPageSize, setLocalPageSize] = React.useState(pageSize);
    const [localFontSize, setLocalFontSize] = React.useState(fontSize);
    const [localDarkMode, setLocalDarkMode] = React.useState(darkMode);

    // Значение настроек по умолчанию
    const defaultPageSize = 10;
    const defaultFontSize = 14;
    const defaultDarkMode = false;

    // Изменение локальных значений настроек
    const handlePageSize = (event, newValue) => {
      setLocalPageSize(newValue);
    };
    const handleFontSize = (event, newValue) => {
      setLocalFontSize(newValue);
    };
    const handleDarkMode = (event) => {
      setLocalDarkMode(event.target.checked);
    };

    // Сохранение настроек
    const saveSettings = () => {
      props.saveSettings({ localPageSize, localFontSize, localDarkMode });
    };

    // Сброс настроек
    const resetSettings = () => {
      setLocalPageSize(defaultPageSize);
      setLocalFontSize(defaultFontSize);
      setLocalDarkMode(defaultDarkMode);
    };

    return (
      <div>
        <PageSize
          pageSize={pageSize}
          defaultPageSize={defaultPageSize}
          localPageSize={localPageSize}
          handlePageSize={handlePageSize}
          className={classes.settingItem}
        />
        <Divider />
        <FontSize
          fontSize={fontSize}
          defaultFontSize={defaultFontSize}
          localFontSize={localFontSize}
          handleFontSize={handleFontSize}
          className={classes.settingItem}
        />
        <Divider />
        <DarkMode
          darkMode={darkMode}
          defaultDarkMode={defaultDarkMode}
          localDarkMode={localDarkMode}
          handleDarkMode={handleDarkMode}
          className={classes.settingItem}
        />
        <Grid container spacing={3} className={classes.buttonsContainer}>
          <Grid item>
            <ProgressButton
              label="Сохранить"
              labelDisabled="Сохранение"
              pageSize={pageSize}
              fontSize={fontSize}
              darkMode={darkMode}
              localPageSize={localPageSize}
              localFontSize={localFontSize}
              localDarkMode={localDarkMode}
              saveSettings={saveSettings}
            />
          </Grid>
          <Grid item>
            <Button disabled={
              (localPageSize === defaultPageSize) &&
              (localFontSize === defaultFontSize) &&
              (localDarkMode === defaultDarkMode)
            }
              color="secondary"
              onClick={resetSettings}
            >Сбросить</Button>
          </Grid>
        </Grid>
      </div >
    );
  }
);