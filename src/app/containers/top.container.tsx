import * as React from "react";
import Header from "../components/header";
import AddMovie from "../components/add.movie";
import SearchButton from "../components/search.button";
import SearchInput from "../components/search.input";

export default () => (<>
        <Header/>
        <AddMovie/>
        <SearchInput/>
        <SearchButton/>
    </>
)