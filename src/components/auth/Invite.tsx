import React, { useState } from 'react';
import { inviteAcceptOrReject } from 'services/auth/invitations';

function Invite(props: any) {
    
    const [actionTaken, setActionTaken] = useState("");

    const accept = (e: any) => {
        e.preventDefault();

        const data = {
            id: props.id,
            server_name: props.server_name,
            message: props.message,
            response: true
        }

        inviteAcceptOrReject(data);
        setActionTaken("A");
    }

    const reject = (e: any) => {
        e.preventDefault();

        const data = {
            id: props.id,
            server_name: props.server_name,
            message: props.message,
            response: false
        }

        inviteAcceptOrReject(data);
        setActionTaken("R");
    }

       
    return (
        <>
            <h2>{props.server_name}</h2>
            <div>{props.message}</div><br />
            
            {actionTaken === "A" &&
            <h2>Invitation Accepted</h2>}

            {actionTaken === "R" &&
            <h2>Invitation Declined</h2>}
            
            {actionTaken !== "A" && actionTaken !== "R" && 
            <>
                <button onClick={reject}>&#x2715;</button> 
                <button className="circle-checkmark" onClick={accept}>&#9989;</button>
            </>}
        </>
    );
};

export default Invite;
