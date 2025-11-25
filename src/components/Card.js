import { Heading, HStack, Box, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box backgroundColor="white" color="black" borderRadius="10px">
      <VStack>
        <Image src={imageSrc} borderRadius="10px" />
        <VStack align="flex-start" padding="15px 35px 15px 15px">
          <Heading size="sm">{title}</Heading>
          <Text color="#696969">{description}</Text>
          <HStack>
            <Text>See more</Text>
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Card;
