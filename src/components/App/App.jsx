import { EventBoard } from "../EventBoard/EventBoard";
import { PageTitle } from "../Pagetitle/PageTitle";
import events from "../events.json"
import { Painting } from "../Painting/Painting";
import painting from "../painting.json";
import { Container } from "./App.styled";




export const App = () => {
  return (
  
      <Container>
          <PageTitle text="24th Worlds Coalition Conference"/>
          <EventBoard events= {events}/>
          {painting.map(paint=><Painting 
          key={paint.title}
          imageUrl={paint.url}
          title={paint.title}
          price={paint.price}
          authorPhoto={paint.author.url}
          authorName={paint.author.tag}
          quantity={paint.quantity}
          />)}
        </Container>

    )
  
};
