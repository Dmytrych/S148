import { Box, CircularProgress } from '@mui/material'
import Markdown from 'react-markdown'

interface Props {
  description: string
  isLoading?: boolean
}

export function ProductDescription ({ description, isLoading = false }: Props) {
  return (<Box>
        { !isLoading
          ? <Markdown>
                {description}
            </Markdown>
          : <Box>
                <CircularProgress />
            </Box>}
    </Box>)
}
