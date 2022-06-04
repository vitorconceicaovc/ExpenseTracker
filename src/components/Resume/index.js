import React from 'react'
import ResumeItem from '../ResumeItem'
import * as C from "./styles"
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
} from "react-icons/fa"

const Resume = () => {
  return (
    <C.Container>
        <ResumeItem title="Flows" Icon={FaRegArrowAltCircleUp} value="6000"/>
        <ResumeItem title="Outflows" Icon={FaRegArrowAltCircleDown} value="2000"/>
        <ResumeItem title="Total" Icon={FaDollarSign} value="4000"/>
        
    </C.Container>
  )
}

export default Resume