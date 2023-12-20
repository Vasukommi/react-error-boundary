import { useState } from "react";
import FakeAPICall from "../service/fakeAPICall"

const FetchError = () => {
    const [useResponse, setResponse] = useState<any>({});
    const makeAPICall = async () => {
        const response: any = await FakeAPICall();
        setResponse(response);
    };

    return (
        <div>
            <button onClick={makeAPICall}>Fetch Data</button>
            {useResponse.name}
        </div>
    )
}

export default FetchError