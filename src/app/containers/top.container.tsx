import * as React from "react";
import Header from "../components/header/header";
import AddMovie from "../components/add.movie/add.movie";
import SearchButton from "../components/search.movie/search.button";
import SearchInput from "../components/search.movie/search.input";

export default () => (<>
        <Header/>
        <AddMovie/>
        <SearchInput/>
        <SearchButton/>
    </>
)