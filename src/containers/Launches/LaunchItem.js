import React, { useContext } from "react";
import { Box, Image, Text, Flex } from "@chakra-ui/react";
import { format as timeAgo } from "timeago.js";
import { Link } from "react-router-dom";

import { formatDate } from "utils/format-date";
import AddToFavourites from "components/AddToFavourites";
import { AppStateContext } from "store";
import { STORE_KEYS } from "constants/uiConstants";
import Badges from "components/Badges";

export function LaunchCard({ content }) {
  const payload = {
    data: content,
    type: 'launches'
  };

  const badgeLabel = content.launch_success  ? "Successful" : "Failed";

  return (
    <>
      <Box>
        <Box d="flex" alignItems="baseline">
          <Badges isSuccess={content.launch_success} label={badgeLabel}/>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {content.rocket.rocket_name} &bull; {content.launch_site.site_name}
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
              {content.mission_name}
            </Box>
            <Flex>
              <Text fontSize="sm">{formatDate(content.launch_date_utc)} </Text>
              <Text color="gray.500" ml="2" fontSize="sm">
                {timeAgo(content.launch_date_utc)}
              </Text>
            </Flex>
          </Box>
          
          <AddToFavourites payload={payload} categoryName='launches'/>
        </Flex>
      </Box>

    </>
  )
}

export default function LaunchItem({ launch }) {
  const AppState = useContext(AppStateContext);
  let isFavourited = false;

  if(AppState.favourites?.launches) {
    let launchId = launch[STORE_KEYS.launches];
    isFavourited = launchId in AppState.favourites.launches;
  }

  return (
    <Box
      as={Link}
      to={`/launches/${launch.flight_number.toString()}`}
      boxShadow="md"
      borderWidth="1px"
      rounded="lg"
      overflow="hidden"
      position="relative"
    >
      <Image
        src={
          launch.links.flickr_images[0]?.replace("_o.jpg", "_z.jpg") ??
          launch.links.mission_patch_small
        }
        alt={`${launch.mission_name} launch`}
        height={["200px", null, "300px"]}
        width="100%"
        objectFit="cover"
        objectPosition="bottom"
      />

      <Image
        position="absolute"
        top="5"
        right="5"
        src={launch.links.mission_patch_small}
        height="75px"
        objectFit="contain"
        objectPosition="bottom"
      />

      <Box p="6">
        <LaunchCard content={launch} isFavourited={isFavourited}/>
      </Box>
    </Box>
  );
}

