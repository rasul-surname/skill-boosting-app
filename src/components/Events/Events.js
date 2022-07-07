import React from 'react';

import {useRecoilValue} from 'recoil';
import {EventsAtomState} from "../../state";
import {Stack} from '@chakra-ui/react';
import CardList from "../CardList/CardList";
import FormEvents from "../FormEvents/FormEvents";

const Events = () => {
    const Events = useRecoilValue(EventsAtomState)

    return (
        <Stack>
            <CardList cards={Events}/>
            <FormEvents />
        </Stack>
    )
}

export default Events;