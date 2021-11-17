import React from "react";
import { Badge } from "@chakra-ui/react";

const COLOR_SCHEME = {
  success: "green",
  failure: "red",
};

export default function Badges({ isSuccess, label }) {
  let colorScheme = isSuccess ? COLOR_SCHEME.success : COLOR_SCHEME.failure;

  return (
    <Badge px="2" variant="solid" colorScheme={colorScheme}>
      {label}
    </Badge>
  );
}
