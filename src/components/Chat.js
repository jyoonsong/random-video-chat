import React, { useState } from "react";
import { firestore } from "../utils/firebase";

const Chat = ({ currentUser }) => {

    const [state, setState] = useState("offline"); // offline, waiting, talking

    const setToWaiting = async () => {
        // set firebase state to waiting
        const currentUserRef = await firestore.collection("user").doc(currentUser.uid);
        await currentUserRef.set({
            state: "waiting",
            partner: ""
        });

        // set react state to waiting
        setState("waiting");
    }

    // render
    let returnValue = <button onClick={setToWaiting}>Start a random video chat</button>

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