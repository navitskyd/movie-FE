import * as React from "react";
import "./app.css";
import '../../styles/common.css'
import Footer from "../../components/footer/footer";
import TopContainer from "../top.container";
import Middle from "../middle/middle.container";


export default () => {
    return (
        <div className="component-app">
            <TopContainer/>
            <Middle/>
            <Footer>
                2021
            </Footer>
        </div>
    )
}
