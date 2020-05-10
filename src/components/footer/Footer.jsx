import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// Styled Components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: '60px',
    paddingBottom: '60px',
  },
  widgetContent: {
    marginTop: '16px',
  },
  copyright: {
    paddingTop: '12px',
    paddingBottom: '12px',
    textAlign: 'center',
    boxShadow: theme.shadows[4],
  }
}));

export default function Footer() {
  const classes = useStyles();

  // Создание массива виджетов для имитации наполнения
  const getWidgets = () => {
    const widgets = [];
    for (let i = 0; i < 3; i++) {
      widgets.push({
        title: 'Lorem ipsum',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec dui nunc mattis enim ut tellus elementum. Ullamcorper dignissim cras tincidunt lobortis feugiat. Mattis pellentesque id nibh tortor id aliquet lectus. Cursus sit amet dictum sit amet justo donec enim diam. Eget dolor morbi non arcu risus quis varius quam.',
      });
    };
    return widgets;
  };

  const setWidgets = getWidgets().map((item, index) => (
    <Grid item xs={12} md key={index}>
      <Typography gutterBottom variant="h4">{item.title}</Typography>
      <Divider />
      <Typography className={classes.widgetContent}>{item.content}</Typography>
    </Grid>
  ));

  return (
    <React.Fragment>
      <Paper elevation={0} square component="footer" className={classes.root}>
        <Container maxWidth={false}>
          <Grid container justify="space-between" spacing={3}>
            {setWidgets}
          </Grid>
        </Container>
      </Paper>
      <Container maxWidth={false} className={classes.copyright}>
        <Typography>Все права защищены, незаконное использование интеллектуальной собственности карается <strong>смертной казнью</strong></Typography>
      </Container>
    </React.Fragment >
  );
};