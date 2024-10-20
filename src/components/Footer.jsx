import { Avatar, Box, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
const avatarSrc = "https://avatars.githubusercontent.com/u/99816828?v=4";
// const avatarSrc1 = "https://avatars.githubusercontent.com/u/81821995?v=4";
// const avatarSrc2 = "https://avatars.githubusercontent.com/u/142868989?s=400&u=e2c41111bc62b038ec2f24347b0ab55cdc1121ac&v=4";
const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} color={"whiteAlpha.700"} minH={"48"} px={"16"} py={["16", "8"]}>
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text fontSize={"sm"} letterSpacing={"widest"} textAlign={["center", "left"]}>
            We are the best crypto analysis app in India, we provide our guidance
            at a very cheap price.
          </Text>
        </VStack>
        <VStack>
            <HStack>
                <Avatar p={4} boxSize={"28"} mt={["4", "0"]} src={avatarSrc} />
                {/* <Avatar p={4} boxSize={"28"} mt={["4", "0"]} src={avatarSrc1} />
                <Avatar p={4} boxSize={"28"} mt={["4", "0"]} src={avatarSrc2} /> */}
            </HStack>
          <Text>Our Founders</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;