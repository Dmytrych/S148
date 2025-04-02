import {Button, Stack} from "@mui/material";
import {useNavigate} from "react-router";

type BackNavigationWrapperProps = {
  fallbackTo?: string;
}

export default function BackNavigation({ fallbackTo }: BackNavigationWrapperProps) {
  const navigate = useNavigate();
  const hasPrevPage = window.history.state.idx !== 0

  const handleBackClick = () => {
    if (hasPrevPage) {
      navigate(-1);
    } else if (fallbackTo) {
      navigate(fallbackTo);
    }
  }

  return (
    <Stack my={2} direction="row" overflow="scroll" minHeight={10}>
      {hasPrevPage || fallbackTo ? (<Button onClick={handleBackClick}>Back</Button>) : null}
    </Stack>
  )
}
