import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
// Styled Components
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
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

export default function PostPage(props) {
  const { articles } = props;
  const classes = useStyles();
  let params = useParams();

  const [postData, setPostData] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setPostData(articles.find(item => {
      return (Number(item.id) === Number(params.postPageRef));
    }));
  }, []);

  if (!postData) {
    return (
      <div className={classes.progressWrapper}>
        <CircularProgress color="inherit" className={classes.progress} />
      </div>
    );
  };

  return (
    <div>
      <Typography gutterBottom variant="h4">{postData.title}</Typography>
      <Typography gutterBottom>{postData.publishedAt}</Typography>
      <Divider />
      <div>
        <Paper
          component="img"
          src={postData.urlToImage}
          alt={postData.title}
          onClick={handleOpen}
        />
        <Typography>{postData.description}</Typography>
      </div>
      <div />
      <Divider />
      <div>
        <Chip component={Link} href={postData.url} target="_blanc" variant="outlined" label={postData.source.name} />
      </div>
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <Paper
          component="img"
          className={classes.backdropImg}
          src={postData.urlToImage}
          alt={postData.title}
        />
      </Backdrop>
    </div>
  );
};