import styled from 'styled-components'

export const Component5 = styled.div`
  color: inherit;
`

const helper = size => `${size}rem`

const widthUnits = 'px'

/* eslint no-unused-vars: off */
const OtherComponent = styled(Component5)`
  font-size: ${helper(2)};
  width: ${`50${widthUnits}`};
`
