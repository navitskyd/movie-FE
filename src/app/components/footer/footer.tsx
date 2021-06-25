import * as React from "react";
import './footer.less'


export default (props) => {
    return (
        <div className="footer">
            <div className="footer-title"><span className="bolder">netflix</span>roulette {props.children}  &copy;</div>
        </div>
    )
};

