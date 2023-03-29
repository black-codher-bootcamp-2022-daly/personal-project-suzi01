import React from 'react'
import styled from 'styled-components'

const Missing_credit = (props) => {
  return (

    <Image src= "/images/no-user-profile.jpg" alt={props.title} />
    
  )
}

const Image = styled.img`
    width:50px;
    
`

export default Missing_credit