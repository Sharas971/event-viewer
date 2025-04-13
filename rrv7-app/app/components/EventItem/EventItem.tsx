import { useNavigate } from "react-router";
import { CtaButton } from "../Button/CtaButton";
import type { IEventData } from "~/types/types";
import { NOT_AVAILABLE } from "~/settings/constants";
import s from "./EventItem.module.scss";

interface EventItemProps {
  event: IEventData;
  showEventLink?: boolean;
}

export const EventItem = ({ event, showEventLink = false }: EventItemProps) => {
  const navigate = useNavigate();

  const handleNavigate = (link: string) => {
    navigate(link);
  };

  return (
    <div className={s.event}>
      <div className={s.data}>
        <p>
          <b>Event ID:</b> {event?.id || NOT_AVAILABLE}
        </p>
        <p>
          <b>Timestamp:</b> {event?.timestamp || NOT_AVAILABLE}
        </p>
        <p>
          <b>Type:</b> {event?.type || NOT_AVAILABLE}
        </p>
        <p>
          <b>Summary:</b> {event?.summary || NOT_AVAILABLE}
        </p>
      </div>
      {showEventLink && (
        <CtaButton
          onClick={() => handleNavigate(`/events/${event?.id}`)}
          text="Details"
        />
      )}
    </div>
  );
};
