import * as React from "react";
import '../styles/styles.css'

const Footer = (props) => {
    return (
        <div className="footer">
            <div className="footer-title"><span className="bolder">netflix</span>roulette {props.children}</div>
        </div>
    )
};

export default Footer;
