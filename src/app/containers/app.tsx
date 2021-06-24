import * as React from "react";
import "../styles/app.css";
import Footer from "../components/footer";
import TopContainer from "./top.container";
import Middle from "./middle.container";


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
