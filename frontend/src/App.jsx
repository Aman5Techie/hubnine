import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Input } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { HStack, VStack } from "@chakra-ui/react";
import Flow from "./components/flow";
import ShowTxt from "./components/showtxt";
import Addnode from "./components/addnode";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <VStack>
        <div className="p-5">
          <HStack>
            <Addnode/>
          </HStack>
        </div>
        <div className="">
          <Flow />
        </div>
      </VStack>
    </>
  );
}

export default App;
