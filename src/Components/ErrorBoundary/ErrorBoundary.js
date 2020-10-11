import React, {Component} from 'react'

class ErrorBoundary extends Component {
    
    state = { hasError: false };

    static getDerivedStateFromError(error) { //if error occured
      return { hasError: true };
    }
  
    render() {
      if (this.state.hasError) {
        return <h1>Something went wrong.</h1>; //return error message
      }
  
      return this.props.children;  //return the app
    }
  }

export default ErrorBoundary;