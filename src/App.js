import ChatRoom from "./components/chatroom/ChatRoom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        {/* <ChatRoom /> */}
        <Home/>
        {/* <Login /> */}
      </div>
    </ChakraProvider>
  );
}

export default App;
