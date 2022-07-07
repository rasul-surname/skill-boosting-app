import React from "react";
import {SimpleGrid, Stack, Heading, Image, Button, Text} from "@chakra-ui/react";

const CardList = props => {
    const {cards = []} = props;

    return (
        <SimpleGrid columns={[1, null, 2, 3]} spacing={[4, null, 6]} py="4">
            {cards.map(card => (
                <Stack key={card.title} spacing={4} _hover={{shadow: 'md'}} p="2" border="1px solid #ccc">
                    <Heading as="h3" noOfLines={1} size='lg'>{card.title}</Heading>
                    {card.img && <Image src={card.img} alt="" height="200px" objectFit="cover" />}
                    <Text fontSize='lg'>{card.body}</Text>
                    {card.price && <Text as='b'>{card.price} ₽</Text>}
                    <Button as="a" variant="outline">Подробнее</Button>
                    {props.delete && <Button as="a" variant="outline" onClick={() => props.deleteEvent(card.id)}>Удалить</Button>}
                </Stack>
            ))}
        </SimpleGrid>
    )
}

export default CardList;