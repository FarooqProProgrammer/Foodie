import React from 'react'
import styled from 'styled-components'




const ImageItem = styled.div`
    width:50px;
    height:50px;
    border-radius: 50%;

    
`

const Avatar = () => {
    return (
        <ImageItem className=''>
            <img  className='w-100 h-100 rounded-circle' src="https://images.unsplash.com/photo-1599110364868-364162848518?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJzfGVufDB8fDB8fHww" alt="" srcset="" />
        </ImageItem>
    )
}

export default Avatar
