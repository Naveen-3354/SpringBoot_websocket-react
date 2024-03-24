import React from "react";
import "./Login.scss";
import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";

const Login = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <div id="Login">
      <div className="card">
        <h2>Chats</h2>
        <h3>Login</h3>
        <InputGroup size="md">
          <Input
            variant="flushed"
            placeholder="Enter your email or number."
            focusBorderColor="rgb(110, 110, 110)"
            borderBottom="2px solid black"
          />
        </InputGroup>
        <InputGroup size="md">
          <Input
            focusBorderColor="rgb(110, 110, 110)"
            variant="flushed"
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            borderBottom="2px solid black"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>

        <Button colorScheme='gray' variant="solid">Gray</Button>
      </div>
    </div>
  );
};

export default Login;
