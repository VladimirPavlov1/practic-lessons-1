import css from "./EventBoard.module.css"

export const EventBoard=({events})=>{
    return <div className={css.eventBoard}>
        {events.map(event=><div key="{event.id}">
            {event.name}
        </div>)}</div>
};