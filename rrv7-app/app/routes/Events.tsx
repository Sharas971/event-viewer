import type { IEventData } from "~/types/types";
import { EventItem } from "~/components/EventItem/EventItem";
import { NOT_AVAILABLE } from "~/settings/constants";
import s from "../styles/routes.module.scss";

export async function loader() {
  try {
    const res = await fetch(`http://localhost:3001/api/v1/events/`);
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

interface EventsProps {
  loaderData: IEventData[];
}

export default function Events({ loaderData }: EventsProps) {
  return (
    <>
      <h2 className={s.text}>Events:</h2>
      {loaderData && loaderData.length > 0 ? (
        loaderData?.map((item) => (
          <EventItem key={item?.id} event={item} showEventLink />
        ))
      ) : (
        <p className={s.text}>{NOT_AVAILABLE}</p>
      )}
    </>
  );
}
