import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Router, {withRouter} from 'next/router'
import {EditContactForm} from '../../screens/contacts/components'
import ContactContext, {
  ContactProvider,
} from '../../screens/contacts/providers/contact-provider'
import Layout from '../../screens/contacts/shared/contact-layout'
import {updateContact} from '../../shared/api'

function ContactEdit({router: {query}}) {
  if (query) {
    const {addr} = query
    const contacts = useContext(ContactContext) || []
    const contact = contacts.find(c => c.addr === addr)
    return (
      <ContactProvider>
        <Layout>
          <EditContactForm
            {...contact}
            onSave={editContact => {
              updateContact(addr, editContact)
              Router.push(`/contacts/screens/contacts/view?addr=${addr}`)
            }}
          />
        </Layout>
      </ContactProvider>
    )
  }
  return null
}

ContactEdit.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  router: PropTypes.object.isRequired,
}

export default withRouter(ContactEdit)