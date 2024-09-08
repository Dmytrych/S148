import {Typography} from "@mui/material";

const Copyright = () => {
  return (<Typography color={theme => theme.palette.text.secondary} variant="body2">{process.env.NEXT_PUBLIC_COPYRIGHT}</Typography>)
}

export default Copyright;

