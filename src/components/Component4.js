import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  color: blue;
`

export class Component4 extends React.Component {
  // if this line is removed, then tree-shaking works correctly
  static displayName = 'FancyName4'

  render() {
    return <Wrapper>Component4</Wrapper>
  }
}
