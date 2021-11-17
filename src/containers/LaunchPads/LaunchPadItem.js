import React, { useContext } from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import AddToFavourites from "components/AddToFavourites";
import Badges from "components/Badges";

import { AppStateContext } from "store";
import { STORE_KEYS } from "constants/uiConstants";

export function LaunchPadCard({ content}) {
  const payload = {
    data: content,
    type: 'launchPads'
  };

  const isActive = content.status === "active";
  const badgeLabel = isActive ? "Active" : "Retired";

  return (
    <>
      <Box d="flex" alignItems="baseline">
        <Badges isSuccess={isActive} label={badgeLabel}/>
        <Box
          color="gray.500"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="xs"
          textTransform="uppercase"
          ml="2"
        >
          {content.attempted_launches} attempted &bull;{" "}
          {content.successful_launches} succeeded
        </Box>
      </Box>
      
        <Flex justifyContent='space-between'>
        <Box>
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {content.name}
          </Box>
          <Text color="gray.500" fontSize="sm">
            {content.vehicles_launched.join(", ")}
          </Text>
        </Box>
        <AddToFavourites payload={payload} categoryName='launchPads'/>
      </Flex>
    </>
  )

}

export default function LaunchPadItem({ launchPad }) {
  const AppState = useContext(AppStateContext);
  let isFavourited = false;

  if(AppState.favourites?.launchPads) {
    let launchPadId = launchPad[STORE_KEYS.launchPads];
    isFavourited = launchPadId in AppState.favourites.launchPads;
  }

  return (
    <Box
      as={Link}
      to={`/launch-pads/${launchPad.site_id}`}
      boxShadow="md"
      borderWidth="1px"
      rounded="lg"
      overflow="hidden"
      position="relative"
    >
      <Box p="6">
        <LaunchPadCard content={launchPad}/>
      </Box>
    </Box>
  );
}