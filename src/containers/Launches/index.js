import React, { useState, useContext } from "react";
import { Select, Flex } from "@chakra-ui/react";

import { useSpaceXPaginated } from "utils/use-space-x";
import Error from "components/error";
import Breadcrumbs from "components/breadcrumbs";
import LaunchItem from "./LaunchItem";
import VirtualizedGrid from "components/VirtualizedGrid";
import { LAUNCH_SORT_KEYS } from "constants/uiConstants";
import { DispatchContext } from "store";

import { useSearchParams } from "react-router-dom";

const PAGE_SIZE = 12;

export default function Launches() {
  const AppDispatch = useContext(DispatchContext);

  const [searchParams, setSearchParams] = useSearchParams();
  let intialSortVal = "recent_launch";

  if (!searchParams.get("sort")) {
    setSearchParams({ sort: "recent_launch" });
  } else {
    intialSortVal = searchParams.get("sort");
  }

  const [sortValue, setSort] = useState(LAUNCH_SORT_KEYS[intialSortVal]);

  const { data, error, isValidating, setSize, size } = useSpaceXPaginated(
    "/launches/past",
    {
      limit: PAGE_SIZE,
      ...sortValue,
    }
  );

  const flattenData = data?.flat();

  function handleChange(event) {
    let { target } = event;

    setSort(LAUNCH_SORT_KEYS[target.value]);
    setSearchParams({ sort: target.value });

    return AppDispatch({
      type: "setSort",
      payload: {
        type: "launches",
        data: target.value,
      },
    });
  }

  const Item = (index) => {
    let content = flattenData[index];
    return <LaunchItem key={content.flight_number} launch={content} />;
  };

  const currSortKey = searchParams.get("sort");

  return (
    <>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        position="sticky"
        top="0"
        zIndex="50"
        bgColor="white"
        boxShadow="0 4px 10px rgb(0 0 0 / 12%)"
      >
        <Breadcrumbs
          items={[{ label: "Home", to: "/" }, { label: "Launches" }]}
        />
        <Select
          value={currSortKey}
          width="15%"
          size="sm"
          onChange={handleChange}
          mr="6"
        >
          <option value="recent_launch">Recent launch</option>
          <option value="oldest_launch">Oldest launch</option>
          <option value="name">Name</option>
        </Select>
      </Flex>

      {error && <Error />}

      {flattenData && (
        <VirtualizedGrid
          renderComponent={Item}
          items={flattenData}
          isLoading={isValidating}
          fetchMore={() => setSize(size + 1)}
        />
      )}
    </>
  );
}
