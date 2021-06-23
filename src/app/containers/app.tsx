import * as React from "react";
import "../styles/app.css";
import Footer from "../components/footer";
import Top from "./Top";
import Middle from "./Middle";


export default class App extends React.Component {
    render() {
        return (
            <div className="component-app">
                <Top/>
                <Middle/>
                <Footer>
                    2021
                </Footer>
            </div>
        )
    }
}
