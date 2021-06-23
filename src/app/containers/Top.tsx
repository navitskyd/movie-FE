import * as React from "react";
import Header from "../components/header";
import AddMovie from "../components/AddMovie";
import SearchButton from "../components/SearchButton";
import SearchInput from "../components/SearchInput";

export default class Top extends React.Component {
    render() {
        return (<>
                <Header/>
                <AddMovie/>
                <SearchInput/>
                <SearchButton/>
            </>
        )
    }

}