import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// Styled Components
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
// Icons
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  input: {
    padding: '8px 8px 8px 16px',
    width: 'calc(100% - 44px)',
  },
  iconButton: {
    marginBottom: '2px',
    padding: '8px',
  },
}));

export default function Search(props) {
  const classes = useStyles();
  let [localSearchValue, setLocalSearchValue] = React.useState(props.searchValue);

  const handleSearchValue = (event) => {
    setLocalSearchValue(event.target.value);
  };

  const setSearchValue = () => {
    props.setSearchValue(localSearchValue);
  };

  return (
    <Paper elevation={4} component="form">
      <InputBase
        className={classes.input}
        placeholder="Поиск..."
        onChange={handleSearchValue}
        value={localSearchValue}
      />
      <IconButton
        className={classes.iconButton}
        onClick={setSearchValue}
        disabled={!localSearchValue && !props.searchValue}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};