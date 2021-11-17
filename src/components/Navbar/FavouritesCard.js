import React from "react";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { LaunchCard } from "containers/Launches/LaunchItem";
import { LaunchPadCard } from "containers/LaunchPads/LaunchPadItem";
import getUrl from "utils/getUrls";

export default function FavouritesCard({ cardData, category, cbFunc }) {
  function renderCard() {
    switch (category) {
      case 'launches':
        return <LaunchCard content={cardData} isFavourited={true}/>
      case 'launchPads':
        return <LaunchPadCard content={cardData} isFavourited={true}/>
      default:
        break;
    }
  }

  return (
    <Box 
    p="3"
    d="flex"
    as={Link}
    onClick={cbFunc}
    to={getUrl(cardData, category)}
    flexDirection='column'
    mb='4'
    borderWidth="1px"
    rounded="md"
    overflow="hidden"
    position="relative">
      {renderCard()}
    </Box>
  )
}

