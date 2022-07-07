import {
    FormControl,
    FormLabel,
    Input,
    Button, SimpleGrid, Box
} from '@chakra-ui/react';

import {useSetRecoilState} from "recoil";
import {EventsAtomState} from "../../state";
import React, {useState} from "react";

const FormEvents = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [price, setPrice] = useState('');

    const setEvents = useSetRecoilState(EventsAtomState);

    function handleSubmit() {
        if(!!title.length && !!body.length && !!price.length) {
            setEvents((oldEvents) => {
                return [
                    ...oldEvents,
                    {
                        id: 4,
                        title: title,
                        body: body,
                        price: price
                    }
                ]
            });

            setTitle('');
            setBody('');
            setPrice('');
        }
    }

    return (
        <FormControl isRequired>
            <SimpleGrid columns={[1, null, 2, 3]} spacing={[4, null, 6]} py="8">
                <Box>
                    <FormLabel htmlFor='first-name'>Название мероприятия</FormLabel>
                    <Input
                        id='first-name'
                        placeholder='Куда идём?'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Box>
                <Box>
                    <FormControl isRequired>
                        <FormLabel htmlFor='body'>Описание мероприятия</FormLabel>
                        <Input
                            id='body'
                            placeholder='Что там делать?'
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                        />
                    </FormControl>
                </Box>
                <Box>
                    <FormLabel htmlFor='price'>Стоимость мероприятия</FormLabel>
                    <Input
                        id='body'
                        placeholder='Сколько необходимо собрать?'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </Box>
            </SimpleGrid>
            <Button colorScheme='blue' onClick={handleSubmit}>Создать мероприятие</Button>
        </FormControl>
    )
}

export default FormEvents;