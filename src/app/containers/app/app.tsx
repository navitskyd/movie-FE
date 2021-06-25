import * as React from "react";
import "./app.css";
import '../../styles/common.css'
import Footer from "../../components/footer/footer";
import TopContainer from "../top.container";
import Middle from "../middle/middle.container";


export default () => {
    return (
        <div className="app">
            <TopContainer/>
            <Middle/>
            <Footer>
                {new Date().getFullYear()}
            </Footer>
        </div>
    )
}
