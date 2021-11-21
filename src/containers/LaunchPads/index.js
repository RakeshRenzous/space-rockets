import React from "react";
import { SimpleGrid } from "@chakra-ui/react";

import Error from "components/error";
import Breadcrumbs from "components/breadcrumbs";
import LoadMoreButton from "components/load-more-button";
import { useSpaceXPaginated } from "utils/use-space-x";
import LaunchPadItem from "./LaunchPadItem";

import { VariableSizeGrid } from 'react-window';
import InfiniteLoader from "react-window-infinite-loader";

const PAGE_SIZE = 12;

export default function LaunchPads() {
  const { data, error, isValidating, size, setSize } = useSpaceXPaginated(
    "/launchpads",
    {
      limit: PAGE_SIZE,
    }
  );

  const flattenData = data?.flat();

  const Item = ({ columnIndex, rowIndex, style }) => {

    let index = (rowIndex * 2) + columnIndex;
    let content = flattenData[index];

    console.log('in heres', content, flattenData, index, style)

    return  <LaunchPadItem style={style} key={content.site_id} launchPad={content} />
  };


  return (
    <div>
      <Breadcrumbs
        items={[{ label: "Home", to: "/" }, { label: "Launch Pads" }]}
      />

      {flattenData && 

        <VariableSizeGrid
          columnCount={3}
          className="List"
          height={120}
          rowHeight={() => 120}
          rowCount={Math.floor(flattenData.length/3)}
          columnWidth={() => 350}
          width={4000}
        >
          {Item}
        </VariableSizeGrid>

}

      {/* <SimpleGrid m={[2, null, 6]} minChildWidth="350px" spacing="4">
        {error && <Error />}
        {data &&
          flattenData
            .map((launchPad) => (
              <LaunchPadItem key={launchPad.site_id} launchPad={launchPad} />
            ))}
      </SimpleGrid> */}


      <LoadMoreButton
        loadMore={() => setSize(size + 1)}
        data={data}
        pageSize={PAGE_SIZE}
        isLoadingMore={isValidating}
      />
    </div>
  );
}
