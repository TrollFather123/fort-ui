import React from 'react'
import { WrapperStyle } from '../../styles/WrapperStyle'

const Wrapper = ({children}) => {
  return (
    <WrapperStyle>
        {children}
    </WrapperStyle>
  )
}

export default Wrapper