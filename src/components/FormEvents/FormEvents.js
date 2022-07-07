import {
    FormControl,
    FormLabel,
    Input,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Center,
    Heading,
    Button
} from '@chakra-ui/react';

const FormEvents = () => {

    return (
        <FormControl isRequired>
            <Heading>Создать мероприятие ↓↓↓</Heading>
            <Center height="30px"></Center>
            <FormLabel htmlFor='first-name'>Название места</FormLabel>
            <Input id='first-name' placeholder='Одним словом опишите куда идём'/>
            <Center height="20px"></Center>
            <FormLabel htmlFor='amount'>Сколько необходимо собрать?</FormLabel>
            <NumberInput max={5000} min={500}>
                <NumberInputField id='amount' placeholder='Минимум 500 - Максимум 5000' />
                <NumberInputStepper>
                    <NumberIncrementStepper/>
                    <NumberDecrementStepper/>
                </NumberInputStepper>
            </NumberInput>
            <Center height="20px"></Center>
            <FormControl isRequired>
                <FormLabel htmlFor='body'>Описание мероприятия</FormLabel>
                <Input id='body' placeholder='В свободной форме опишите что это за мероприятие' />
            </FormControl>
            <Center height="20px"></Center>
            <Button colorScheme='blue'>Создать мероприятие</Button>
        </FormControl>
    )
}

export default FormEvents;