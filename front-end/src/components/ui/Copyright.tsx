import {Typography} from "@mui/material";
import {Color} from "@/constants/color";

const Copyright = () => {
  return (<Typography color={Color.GlobalBlack40} variant="body2">{process.env.NEXT_PUBLIC_COPYRIGHT}</Typography>)
}

export default Copyright;

