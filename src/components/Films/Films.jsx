import React, {useState} from 'react';
import {useQuery} from "react-query";
import {FilmsService} from "../../app/services/films.service";
import {Box} from "@chakra-ui/react";
import CardList from "../CardList/CardList";

const Films = () => {
    const [films, setFilms] = useState([]);

    const {data: response} = useQuery(
        'films',
        () => FilmsService.getAll(),
        {
            onSuccess({data}) {
                setFilms(data)
            }
        }
    )

    return (
        <Box>
            <CardList cards={films}/>
        </Box>
    )
}

export default Films;