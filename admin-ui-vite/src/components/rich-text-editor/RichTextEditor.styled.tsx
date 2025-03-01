import {styled} from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

export const RichTextEditorWrapperStyled = styled(Box)({
  border: '1px solid lightgray',
  borderRadius: '4px',
  display: 'flex',
  flexDirection: 'column',
  '& .ProseMirror-focused': {
    outline: 'none',
  }
})

export const ToolbarButtonStyled = styled(Button, { shouldForwardProp: (props) => props !== 'isActive' })<{ isActive: boolean }>(({ theme, isActive }) => ({
  '& .MuiSvgIcon-root': {
    color: isActive ? theme.palette.primary.main : theme.palette.secondary.main,
  }
}))
