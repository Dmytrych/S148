export const appScrollbar = theme => ({
    '&::-webkit-scrollbar': {
        width: '8px',
        height: '8px',
    },
    '&::-webkit-scrollbar-track': {
        background: theme.palette.grey[300],
    },
    '&::-webkit-scrollbar-thumb': {
        background: theme.palette.grey[500],
        borderRadius: '4px',
        '&:hover': {
            background: theme.palette.grey[600],
        }
    }
});