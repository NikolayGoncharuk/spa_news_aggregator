import { createMuiTheme } from '@material-ui/core/styles';

export default function makeTheme(props) {
  return createMuiTheme({
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
};