import React from 'react'
import { connect } from 'react-redux'
import Link from 'redux-first-router-link'

// Contains 'Home', 'User' and 'NotFound'
import * as components from './components'

const App = ({ page, changeUser }) => {
  const Component = components[page]
  return (
    <div>
      <Link to="/user/123">User 123</Link>
      <Link to={{ type: 'USER', payload: { id: 456 } }}>User 456</Link>
      <button onClick={() => changeUser(789)}>User 789</button>
      <Component />
    </div>
  )
}

const mapStateToProps = ({ page }) => ({ page })

const mapDispatchToProps = dispatch => ({
  changeUser: id => dispatch({ type: 'USER', payload: { id } })
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
