import { FaMapMarkerAlt,FaUserAlt,FaCalendarAlt,FaClock } from 'react-icons/fa';
import PropTypes from "prop-types"
import {formatEventDuration,formatEventStart} from 'utills';
import {iconSize} from "constans";
import { CardWrapper,EventName,Info,Chip } from './Event.styled';




export const Event =({name,location,speaker,type,start,end})=>{

    const formatedTimeStart=formatEventStart(start);
    const formatDuration=formatEventDuration(start,end);


   return <CardWrapper>
<EventName>{name}</EventName>

<Info>
    <FaMapMarkerAlt size={iconSize.sm}/>
    {location}
</Info>

<Info>
<FaUserAlt size={iconSize.sm}/>
    {speaker}</Info>

<Info>
<FaCalendarAlt size={iconSize.sm}/>
    {formatedTimeStart}</Info>

<Info>
<FaClock size={iconSize.sm}/>
   {formatDuration}
</Info>
<Chip  eventType={type}>{type}</Chip>
</CardWrapper>
}

Event.propTypes={
    name:PropTypes.string.isRequired,
    location:PropTypes.string.isRequired,
    speaker:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    time:PropTypes.exact({
        start:PropTypes.string.isRequired,
        end:PropTypes.string.isRequired
    })
}