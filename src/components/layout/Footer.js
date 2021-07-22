import React, { PureComponent } from "react";
import SimpleReactFooter from "simple-react-footer";
import logo from "./../../assets/images/newlogo2.png";
import FS from "./partials/FooterSocial";
import "./style.css";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <div className="row" style={{ backgroundColor: "#f8d384" }}>
      <div
        className="columnx1"
        style={{ textAlign: "left", color: "black", padding: "3%" }}
      >
        <img src={logo} alt="" style={{ width: "60%" }} />
      </div>
      <div>
        <a id="about" href="/About_us">
          About Us
        </a>
        <br />
        For Any Queries:
        <br />
        Email: info@edopt.org
        <br />
        Contact No: +91 7700975559
      </div>
      {/*
      <div className="columnx2" style={{textAlign:"left", color:"black", padding:"3%"}}>
        About Us<br/>
        Team eDOPT<br/>
        In The News<br/>
        Our Partners<br/>
        Careers<br/>
        eDOPT Blog<br/>
        Success Stories
      </div>
      <div className="columnx3" style={{textAlign:"left", color:"black", padding:"3%"}}>
        Support<br/>
        Medical Finance<br/>
        FAQs & Help Center<br/>
        Fundraising Tips<br/>
        Fundraiser Video<br/>
        Trust & Safety<br/>
        Plans & Pricing<br/>
        Contact Us<br/>
      </div> */}
    </div>
  );
}

export default Footer;
