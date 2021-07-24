import React, { useState } from "react";

const Chat = ({ currentUser }) => {

    const [state, setState] = useState("offline"); // offline, waiting, talking

    let returnValue = <button>Start a random video chat</button>

    if (state === "waiting") {
        returnValue = <div>
            Searching for your partner...<br/>
            Please wait a minute<br/>
            <button>Stop searching</button>
        </div>
    }
    else if (state === "talking") {
        returnValue = <div>Talking</div>
    }

    return (
        <>
        {returnValue}
        </>
    )
}

export default Chat;