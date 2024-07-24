import {Box} from "@mui/material";
import Markdown from "react-markdown";

interface Props {
    description: string;
}

export function ProductDescription({description}: Props) {
  return (<Box>
    <Markdown>
      {description}
    </Markdown>
  </Box>)
}