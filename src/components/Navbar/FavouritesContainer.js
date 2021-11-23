import React, { useState, useContext } from "react";
import { AppStateContext } from "store";
import { Button, Box } from "@chakra-ui/react";
import FavouritesCard from "./FavouritesCard";
import { CATEGORY_MAP } from "constants/uiConstants";

export default function FavouritesContainer({ favCb }) {
  const AppState = useContext(AppStateContext);

  const { favourites } = AppState;
  let categories = Object.entries(favourites);
  let categoryNames = Object.keys(favourites);

  const [activeCategory, setCategory] = useState(categoryNames[0]);

  // Empty state
  if (categories.length === 0) {
    return (
      <p>
        You haven't added any favourites yet. Add more favourites by clicking on
        the heart icon to view them here.
      </p>
    );
  }

  if (favourites[activeCategory] === undefined) {
    setCategory(categoryNames[0]);
  }

  return (
    <>
      <Box mb="4" mt="4">
        {categories.map((category, index) => {
          let [categoryName, categoryList] = category;

          return (
            <Button
              size="sm"
              variant="outline"
              marginRight="2"
              key={index}
              isActive={activeCategory === categoryName}
              onClick={() => {
                setCategory(categoryName);
              }}
            >
              {`${CATEGORY_MAP[categoryName]} (${
                Object.keys(categoryList).length
              })`}
            </Button>
          );
        })}
      </Box>

      {favourites[activeCategory] &&
        Object.values(favourites[activeCategory]).map(
          (categoryContent, index) => {
            return (
              <FavouritesCard
                cardData={categoryContent}
                key={index}
                category={activeCategory}
                cbFunc={favCb}
              />
            );
          }
        )}
    </>
  );
}
