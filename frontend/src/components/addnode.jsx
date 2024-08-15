import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Input } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { HStack, VStack, Text } from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
import { addData } from "../app/dataslice";
import { changetype } from "../app/typeslice";

const Addnode = () => {
  const dispact = useDispatch();
  const [text, settext] = useState("");
  const generateRandomId = () => {
    const timestamp = Date.now(); // Current timestamp
    const randomNum = Math.floor(Math.random() * 1000000); // Random number between 0 and 999999
    return `id-${timestamp}-${randomNum}`; // Combine timestamp and random number
  };
  const submit = () => {
    console.log("submit");
    console.log(text);
    if (text == "") {
      return;
    }
    const data = {
      id: generateRandomId(),
      type: "custom",
      data: { text: text },
      position: { x: 550, y: 80 },
    };
    dispact(addData([data]));

    settext("");
  };

  const selector = useSelector((state) => state.typereducer.type);
  const [resize, setresize] = useState(false);
  useEffect(() => {
    setresize(selector);
  }, [selector]);

  const handleResizeClick = () => {
    dispact(changetype(!resize))
  };

  return (
    <div className="p-2">
      <HStack spacing={4}>
        <Input
          onChange={(e) => {
            settext(e.target.value);
          }}
          placeholder="Enter Text to Add"
          size="md"
          value={text}
        />
        <Button
          onClick={submit}
          colorScheme="teal"
          width="auto" // Button width adjusts to fit the text
          px={5}
        >
          Add Node
        </Button>
        {!resize ? (
         
          <Button
          onClick={handleResizeClick}
          colorScheme="teal"
          width="auto" // Button width adjusts to fit the text
          px={7}
        >
          <VStack spacing={0} align="center" justify="center">
            <Text fontSize="md">Enable</Text>
            <Text fontSize="md" >
            Resize Node
            </Text>
          </VStack>
        </Button>
        ) : (
          <Button
            onClick={handleResizeClick}
            colorScheme="red"
            width="auto" // Button width adjusts to fit the text
            px={7}
          >
            <VStack spacing={0} align="center" justify="center">
              <Text fontSize="md">Disable</Text>
              <Text fontSize="md" >
              Resize Node
              </Text>
            </VStack>
          </Button>
        )}
      </HStack>
    </div>
  );
};

Addnode.propTypes = {};

export default Addnode;
