import React from 'react';
import { connect } from 'react-redux';
import { Redirect, useParams } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { getArticle } from '../../../../../model/reducers/newsReducer';
// Styled Components
import Skeleton from '@material-ui/lab/Skeleton';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Backdrop from '@material-ui/core/Backdrop';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  content: {
    marginTop: '24px',
    marginBottom: '24px',
  },
  img: {
    width: '50%',
    height: 'auto',
    float: 'left',
    marginRight: '24px',
    marginBottom: '24px',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  tagsWraper: {
    marginTop: '24px',
  },
  divider: {
    clear: 'left',
    width: '100%',
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  backdropImg: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  progressWrapper: {
    display: 'flex',
  },
  progress: {
    margin: 'auto',
  },
}));

const mapStateToProps = (state) => ({
  article: state.news.currentArticle,
  navItems: state.nav.navItems,
});

export default connect(mapStateToProps, { getArticle })(
  function PostPage(props) {
    const { article, getArticle, newsParams, navItems: { news } } = props;
    const classes = useStyles();
    let params = useParams();

    const [isInitial, setIsInitial] = React.useState(false);
    const [redirect, setRedirect] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);

    // Следит за изменением настроек, если настройки изменились, перенаправляет на страницу новостей
    React.useEffect(() => {
      if (isInitial) {
        setRedirect(true);
      };
    }, [newsParams]);

    // Делает запрос на получение новости
    React.useEffect(() => {
      window.scrollTo(0, 0);
      const fetch = async () => {
        setIsInitial(false);
        await getArticle(params.articleId);
        setIsInitial(true);
      };
      fetch();
    }, [params.articleId]);

    if (redirect) {
      return <Redirect to={news.path} />;
    };

    const setArticle = () => {
      if (isInitial) {
        return (
          <React.Fragment>
            <Typography gutterBottom variant="h4">{article.title}</Typography>
            <Typography gutterBottom>{article.publishedAt}</Typography>
            <Divider />
            <div className={classes.content}>
              <Paper
                component="img"
                className={classes.img}
                src={article.urlToImage}
                alt={article.title}
                onClick={handleOpen}
              />
              <Typography>{article.description}</Typography>
            </div>
            <div className={classes.divider} />
            <Divider />
            <div className={classes.tagsWraper}>
              <Chip component={Link} href={article.url} target="_blanc" variant="outlined" label={article.source.name} />
            </div>
            <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
              <Paper
                component="img"
                className={classes.backdropImg}
                src={article.urlToImage}
                alt={article.title}
              />
            </Backdrop>
          </React.Fragment>
        );
      } else {
        return (
          <React.Fragment>
            <Box pb={2}>
              <Skeleton component={Typography} gutterBottom variant="h4" width="60%" />
              <Skeleton width="15%" />
            </Box>
            <Divider />
            <Box pt={3} pb={3} component={Grid} container>
              <Grid item xs>
                <Skeleton
                  width="100%"
                  height="250px"
                  variant="rect"
                />
              </Grid>
              <Box pl={3} component={Grid} item xs>
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton width="60%" />
              </Box>
            </Box>
            <Divider />
            <Box pt={2}>
              <Skeleton width="15%" />
            </Box>
          </React.Fragment>
        );
      };
    };

    return (
      <div>
        {setArticle()}
      </div>
    );
  }
);