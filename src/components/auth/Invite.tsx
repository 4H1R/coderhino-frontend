import React from 'react';
import { inviteAcceptOrReject } from 'services/auth/invitations';

function Invite(props: any) {
    console.log(props);

    const accept = (e: any) => {
        e.preventDefault();

        const data = {
            id: props.id,
            server_name: props.server_name,
            message: props.message,
            response: true
        }

        inviteAcceptOrReject(data);
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
    }

    return (
        <div>
            <h2>{props.server_name}</h2>
            <div>{props.message}</div><br />
            <button onClick={reject}>&#x2715;</button>
            <button onClick={accept}>&#10003;</button>
        </div>
    );
};

export default Invite;
