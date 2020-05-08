import React from 'react';
import { withStyles } from '@material-ui/core/styles';
// Styled Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function Header() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const StyledTab = withStyles(theme => ({
    root: {
      padding: '20px 30px',
      minWidth: 0,
    },
  }))(props => <Tab disableRipple {...props} />);

  return (
    <AppBar position="static" color="transparent">
      <Toolbar variant="dense">
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h4">Агрегатор новостей</Typography>
          </Grid>
          <Grid item>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <StyledTab label="Новости" />
              <StyledTab label="О нас" />
              <StyledTab label="Помощь" />
              <StyledTab label="Настройки" />
            </Tabs>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};