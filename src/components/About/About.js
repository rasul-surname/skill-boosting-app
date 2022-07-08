import React, {useState} from "react";
// react-query
import {useQuery} from "react-query";
import {EmployeesService} from "../../app/services/employees.service";

// recoil
import {useRecoilValue} from "recoil";
import {ListEmployeesState} from "../../state";

import CardList from "../CardList/CardList";
import {Box} from "@chakra-ui/react";

const About = () => {
    // recoil
    const ListEmployees = useRecoilValue(ListEmployeesState);

    const [employees, setEmployees] = useState([]);

    // react-query
    const {isLoading, data: response, error, status} = useQuery(
        "Employees List",
        () => EmployeesService.getAll(),
        {
            onSuccess: ({data}) => {
                setEmployees(data);
            },
            onError: (error) => {
                alert('Ошибка')
            },
            // Трансформация data
            // select: ({data}) => data.map(eployee => ({
            //         ...eployee,
            //         body: 'Статус: ' + eployee.body
            //     })
            // )
        }
    );

    return (
        <Box>
            {isLoading ?
                <Box>Загрузка...</Box>
                :
                response?.data.length ?
                    <CardList cards={employees}/>
                    :
                    <Box>Список не найден</Box>
            }
        </Box>
    )
}

export default About;