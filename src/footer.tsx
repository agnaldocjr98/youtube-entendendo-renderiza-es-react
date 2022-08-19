import { memo } from "react";
import { Box, Button } from "@chakra-ui/react";

function Footer({
  color,
  onClick,
}: { color: { cor: string } } & { onClick(): void }) {
  console.log("Renderizou o Footer...");
  return (
    <Box bg={color.cor} w="100%" h="10vh">
      <span>FOOTER</span>
      <Button colorScheme="green" onClick={onClick}>
        CLICK
      </Button>
    </Box>
  );
}

export const FooterMemo = memo(Footer);
