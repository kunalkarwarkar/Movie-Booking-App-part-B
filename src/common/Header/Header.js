import React, {useEffect, useState} from "react";
import "./Header.css";
import logo from '../../assets/logo.svg';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Typography from '@material-ui/core/Typography';

function Header(props) {


    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };

    const TabContainer = function (props) {
        return (
            <Typography component="div" style={{ padding: 0, textAlign: 'center' }}>
                {props.children}
            </Typography>
        )
    }

    TabContainer.propTypes = {
        children: PropTypes.node.isRequired
    }


const [modalIsOpen, setModalIsOpen] = useState(false);
const [tabValue, setTabValue] = useState(0);
const [usernameRequired, setUsernameRequired] = useState("dispNone");
const [username, setUsername] = useState("");
const [loginPasswordRequired, setLoginPasswordRequired] = useState("dispNone");
const [loginPassword, setLoginPassword] = useState("");
const [firstnameRequired, setFirstnameRequired] = useState("dispNone");
const [firstname, setFirstname] = useState("");
const [lastnameRequired, setLastnameRequired] = useState("dispNone");
const [lastname, setLastname] = useState("");
const [emailRequired, setEmailRequired] = useState("dispNone");
const [email, setEmail] = useState("");
const [registerPasswordRequired, setRegisterPasswordRequired] = useState("dispNone");
const [registerPassword, setRegisterPassword] = useState("");
const [contactRequired, setContactRequired] = useState("dispNone");
const [contact, setContact] = useState("");
const [registrationSuccess, setRegistrationSuccess] = useState(false);
const [loggedIn, setLoggedIn] = useState(false);
useEffect(()=> {
    // console.log("useEffect for logIn and logOut is called")
}, [loggedIn])
const openModalHandler = () => {
    setModalIsOpen(true);
}

const logoutHandler = () => {
    setLoggedIn(false);
    sessionStorage.removeItem("loggedIn")
    // sessionStorage.setItem("loggedIn", false)
}

const closeModalHandler = () => {
    setModalIsOpen(false)
}

const tabChangeHandler = (event, value) => {
    setTabValue(value)
}

const inputUsernameChangeHandler = (e) => {
    // value = e.target.value
    setUsername(e.target.value)
}
const inputLoginPasswordChangeHandler = (e) => {
    // value = e.target.value
    setLoginPassword(e.target.value)
}

const loginClickHandler = () => {

    username === "" ? setUsernameRequired("dispBlock") : setUsernameRequired("dispNone");
    loginPassword === "" ? setLoginPasswordRequired("dispBlock") : setLoginPasswordRequired("dispNone");

    // if(username === "" || loginPassword === "") {
    //     if(username === "" && loginPassword === "") {
    //         setUsernameRequired("dispBlock")
    //         setLoginPasswordRequired("dispBlock")
    //     }
    //     else if(username === "") {
    //         setUsernameRequired("dispBlock")
    //     }
    //     else if(loginPassword === "") {
    //         setLoginPasswordRequired("dispBlock")
    //     }
    // }
    // else {
        sessionStorage.setItem("loggedIn", true)

        setLoggedIn(true)
        closeModalHandler();
    // }


}

// onchange functions for Registration
const inputFirstNameChangeHandler = () => {}
const inputLastNameChangeHandler = () => {}
const inputEmailChangeHandler = () => {}
const inputRegisterPasswordChangeHandler = () => {}
const inputContactChangeHandler = () => {}

const registerClickHandler = () => {

    firstname === "" ? setFirstnameRequired("dispBlock") : setFirstnameRequired("dispNone");
    lastname === "" ? setLastnameRequired("dispBlock") : setLastnameRequired("dispNone");
    email === "" ? setEmailRequired("dispBlock") : setEmailRequired("dispNone");
    registerPassword === "" ? setRegisterPasswordRequired("dispBlock") : setRegisterPasswordRequired("dispNone");
    contact === "" ? setContactRequired("dispBlock") : contactRequired("dispNone");

}



return (
    <div className="header">
          <img src={logo} alt="My logo" className="logo" />

{!sessionStorage.getItem("loggedIn") ?
    <div className="login-button">
        <Button variant="contained" color="default" onClick={openModalHandler}>
            Login
        </Button>
    </div>
    :
    <div className="login-button">
        <Button variant="contained" color="default" onClick={logoutHandler}>
            Logout
        </Button>
    </div>
}
{props.showBookShowButton === "true" && !sessionStorage.getItem("loggedIn")
    ? <div className="bookshow-button">
        <Button variant="contained" color="primary" onClick={openModalHandler}>
            Book Show
        </Button>
    </div>
    : ""
}

{props.showBookShowButton === "true" && sessionStorage.getItem("loggedIn")
    ? <div className="bookshow-button">
        <Link to={"/bookshow"}>
            <Button variant="contained" color="primary">
                Book Show
            </Button>
        </Link>
    </div>
    : ""
}

{/*--------------------------------- Modal starts here-------------------------------------------- */}
<Modal
ariaHideApp={false}
isOpen={modalIsOpen}
contentLabel="Login"
onRequestClose={closeModalHandler}
style={customStyles}
>
<Tabs className="tabs" value={tabValue} onChange={tabChangeHandler}>
    <Tab label="Login" />
    <Tab label="Register" />
</Tabs>

{tabValue === 0 &&
    <TabContainer>
        <FormControl required>
            <InputLabel htmlFor="username">Username</InputLabel>
            <Input id="username" type="text" username={username} onChange={inputUsernameChangeHandler} />
            <FormHelperText className={usernameRequired}>
                <span className="red">required</span>
            </FormHelperText>
        </FormControl>
        <br /><br />
        <FormControl required>
            <InputLabel htmlFor="loginPassword">Password</InputLabel>
            <Input id="loginPassword" type="password" loginpassword={loginPassword} onChange={inputLoginPasswordChangeHandler} />
            <FormHelperText className={loginPasswordRequired}>
                <span className="red">required</span>
            </FormHelperText>
        </FormControl>
        <br /><br />
        {sessionStorage.getItem("loggedIn") === true &&
            <FormControl>
                <span className="successText">
                    Login Successful!
                </span>
            </FormControl>
        }
        <br /><br />
        <Button variant="contained" color="primary" onClick={loginClickHandler}>LOGIN</Button>
    </TabContainer>
}

{tabValue === 1 &&
    <TabContainer>
        <FormControl required>
            <InputLabel htmlFor="firstname">First Name</InputLabel>
            <Input id="firstname" type="text" firstname={firstname} onChange={inputFirstNameChangeHandler} />
            <FormHelperText className={firstnameRequired}>
                <span className="red">required</span>
            </FormHelperText>
        </FormControl>
        <br /><br />
        <FormControl required>
            <InputLabel htmlFor="lastname">Last Name</InputLabel>
            <Input id="lastname" type="text" lastname={lastname} onChange={inputLastNameChangeHandler} />
            <FormHelperText className={lastnameRequired}>
                <span className="red">required</span>
            </FormHelperText>
        </FormControl>
        <br /><br />
        <FormControl required>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input id="email" type="text" email={email} onChange={inputEmailChangeHandler} />
            <FormHelperText className={emailRequired}>
                <span className="red">required</span>
            </FormHelperText>
        </FormControl>
        <br /><br />
        <FormControl required>
            <InputLabel htmlFor="registerPassword">Password</InputLabel>
            <Input id="registerPassword" type="password" registerpassword={registerPassword} onChange={inputRegisterPasswordChangeHandler} />
            <FormHelperText className={registerPasswordRequired}>
                <span className="red">required</span>
            </FormHelperText>
        </FormControl>
        <br /><br />
        <FormControl required>
            <InputLabel htmlFor="contact">Contact No.</InputLabel>
            <Input id="contact" type="text" contact={contact} onChange={inputContactChangeHandler} />
            <FormHelperText className={contactRequired}>
                <span className="red">required</span>
            </FormHelperText>
        </FormControl>
        <br /><br />
        {registrationSuccess === true &&
            <FormControl>
                <span className="successText">
                    Registration Successful. Please Login!
                </span>
            </FormControl>
        }
        <br /><br />
        <Button variant="contained" color="primary" onClick={registerClickHandler}>REGISTER</Button>
    </TabContainer>
}
</Modal>

</div>
  );
}
export default Header; 