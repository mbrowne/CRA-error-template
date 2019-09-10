import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  color: blue;
`

export function Component1() {
  return <Wrapper>Component1</Wrapper>
}
Component1.displayName = 'FancyName1'
