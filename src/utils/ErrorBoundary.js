import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorMessage) {
    console.error(error, errorMessage);
  }

  render() {
    if (this.hasError) {
      return <div>{this.errorMessage}</div>;
    }
    return this.props.children;
  }
}
