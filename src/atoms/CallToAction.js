import { Button as BaseButton } from 'rebass'
import styled from 'styled-components'

// Add custom styles here
const CallToAction = styled(BaseButton)`
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  user-select: none;
`

CallToAction.displayName = 'CallToAction'
CallToAction.defaultProps = {
  borderRadius: 4,
  px: 4,
  py: 3,
  is: 'a'
}

export default CallToAction
