import { ErrorBoundary } from "react-error-boundary";
import Fallback from "../fallback/FallBack";

const ComponentError = () => {
    const test: any = {};
    return (
        <div>
            <h1>Component 2</h1>
            <div>ComponentError</div>
            <div>
                <h1>Component 2</h1>
                <ErrorBoundary FallbackComponent={Fallback} >
                    <div>
                        {test}
                    </div>
                </ErrorBoundary>
            </div>
        </div>
    )
}

export default ComponentError