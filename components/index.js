import html from 'yo-yo'
import header from './header'
import link from './buttons/link'
import button from './buttons/custom'

module.exports = (state, dispatch) => html`
  <div>
    ${header(state)}
    ${button('enter', dispatch, 'CHANGE_ROUTE', '/info')}
  </div>
  `
