import React, {useState} from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import Input from '../elements/Input';
import { Link } from 'react-router-dom';
import Modal from '../elements/Modal';
import './style.css'
import FooterSocial from '../layout/partials/FooterSocial';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const sectionHeader = {
    title: '',
    paragraph: ''
  };
  alert("Login to Schedule a Meeting!")
  return (
    <section
      {...props}
      className={outerClasses}
    >
      {/*<div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
  <div className={splitClasses}>*/}

          <div style={{margin: "30px 0"}}>
    <div className= "main-container">
      <div className= "upper-div" >
        <div className= "profile-img">
          <img src={require('./../../assets/images/i3.jpg')} alt="" style={{width:"80%", margin: "5px auto", borderRadius: "5px"}} />
        </div>
        <div className= "details">
          <center>
          <h6 style= {{color: "black"}}> Ankita Mishra </h6>
          <h6 style= {{color: "black"}}> Age : 16 </h6>
          <a href="/" className="button button-primary button-wide-mobile button-sm schedule-meet-btn" style={{backgroundColor:"#f1b12a", margin:"1%", borderRadius:"20px"}}>Schedule a Meeting</a>
          </center>
        </div>
      </div>
      <div className= "lower-div" style={{padding: "2%"}}>
        <p>I need financial assistance to complete my school. I am a topper of my class. Everyone loves me because of my polite nature. Now things have changed, we have no resource to complete my schooling. I am looking for my virtual parent here who will take care of my studies. I will prove myself and will forever be grateful to person who will help me.
</p>
      </div>
    </div>
    </div>
            
         {/*} </div>
        </div>
</div>*/}
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;