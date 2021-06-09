import React from "react";
// import './styles.css';

function ErrorBoundary(props){
    //fallback UI
    const OopsText=()=>(
        <h2>
            Oops, something went wrong
        </h2>
    )

    let isOK=true;

    return <>{isOK?props.children:<OopsText/>}</>
}

export default ErrorBoundary;