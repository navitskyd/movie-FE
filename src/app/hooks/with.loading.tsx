import * as React from "react";


function WithLoading(Component) {
    const LoadIndicator = () => <h2>Loading...</h2>

    return function WithLoadingComponent({isLoading, ...props}) {
        return isLoading
            ? <LoadIndicator/>
            : <Component {...props}/>
    }
}
export default WithLoading;