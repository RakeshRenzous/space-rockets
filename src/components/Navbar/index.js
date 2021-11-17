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
  useDisclosure
} from "@chakra-ui/react"

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
        padding="6"
        bg="gray.800"
        color="white"
      >
        <Text
          fontFamily="mono"
          letterSpacing="2px"
          fontWeight="bold"
          fontSize="lg"
        >
          ¡SPACE·R0CKETS!
        </Text>
        <Button colorScheme="teal" onClick={onOpen}>
          Favourites
        </Button>
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
        <DrawerCloseButton size='sm'/>
        <DrawerHeader borderBottomWidth="1px">Favourites</DrawerHeader>

        <DrawerBody>
          <FavouritesContainer favCb={onClose}/>
        </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}