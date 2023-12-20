import { useLocation } from "react-router-dom";
import classes from "./FallBack.module.css";
import { useEffect, useRef } from "react";

const Fallback = ({ error, resetErrorBoundary }: any) => {
    const location = useLocation();
    const prevLocation = useRef(location.pathname);

    const reset = () => {
        resetErrorBoundary();
    };

    useEffect(() => {
        if (location.pathname !== prevLocation.current) {
            reset();
            prevLocation.current = location.pathname; // Update the previous location
        }
    }, [location.pathname, reset]);

    const errorType = error.name || "UnknownError";

    const renderContactSupport = () => {
        return (
            <div>
                If issue Persisit,
                <a href="/contact-support">Contact support</a>
            </div>
        )
    }

    switch (errorType) {
        case "TypeError":
            return (
                <div className={classes.error_container}>
                    Type Error: {error.message}
                    <button onClick={reset}>Reset</button>
                    {renderContactSupport()}
                </div>
            );
        case "ReferenceError":
            return (
                <div className={classes.error_container}>
                    Reference Error: {error.message}
                    <button onClick={reset}>Reset</button>
                    {renderContactSupport()}
                </div>
            );

        default:
            return (
                <div className={classes.error_container}>
                    Unknown error occurred: {error.message}
                    <button onClick={reset}>Reset</button>
                    {renderContactSupport()}
                </div>
            );
    }
};

export default Fallback;