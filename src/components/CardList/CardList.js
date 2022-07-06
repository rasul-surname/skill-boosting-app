import React from "react";
import {SimpleGrid, Stack, Heading, Button, Text} from "@chakra-ui/react";

const CardList = props => {
    const {cards = []} = props;

    return (
        <SimpleGrid columns={[1, null, 2, 3]} spacing={[4, null, 6]} py="4">
            {cards.map(card => (
                <Stack key={card.title} spacing={4} _hover={{shadow: 'md'}} p="2">
                    <Heading as="h3" noOfLines={1}>{card.title}</Heading>
                    <Text>{card.body}</Text>
                    <Button as="a" variant="outline">Read More</Button>
                </Stack>
            ))}
        </SimpleGrid>
    )
}

export default CardList;