// src/components/system/ErrorBoundary.jsx
import { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        if (import.meta.env.DEV) {
            console.error("ErrorBoundary caught:", error, info);
        }
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="flex items-center justify-center min-h-screen text-center px-6">
                    <div>
                        <h2 className="text-xl font-semibold text-white">
                            Something went wrong
                        </h2>
                        <p className="mt-2 text-sm text-gray-400">
                            Please refresh the page or try again later.
                        </p>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
