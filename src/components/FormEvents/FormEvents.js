import React from "react";
import {v4 as uuid} from 'uuid';
import {Formik} from "formik";

import {useSetRecoilState} from "recoil";
import {EventsAtomState} from "../../state";

import {
    FormControl,
    FormLabel,
    Input,
    Button,
    SimpleGrid,
    Box
} from '@chakra-ui/react';

const FormEvents = () => {
    const setEvents = useSetRecoilState(EventsAtomState);

    return (
        <FormControl isRequired style={{border: '1px solid #ccc', padding: '30px'}}>
            <Formik
                initialValues={{title: '', body: '', price: ''}}
                onSubmit={(values) => {
                    const {title, body, price} = values;

                    if (!!title.length && !!body.length && !!price.length) {
                        setEvents((oldEvents) => {
                            return [
                                ...oldEvents,
                                {
                                    id: uuid(),
                                    title: title,
                                    body: body,
                                    price: price
                                }
                            ]
                        });

                        values.title = "";
                        values.body = "";
                        values.price = "";
                    }
                }}
            >
                {({
                      values,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                  }) => (
                    <form onSubmit={handleSubmit}>
                        <SimpleGrid columns={[1, null, 2, 3]} spacing={[4, null, 6]} py="8">
                            <Box>
                                <FormLabel htmlFor='first-name'>Название мероприятия</FormLabel>
                                <Input
                                    type="text"
                                    name="title"
                                    placeholder='Куда идём?'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.title}
                                />
                            </Box>
                            <Box>
                                <FormLabel htmlFor='first-name'>Название мероприятия</FormLabel>
                                <Input
                                    type="text"
                                    name="body"
                                    placeholder='Что там делать?'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.body}
                                />
                            </Box>
                            <Box>
                                <FormLabel htmlFor='first-name'>Название мероприятия</FormLabel>
                                <Input
                                    type="text"
                                    name="price"
                                    placeholder='Сколько необходимо собрать?'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.price}
                                />
                            </Box>
                        </SimpleGrid>
                        <Button type="submit" colorScheme='blue' onClick={handleSubmit}>Создать мероприятие</Button>
                    </form>
                )}
            </Formik>
        </FormControl>
    )
}

export default FormEvents;