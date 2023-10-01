import React from 'react'
import {styled, Typography} from "@mui/material";

function FormParagraphSign({text = ""}){
    return (<Typography>
        {text}
    </Typography>)
}

export default FormParagraphSign;

const FormParagraphTypography = styled(Typography)({

})