import React from 'react';

import Home from "components/home";

import LaunchPads from "components/launch-pads";
import LaunchPad from "components/launch-pad";

import Launches from 'containers/LaunchesListPage';
import Launch from 'components/launch';

export default [
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/launches',
    element: <Launches/>
  },
  {
    path: '/launches/:launchId',
    element: <Launch/>
  },
  {
    path: '/launch-pads',
    element: <LaunchPads/>
  },
  {
    path: '/launch-pads/:launchPadId',
    element: <LaunchPad/>
  }
]