import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setMapQuery } from './utils'

// Go read this: https://github.com/faceyspacey/redux-first-router-link#readme
import { NavLink } from 'redux-first-router-link'

// Import everything as an object so that we can look up a component using its name.
import * as components from './components'

const App = ({ page, mapCenter, mapZoom, changeUser }) => {
  const Component = components[page]
  return (
    <>
        <NavLink
            to="/"
            activeClassName='active'
            activeStyle={{ color: 'pink' }}
            exact={true}
            strict={true}
        > Home </NavLink>

        <NavLink
            to={{type: "MAP", query: setMapQuery(mapCenter,mapZoom)}}
            activeClassName='active'
            activeStyle={{ color: 'pink' }}
            exact={true}
            strict={true}
        > Map </NavLink>

        <NavLink to="/user/123"
            activeClassName='active'
            activeStyle={{ color: 'red' }}>User 123</NavLink>

        <NavLink to={{ type: 'USER', payload: { id: 456 } }}>User 456</NavLink>

        <button onClick={() => changeUser(789)}>User 789</button>

        <Component />
    </>
  )
}
App.propTypes = {
    page: PropTypes.string,
    center: PropTypes.string,
    zoom: PropTypes.string,
    changeUser: PropTypes.func
};
const mapStateToProps = (state) => ({
    page: state.page,

    mapCenter: state.map.center,
    mapZoom: state.map.zoom
});

const mapDispatchToProps = dispatch => ({
/*
     The action needs to have the full payload I think
     including geohash??? Same thing goes for any action
     so we should pull all actions out of these components
     and into an action.js file to look at them all in one place!
*/
  changeUser: id => dispatch({ type: 'USER', payload: { id } })
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
