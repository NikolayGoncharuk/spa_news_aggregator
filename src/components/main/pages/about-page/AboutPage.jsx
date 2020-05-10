import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// Styled Components
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
// Icons
import MapIcon from '@material-ui/icons/Map';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
// Components
import Map from './map/Map';

const useStyles = makeStyles(theme => ({
  contacts: {
    marginTop: '24px',
  }
}));

export default function AboutPage() {
  const classes = useStyles();

  const contactsItems = [
    {
      primary: 'Адрес:',
      secondary: 'г. Хабаровск, ул. Шимановская',
      icon: <MapIcon />,
    },
    {
      primary: 'Эл. почта:',
      secondary: 'goncharuk.bro@yandex.ru',
      icon: <MailIcon />,
    },
    {
      primary: 'Телефон:',
      secondary: '+7 (914) 408-84-69',
      icon: <PhoneIcon />,
    },
  ];

  const setContactsItems = () => (
    contactsItems.map((item, index) => (
      <React.Fragment>
        <ListItem key={index}>
          <ListItemIcon>
            {item.icon}
          </ListItemIcon>
          <ListItemText
            primary={item.primary}
            secondary={item.secondary}
          />
        </ListItem>
        {(index + 1 < contactsItems.length) && <Divider variant="inset" component="li" />}
      </React.Fragment>
    ))
  );

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs>
          <Typography gutterBottom>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor eget dolor morbi non arcu risus. Risus ultricies tristique nulla aliquet enim tortor at auctor urna. Convallis posuere morbi leo urna molestie at elementum eu facilisis. Congue eu consequat ac felis. Egestas sed sed risus pretium quam. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Amet nulla facilisi morbi tempus iaculis urna. Urna neque viverra justo nec. A erat nam at lectus urna duis. Nibh praesent tristique magna sit.</Typography>
          <Typography>Amet est placerat in egestas erat imperdiet sed euismod nisi. Elementum curabitur vitae nunc sed velit dignissim sodales. Gravida cum sociis natoque penatibus et magnis dis parturient montes. Venenatis urna cursus eget nunc.</Typography>
        </Grid>
        <Grid item xs>
          <Typography>Amet est placerat in egestas. Vel turpis nunc eget lorem. Massa sapien faucibus et molestie ac feugiat sed. Integer malesuada nunc vel risus commodo viverra maecenas accumsan. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Dui faucibus in ornare quam viverra orci. Cursus sit amet dictum sit amet justo donec. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Id aliquet risus feugiat in ante metus dictum at. Ac turpis egestas sed tempus. Sed libero enim sed faucibus. Convallis aenean et tortor at risus viverra adipiscing at in. Condimentum mattis pellentesque id nibh. Bibendum ut tristique et egestas quis ipsum. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus.</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3} className={classes.contacts}>
        <Grid item xs>
          <Map />
        </Grid>
        <Grid item xs>
          <Typography gutterBottom variant="h4">Контакты</Typography>
          <Divider />
          <List>
            {setContactsItems()}
          </List>
        </Grid>
      </Grid>
    </div>
  );
};