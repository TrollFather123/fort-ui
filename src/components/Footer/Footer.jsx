import React from 'react'
import { FooterWrapper } from '../../styles/FooterWrapper'
import { Typography } from '@mui/material'

const Footer = () => {
  return (
    <FooterWrapper direction='row' justifyContent='center'>
        <Typography sx={{
            color:(theme) => theme.palette.common.white
        }}>Copyright © 2024 Test.All Rights Reserved</Typography>
    </FooterWrapper>
  )
}

export default Footer