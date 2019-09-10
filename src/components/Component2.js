import styled from 'styled-components'

export const Component2 = styled.div`
  color: turquoise;
`
// If this line is removed, then tree-shaking works correctly
Component2.displayName = 'FancyName2'
