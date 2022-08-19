import { Box, Button, Flex, Heading, Stack } from "@chakra-ui/react";
import { useCallback, useMemo, useState } from "react";
import { FooterMemo } from "./footer";

function App() {
  const [count, setCount] = useState(0);

  console.log("Renderizou o App...");

  //quando um estado é alterado
  //quando uma propriedade é alterada
  //quando o component pai é alterado

  const color = useMemo(() => {
    return { cor: "red" };
  }, []);

  const handleAlert = useCallback(() => {
    alert("Hello World!!!");
  }, []);

  return (
    <Box w="100vw" h="100vh" bg="gray.50">
      <Flex h="90vh" justify="center" align="center">
        <Stack spacing={2} direction="column">
          <Heading>{count}</Heading>
          <Button
            colorScheme="green"
            onClick={() => setCount((prev) => prev + 1)}
          >
            Increment
          </Button>
          <Button
            colorScheme="red"
            onClick={() => setCount((prev) => prev - 1)}
          >
            Decrement
          </Button>
        </Stack>
      </Flex>
      <FooterMemo color={color} onClick={handleAlert} />
    </Box>
  );
}

export default App;
