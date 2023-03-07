import { Component, ErrorInfo, ReactNode } from 'react';
import { PageError } from 'widgets/PageError';

interface ErrorBoundryProps {
    children: ReactNode;
}

interface ErrorBoundryState {
    hasError: boolean;
}

class ErrorBoundry extends Component<ErrorBoundryProps, ErrorBoundryState> {
    constructor(props: ErrorBoundryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
            return <PageError />;
        }

        return children;
    }
}

export default ErrorBoundry;
