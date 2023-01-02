import { EventBoard } from "./EventBoard/EventBoard";
import { PageTitle } from "./Pagetitle/PageTitle";
import events from "./events.json"



export const App = () => {
  return (
    <div>
      <PageTitle text="24th Worlds Coalition Conference"/>
      <EventBoard events= {events}/>
    </div>)
  
};
