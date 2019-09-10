import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  color: green;
`

function useDemoHook(initialState) {
  return React.useState(initialState)
}

export function Component3() {
  const [val] = useDemoHook(0)
  return <Wrapper>Component3: {val}</Wrapper>
}
// if this line is removed, then tree-shaking works correctly
Component3.displayName = 'FancyName3'
