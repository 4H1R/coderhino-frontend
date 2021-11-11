import React, { useState } from "react";
import Head from "shared/elements/Head";
import { Formik, Form } from "formik";
import getUserInfo from "services/auth/user_profile";


function UserProfileInfo() {
    
    const [userId, setUserId] = useState("");
    const [userName, setUserName] = useState("");
    const [aboutUser, setAboutUser] = useState("");
    const [profilePic, setProfilePic] = useState("");
    let picPath = ""

    const getData = async (e :any) => {
        const userInfo :any = await getUserInfo();
        console.log(userInfo.data);
        const data = userInfo.data;
    
        
        console.log(data);

        setUserId(data.id);
        setUserName(data.username);
        setAboutUser(data.about);
        setProfilePic(data.profile_pic);

        picPath = "/home/user1/Code/reactprojs/CodeRhino" + profilePic;

        console.log(userId);
        console.log(userName);
    }

    // if (!userId || userId === undefined) {
    //     return (<h1>There is no user profile information to display.</h1>);
    // }
    // else {
        return (
        <>
            <Head title="My Profile" desc="My Profile page" />
            <p className="pt-3 pb-3 text-3xl">My Profile</p>
            <Formik
                initialValues={{}}
                // eslint-disable-next-line no-restricted-globals
                onSubmit={(e) => {console.log("it works"); getData(e)}}
            >
            <Form>
                <div>
                    <img src={require("file:///home/user1/Code/reactprojs/CodeRhino/pictures/default-pic.png")} alt="Profile Picture" />
                    
                            {userId}
                            {userName}
                            {aboutUser}
                            {/*{profilePic} */}
                    
                    <button type="submit">Show Data</button>
                </div>       
            </Form>
            </Formik>
        </>
        );
    }
//}

export default UserProfileInfo;
