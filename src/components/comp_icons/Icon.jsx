import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Icon = ( {icon}) =>{
    return(
        <FontAwesomeIcon className='icon' icon={icon} />
    )
}