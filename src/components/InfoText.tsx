import { Box, Typography } from '@mui/material'

type InfoTextProps = {
  title: string
  text: string
}

const InfoText = ({ title, text }: InfoTextProps) => {
  return (
    <Box display="flex" alignItems="center">
      <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }} gutterBottom>
        {title}
      </Typography>
      <Typography variant="subtitle1" gutterBottom sx={{ marginLeft: '10px' }}>
        {text}
      </Typography>
    </Box>
  )
}

export default InfoText
