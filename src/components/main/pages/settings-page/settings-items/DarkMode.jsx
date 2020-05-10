import React from 'react';
// Styled Components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function PaletteType(props) {
  const { className, darkMode, defaultDarkMode, handleDarkMode, localDarkMode } = props;

  // Определение названия темы
  const darkModeName = darkMode ? 'Тёмная' : 'Светлая';
  const defaultDarkModeName = defaultDarkMode ? 'тёмная' : 'светлая';
  const localDarkModeName = localDarkMode ? 'Тёмная' : 'Светлая';

  return (
    <div className={className}>
      <Typography gutterBottom variant="h5">Тема: {darkModeName}</Typography>
      <Grid container spacing={3}>
        <Grid item xs>
          <Typography>Orci sagittis eu volutpat odio facilisis mauris sit. Ac placerat vestibulum lectus mauris ultrices eros in. Vitae tortor condimentum lacinia quis vel eros donec. Pharetra convallis posuere morbi leo urna molestie at elementum eu.</Typography>
        </Grid>
        <Grid item xs>
          <Typography><strong>Переключите цветовую тему</strong></Typography>
          <Typography variant="caption">По умолчанию {defaultDarkModeName}</Typography>
          <div>
            <FormControl component="fieldset">
              <FormControlLabel
                label={localDarkModeName}
                control={
                  <Switch
                    checked={localDarkMode}
                    onChange={handleDarkMode}
                    color="primary"
                  />
                }
              />
            </FormControl>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};