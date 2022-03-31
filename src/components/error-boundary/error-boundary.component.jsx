import React from "react";
import { ErrorImageContainer, ErrorImageOverlay, ErrorImageText } from "./error-boundary.styles"

class ErrorBoundary extends React.Component {
    constructor() {
        super();

        this.state = {
            hasErrored: false
        };
    }

    static getDerivedStateFromError(error) {
        return {hasErrored: true};
    }

    componentDidCatch(error, info) {
        console.log(error, info);
    }

    render() {
        if (this.state.hasErrored) {
            return(
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl='https://i.imgur.com/WvEu0cO.png'></ErrorImageContainer>
                    <ErrorImageText>This page broke! Let us know so we can improve.</ErrorImageText>
                </ErrorImageOverlay>
                )
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;