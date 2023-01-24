import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
      this.state = { _error: false };
    }
  
    static getDerivedStateFromError(error) {
      console.log(error);
      // Update state so the next render will show the fallback UI.
      return { hasError: true,  _error:error};
    }
  
    componentDidCatch(error, errorInfo) {
      console.log(errorInfo);
      // You can also log the error to an error reporting service
      // logErrorToMyService(error, errorInfo);
      return {  _error:errorInfo};
    }

    render() {

      if (this.state.hasError) {
  
        // console.log(this.state.hasError)
        // console.log(this.state._error)
        console.log("Something went wrong");

        // You can render any custom fallback UI
        return <h1>Something went wrong.</h1>;
      }
  
      return this.props.children; 
    }
  }

 export default ErrorBoundary