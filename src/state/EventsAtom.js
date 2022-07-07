import { atom } from 'recoil';

export const EventsAtomState = atom({
    key: 'EventsAtomState',
    default: [
        {
            id: 1,
            title: 'Пятничный бар',
            body: 'Тимбилдинг'
        },
        {
            id: 2,
            title: 'Кино',
            body: 'Посиделки'
        }
    ]
})