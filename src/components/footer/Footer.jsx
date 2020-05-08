import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
// Styled Components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
// Icons
import MapIcon from '@material-ui/icons/Map';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';

const useStyles = makeStyles(theme => ({
  footer: {
    paddingTop: '40px',
    paddingBottom: '40px',
  },
  copyrights: {
    paddingTop: '12px',
    paddingBottom: '12px',
    textAlign: 'center',
    boxShadow: theme.shadows[4],
  }
}));

const WidgetTitle = withStyles()(props => (
  <Typography gutterBottom variant="h4" {...props} />
));

const WidgetContent = withStyles(theme => ({
  root: { marginTop: '16px' },
}))(props => <Typography {...props} />);

const ContactItem = withStyles()(props => (
  <ListItem>
    <ListItemIcon>
      {props.icon}
    </ListItemIcon>
    <ListItemText
      primary={props.primary}
      secondary={props.secondary}
    />
  </ListItem>
));

export default function Footer() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Paper elevation={0} square component="footer" className={classes.footer}>
        <Container maxWidth={false}>
          <Grid container justify="space-between" spacing={3}>
            <Grid item xs={12} md>
              <WidgetTitle>Новостное SPA</WidgetTitle>
              <Divider />
              <WidgetContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec dui nunc mattis enim ut tellus elementum. Ullamcorper dignissim cras tincidunt lobortis feugiat.</WidgetContent>
            </Grid>
            <Grid item xs={12} md>
              <WidgetTitle>О нас</WidgetTitle>
              <Divider />
              <WidgetContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec dui nunc mattis enim ut tellus elementum. Ullamcorper dignissim cras tincidunt lobortis feugiat. Mattis pellentesque id nibh tortor id aliquet lectus. Cursus sit amet dictum sit amet justo donec enim diam. Eget dolor morbi non arcu risus quis varius quam.</WidgetContent>
            </Grid>
            <Grid item xs={12} md>
              <WidgetTitle>Контакты</WidgetTitle>
              <Divider />
              <List>
                <ContactItem
                  icon={<MapIcon />}
                  primary="Адрес:"
                  secondary="г. Хабаровск, ул. Шимановская, 10"
                />
                <Divider variant="inset" component="li" />
                <ContactItem
                  icon={<MailIcon />}
                  primary="Эл. почта:"
                  secondary="goncharuk.bro@yandex.ru"
                />
                <Divider variant="inset" component="li" />
                <ContactItem
                  icon={<PhoneIcon />}
                  primary="Телефон:"
                  secondary="+7 (914) 408-84-69"
                />
              </List>
            </Grid>
          </Grid>
        </Container>
      </Paper>
      <Container maxWidth={false} className={classes.copyrights}>
        <Typography>Все права защищены, незаконное использование интеллектуальной собственности карается <strong>смертной казнью</strong></Typography>
      </Container>
    </React.Fragment >
  );
};