import { atom } from 'recoil';

export const ListEmployeesState = atom({
    key: 'ListEmployeesState',
    default: [
        {
            id: 1,
            title: 'Серёжа',
            body: 'Начальник фронта',
            img: 'https://yesno.wtf/assets/yes/12-e4f57c8f172c51fdd983c2837349f853.gif'
        },
        {
            id: 2,
            title: 'Паша',
            body: 'Фронтендщик',
            img: 'https://yesno.wtf/assets/no/20-56c4b19517aa69c8f7081939198341a4.gif'
        },
        {
            id: 3,
            title: 'Гусейн',
            body: 'Техдир',
            img: 'https://yesno.wtf/assets/yes/4-c53643ecec77153eefb461e053fb4947.gif'
        },
        {
            id: 4,
            title: 'Оля',
            body: 'Аналитик',
            img: 'https://yesno.wtf/assets/yes/0-c44a7789d54cbdcad867fb7845ff03ae.gif'
        },
        {
            id: 5,
            title: 'Новиков',
            body: 'Начальник отдела',
            img: 'https://yesno.wtf/assets/no/19-2062f4c91189b1f88a9e809c10a5b0f0.gif'
        },
        {
            id: 6,
            title: 'Артёмка',
            body: 'Бэкендщик',
            img: 'https://yesno.wtf/assets/yes/14-b57c6dc03aa15a4b18f53eb50d6197ee.gif'
        }
    ],
});