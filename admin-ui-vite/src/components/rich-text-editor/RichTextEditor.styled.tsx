import {styled} from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Select from '@mui/material/Select'

export const RichTextEditorWrapperStyled = styled(Box)({
  border: '1px solid lightgray',
  borderRadius: '4px',
  position: 'relative',
  '& .ProseMirror-focused': {
    outline: 'none',
  }
})

export const ToolbarButtonStyled = styled(Button, { shouldForwardProp: (props) => props !== 'isActive' })<{ isActive: boolean }>(({ theme, isActive }) => ({
  '& .MuiSvgIcon-root': {
    color: isActive ? theme.palette.primary.main : theme.palette.secondary.main,
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: '24px',
    height: '24px',
    padding: '4px',
  },
}))

type Level = 0 | 1 | 2 | 3 | 4 | 5 | 6

export const ToolbarSelectStyled = styled(Select<Level>)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    height: '24px',
    padding: '4px',
  },
}))
