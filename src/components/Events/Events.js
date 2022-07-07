import React from 'react';

import {useRecoilState} from "recoil";
import {useRecoilValue} from 'recoil';
import {EventsAtomState} from "../../state";
import {Stack} from '@chakra-ui/react';
import CardList from "../CardList/CardList";
import FormEvents from "../FormEvents/FormEvents";

const Events = () => {
    const events = useRecoilValue(EventsAtomState);
    const [eventsState, setEventsState] = useRecoilState(EventsAtomState);
    
    function deleteEvent(id) {
        const newEvents = eventsState.filter(event => event.id !== id);
        setEventsState(newEvents);
    }

    return (
        <Stack>
            <CardList cards={events} delete={true} deleteEvent={deleteEvent} />
            <FormEvents />
        </Stack>
    )
}

export default Events;