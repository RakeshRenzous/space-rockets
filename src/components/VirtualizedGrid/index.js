import React from "react";
import { VirtuosoGrid } from "react-virtuoso";
import { ListContainer } from "./styles";

export default function VirtualizedGrid({ items, renderComponent, fetchMore }) {
  return (
    <>
      <VirtuosoGrid
        style={{ height: "calc(100vh - 112px)" }}
        components={{
          List: ListContainer,
        }}
        totalCount={items.length}
        itemContent={renderComponent}
        overscan={6}
        endReached={fetchMore}
      />
    </>
  );
}
