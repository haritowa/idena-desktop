import React, {useRef} from 'react'
import PropTypes from 'prop-types'
import {
  Box,
  SubHeading,
  FormGroup,
  Label,
  Input,
  Button,
} from '../../../shared/components'
import theme from '../../../shared/theme'

export function ActivateInviteForm({to, activateResult, onActivateInviteSend}) {
  const keyInputRef = useRef(null)
  return (
    <Box p="2em">
      <Box m="0 0 2em">
        <SubHeading>Activate invite</SubHeading>
      </Box>
      <FormGroup>
        <Label htmlFor="activateInviteKey">Key</Label>
        <Input ref={keyInputRef} id="activateInviteKey" />
      </FormGroup>
      <Button
        onClick={() => {
          onActivateInviteSend(to, keyInputRef.current.value)
        }}
      >
        Activate invite
      </Button>
      {activateResult && (
        <Box bg={theme.colors.gray} p="1em" m="1em 0" w={100}>
          <pre>{JSON.stringify(activateResult)}</pre>
          <style jsx>{`
            pre {
              white-space: pre-wrap;
              word-break: break-word;
            }
          `}</style>
        </Box>
      )}
    </Box>
  )
}

ActivateInviteForm.propTypes = {
  to: PropTypes.string,
  activateResult: PropTypes.string,
  onActivateInviteSend: PropTypes.func,
}

export default ActivateInviteForm
