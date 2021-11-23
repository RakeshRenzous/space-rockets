export const STORE_KEYS = {
  launches: "flight_number",
  launchPads: "site_id",
};

export const CATEGORY_MAP = {
  launches: "Launches",
  launchPads: "Launch Pads",
};

export const LAUNCH_SORT_KEYS = {
  recent_launch: {
    sort: "launch_date_utc",
    order: "desc",
  },
  oldest_launch: {
    sort: "launch_date_utc",
    order: "asc",
  },
  name: {
    sort: "mission_name",
    order: "asc",
  },
};
