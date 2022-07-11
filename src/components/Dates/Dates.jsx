import React from 'react';
import {SimpleGrid, Box, Center, Heading} from "@chakra-ui/react";
import {format, add} from 'date-fns';
import ru from 'date-fns/locale/ru';

const today = format(new Date(), "eeee", {locale: ru});
const year = format(new Date(), "yyyy", {locale: ru});
const month = format(new Date(), "MMMM", {locale: ru});
const time = format(new Date(), "hh:mm:ss", {locale: ru});

const todayTomorrow = format(add(new Date(), {days: 1}), "eeee", {locale: ru});
const yearTomorrow = format(add(new Date(), {days: 1}), "yyyy", {locale: ru});
const monthTomorrow = format(add(new Date(), {days: 1}), "MMMM", {locale: ru});

// Агрументы для передачи в add функцию
// days
// weeks
// months
// years
// hours
// minutes
// seconds

const Dates = () => {

    return (
        <Box>
            <Center h='80px'>
                <Heading>Сегодня</Heading>
            </Center>
            <SimpleGrid columns={[2, null, 4]} spacing='40px'>
                <Center h='80px' bg='tomato'>
                    День недели: {today}
                </Center>
                <Center h='80px' bg='tomato'>
                    Год: {year}
                </Center>
                <Center h='80px' bg='tomato'>
                    Месяц: {month}
                </Center>
                <Center h='80px' bg='tomato'>
                    Время: {time}
                </Center>
            </SimpleGrid>
            <Center h='80px'>
                <Heading>Завтра</Heading>
            </Center>
            <SimpleGrid columns={[2, null, 4]} spacing='40px'>
                <Center h='80px' bg='tomato'>
                    День недели: {todayTomorrow}
                </Center>
                <Center h='80px' bg='tomato'>
                    Год: {yearTomorrow}
                </Center>
                <Center h='80px' bg='tomato'>
                    Месяц: {monthTomorrow}
                </Center>
            </SimpleGrid>
        </Box>
    )
}

export default Dates;