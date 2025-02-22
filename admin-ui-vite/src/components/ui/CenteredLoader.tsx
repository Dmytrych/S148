import {Box, CircularProgress} from "@mui/material";

const CenteredLoader = () => {
  return (
    <Box width="100%" height="100%" display="flex" justifyContent="center">
      <CircularProgress />
    </Box>
  )
}

export default CenteredLoader;