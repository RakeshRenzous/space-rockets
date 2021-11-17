export default function getUrl(content, category) {
  if (content === undefined) {
    return;
  }

  switch (category) {
    case "launches":
      return `/launches/${content.flight_number.toString()}`;
    case "launchPads":
      return `/launch-pads/${content.site_id}`;
    default:
      return "";
  }
}
