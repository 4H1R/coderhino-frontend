import React, { useState } from 'react';
import { inviteAcceptOrReject } from 'services/auth/invitations';
import checkmark from "assets/images/checkmark.png";

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
        <div className="flex-wrap flex-grow row-auto p-1 mt-2 mb-2 overflow-hidden break-all bg-gray-800 border border-blue-200 rounded-lg ">
            <div>
                {props.server_name}
        
                {actionTaken !== "A" && actionTaken !== "R" && 
                <div className="float-right">
                    <button className="mt-2 border-black" onClick={reject}>❌</button> 
                    <button className="w-6 h-6 mt-2 ml-2" onClick={accept}><img src={checkmark} alt="check mark" /></button>
                </div>}
            </div>

            <p>{props.message}</p>
            
            {actionTaken === "A" &&
            <p className="text-blue-300 border-t-2">Invitation Accepted</p>}

            {actionTaken === "R" &&
            <p className="text-blue-300">Invitation Declined</p>}
        </div>
    );
};

export default Invite;
