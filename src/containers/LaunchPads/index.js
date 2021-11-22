import React from "react";
import { SimpleGrid } from "@chakra-ui/react";

import Error from "components/error";
import Breadcrumbs from "components/breadcrumbs";
import LoadMoreButton from "components/load-more-button";
import { useSpaceXPaginated } from "utils/use-space-x";
import LaunchPadItem from "./LaunchPadItem";

const PAGE_SIZE = 12;

export default function LaunchPads() {
  const { data, error, isValidating, size, setSize } = useSpaceXPaginated(
    "/launchpads",
    {
      limit: PAGE_SIZE,
    }
  );

  const flattenData = data?.flat();

  return (
    <div>
      <Breadcrumbs
        items={[{ label: "Home", to: "/" }, { label: "Launch Pads" }]}
      />

      <SimpleGrid m={[2, null, 6]} minChildWidth="350px" spacing="4">
        {error && <Error />}
        {data &&
          flattenData.map((launchPad) => (
            <LaunchPadItem key={launchPad.site_id} launchPad={launchPad} />
          ))}
      </SimpleGrid>

      <LoadMoreButton
        loadMore={() => setSize(size + 1)}
        data={data}
        pageSize={PAGE_SIZE}
        isLoadingMore={isValidating}
      />
    </div>
  );
}
