import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  color: green;
`

// This one isn't related to styled-components...there seems to be a general issue where
// React.forwardRef() always breaks tree-shaking. If you render something other than
// styled-components, it still doesn't tree-shake.
export const Component6 = React.forwardRef((props, ref) => {
  console.log('ref: ', ref)
  return <Wrapper>Component6</Wrapper>
})
