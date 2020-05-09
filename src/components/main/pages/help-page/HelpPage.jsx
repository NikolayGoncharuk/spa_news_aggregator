import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
// Styled Components
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
// Icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  text: {
    marginTop: '24px',
  },
  faqContainer: {
    marginTop: '24px',
  },
  faq: {
    marginTop: '24px',
  },
}));

const mapStateToProps = (state) => ({
  faq: state.faq,
});

export default connect(mapStateToProps, {})(
  function HelpPage(props) {
    const classes = useStyles();

    const setFaq = props.faq.map((item, index) => {
      return (
        <ExpansionPanel key={index}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">{item.question}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>{item.answer}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      );
    });

    return (
      <div>
        <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor eget dolor morbi non arcu risus. Risus ultricies tristique nulla aliquet enim tortor at auctor urna. Convallis posuere morbi leo urna molestie at elementum eu facilisis. Congue eu consequat ac felis. Egestas sed sed risus pretium quam. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Amet nulla facilisi morbi tempus iaculis urna. Urna neque viverra justo nec. A erat nam at lectus urna duis. Nibh praesent tristique magna sit.</Typography>
        <Typography className={classes.text}>Amet est placerat in egestas erat imperdiet sed euismod nisi. Elementum curabitur vitae nunc sed velit dignissim sodales. Gravida cum sociis natoque penatibus et magnis dis parturient montes. Venenatis urna cursus eget nunc.</Typography>
        <Typography className={classes.text}>Amet est placerat in egestas. Vel turpis nunc eget lorem. Massa sapien faucibus et molestie ac feugiat sed. Integer malesuada nunc vel risus commodo viverra maecenas accumsan. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Dui faucibus in ornare quam viverra orci. Cursus sit amet dictum sit amet justo donec. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Id aliquet risus feugiat in ante metus dictum at. Ac turpis egestas sed tempus. Sed libero enim sed faucibus. Convallis aenean et tortor at risus viverra adipiscing at in. Condimentum mattis pellentesque id nibh. Bibendum ut tristique et egestas quis ipsum. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus.</Typography>
        <div className={classes.faqContainer}>
          <Typography gutterBottom variant="h4">Часто задаваемые вопросы</Typography>
          <div className={classes.faq}>
            {setFaq}
          </div>
        </div>
      </div>
    );
  }
);