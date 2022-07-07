import React from "react";

import {useRecoilValue} from "recoil";
import {ListEmployeesState} from "../../state";

import CardList from "../CardList/CardList";

const About = () => {
    const ListEmployees = useRecoilValue(ListEmployeesState);


    return (
        <CardList cards={ListEmployees}/>
    )
}

export default About;