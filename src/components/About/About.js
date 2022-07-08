import React from "react";
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

    // react-query
    const {isLoading, data: response, error, status} = useQuery("Employees List", () => EmployeesService.getAll());

    return (
        <Box>
            {isLoading ?
                <Box>Загрузка...</Box>
                :
                response?.data.length ?
                    <CardList cards={response.data}/>
                    :
                    <Box>Список не найден</Box>
            }
        </Box>
    )
}

export default About;