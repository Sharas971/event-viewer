import type { Route } from "./+types/EventDetails";
import type { IEvent } from "~/types/types";
import { CytoscapeGraph } from "~/components/CytoscapeGraph/CytoscapeGraph";
import { EventItem } from "~/components/EventItem/EventItem";

export async function loader({ params }: Route.LoaderArgs) {
  const eventId = params.id;
  try {
    const res = await fetch(`http://localhost:3001/api/v1/events/${eventId}`);
    return await res.json();
  } catch (error) {
    if (typeof error === "string") {
      console.error(error);
    } else if (error instanceof Error) {
      console.error(error.message);
    } else {
      throw error;
    }
  }
}

interface EventDetailsProps {
  loaderData: IEvent;
}

export default function EventDetails({ loaderData }: EventDetailsProps) {
  return (
    <>
      <EventItem event={loaderData} />
      {loaderData?.graph && loaderData?.graph.length > 0 && (
        <CytoscapeGraph graphData={loaderData?.graph} />
      )}
    </>
  );
}
