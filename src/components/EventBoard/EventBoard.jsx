import PropTypes from "prop-types"
import { Event } from "components/Event/Event";
import { Container } from "components/EventBoard/EventBoard.styled";





export const EventBoard=({events})=>{
    return <Container>
        {events.map(({name,location,speaker,type,time})=><Event key={name}  name={name} location={location} speaker={speaker} type={type} start={time.start} end={time.end}>
            </Event>)}
    </Container>
};






EventBoard.propTypes={
    events:PropTypes.arrayOf(
        PropTypes.exact({
            name:PropTypes.string,
            location: PropTypes.string,
            speaker: PropTypes.string,
            type: PropTypes.string,
            time:PropTypes.exact( {
              start:PropTypes.string,
              end:PropTypes.string   
        })})
    ).isRequired,
}