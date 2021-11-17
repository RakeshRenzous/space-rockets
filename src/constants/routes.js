import React from "react";

import Home from "components/home";

import LaunchPads from "containers/LaunchPads";
import LaunchPad from "containers/LaunchPads/Details";

import Launches from "containers/Launches";
import Launch from "containers/Launches/Details";

export default [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/launches",
    element: <Launches />,
  },
  {
    path: "/launches/:launchId",
    element: <Launch />,
  },
  {
    path: "/launch-pads",
    element: <LaunchPads />,
  },
  {
    path: "/launch-pads/:launchPadId",
    element: <LaunchPad />,
  },
];
