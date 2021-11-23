import React from "react";
import {
  Flex,
  Text,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import FavouritesContainer from "./FavouritesContainer";

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        paddingX="6"
        paddingY="4"
        bg="gray.800"
        color="white"
        position="fixed"
        width="100%"
        zIndex="100"
        top="0"
      >
        <Link to={"/"}>
          <Text
            fontFamily="mono"
            letterSpacing="2px"
            fontWeight="bold"
            fontSize="lg"
          >
            ¡SPACE·R0CKETS!
          </Text>
        </Link>
        <Button colorScheme="teal" onClick={onOpen}>
          Favourites
        </Button>
      </Flex>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="sm">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton size="sm" />
          <DrawerHeader borderBottomWidth="1px">Favourites</DrawerHeader>

          <DrawerBody>
            <FavouritesContainer favCb={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
