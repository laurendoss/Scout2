import React, { useState } from "react";
import Signin from "../components/Signin/Signin";
import Signup from "../components/Signup/Signup";
import { Tabs, Tab } from "react-bootstrap";
import "./Authenticate.css"

function Authenticate(props) {
    const [key, setKey] = useState('signin');

    return (
        <Tabs
        className="justify-content-md-center mainTabs"
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            >
            <Tab eventKey="signin" title="Signin" className="SignIn">

                <Signin {...props}/>
            </Tab>
            <Tab eventKey="signup" title="Signup" className="SignUp">
                <Signup {...props}/>
            </Tab>
        </Tabs>
    );
}

export default Authenticate;