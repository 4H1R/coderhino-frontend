import React from "react";
import Head from "shared/elements/Head";
import Invite from "components/auth/Invite";
import getInvites from "services/auth/invitations"
import { Formik, Form } from "formik";

function InvitesList() {
  const result = getInvites();
  const data = result.data;

  if (!data || data === undefined) {
    return (<h1>There are no invitations as of now.</h1>);
  }
  else {
    return (
      <>
        <Head title="My Invites" desc="My Invites page" />
        <Formik
          initialValues={{}}
          onSubmit={async (values, { setErrors }) => {}}
        >
          <Form>
            <div>
              <ul>
                {data.map((invite) => (
                  <li key={invite.id}>
                    <Invite
                      id={invite.id}
                      server_name={invite.server_name}
                      message={invite.message}
                    />
                  </li>
                ))}
              </ul>
            </div>       
          </Form>
        </Formik>
      </>
    );
  }
}

export default InvitesList;
