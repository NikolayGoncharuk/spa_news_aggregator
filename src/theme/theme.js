import { createMuiTheme } from '@material-ui/core/styles';

export const makeTheme = (props) => createMuiTheme({
  palette: {
    type: (props.darkMode ? 'dark' : 'light')
  },
  typography: {
    fontSize: props.typography.fontSize,
  },

  props: {
    MuiButton: {
      variant: 'contained',
    },
  },
});