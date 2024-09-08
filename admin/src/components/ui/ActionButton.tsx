import {Button, styled} from "@mui/material";
import {ButtonProps} from "@mui/material/Button/Button";
import {Color} from "@/constants/color";

interface IActionButtonProps extends ButtonProps {

}

export function ActionButton({...props}: IActionButtonProps) {
  return (<StyledButton {...props}></StyledButton>)
}

const StyledButton = styled(Button)({
  backgroundColor: Color.GlobalGreen,
  '&:hover': {
    backgroundColor: Color.GlobalGreen80,
  },
});