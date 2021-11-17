import React, { useContext } from "react";
import { IconButton, Tooltip } from "@chakra-ui/react";
import { Heart } from "react-feather";
import { DispatchContext, AppStateContext } from "store";
import { STORE_KEYS } from "constants/uiConstants";

export default function AddToFavourites({ payload, categoryName }) {
  const AppDispatch = useContext(DispatchContext);
  const AppState = useContext(AppStateContext);

  let isFavourited = false;

  if (AppState.favourites[categoryName] !== undefined) {
    let { data: payloadData } = payload;

    let contentId = payloadData[STORE_KEYS[categoryName]];
    isFavourited = contentId in AppState.favourites[categoryName];
  }

  function addFavourite(event) {
    event.preventDefault();
    event.stopPropagation();

    let actionType = isFavourited ? "removeFavourite" : "addFavourite";

    return AppDispatch({
      type: actionType,
      payload,
    });
  }

  const label = isFavourited ? "Remove from favourites" : "Add to favourites";

  return (
    <Tooltip label={label} placement="top">
      <IconButton
        justifyContent="center"
        icon={
          <Heart
            fill={isFavourited ? "#ED64A6" : "#A0AEC0"}
            color={isFavourited ? "#ED64A6" : "#A0AEC0"}
          />
        }
        onClick={addFavourite}
      />
    </Tooltip>
  );
}
