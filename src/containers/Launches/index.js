import React from "react";
import { useSpaceXPaginated } from "utils/use-space-x";
import Error from "components/error";
import Breadcrumbs from "components/breadcrumbs";
import LaunchItem from "./LaunchItem";
import VirtualizedGrid from "components/VirtualizedGrid";

const PAGE_SIZE = 12;

export default function Launches() {
  const { data, error, isValidating, setSize, size } = useSpaceXPaginated(
    "/launches/past",
    {
      limit: PAGE_SIZE,
      order: "desc",
      sort: "launch_date_utc",
    }
  );

  const flattenData = data?.flat();

  const Item = (index) => {
    let content = flattenData[index];
    return <LaunchItem key={content.flight_number} launch={content} />;
  };

  return (
    <>
      <Breadcrumbs
        items={[{ label: "Home", to: "/" }, { label: "Launches" }]}
      />

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
