import * as React from "react";

class ErrorBoundary extends React.Component <any,any>{
    constructor(props) {
        super(props);
        this.state = {hasError: false}
    }


    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        super.componentDidCatch(error, errorInfo);
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }
}

export default ErrorBoundary;