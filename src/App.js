import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Go read this: https://github.com/faceyspacey/redux-first-router-link#readme
import { NavLink } from 'redux-first-router-link'

// Import everything as an object so that we can look up a component using its name.
import * as components from './components'

const App = ({ page, geohash, state, changeUser }) => {
  const Component = components[page]
  console.log("App geohash?", geohash, " state =",state);
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
            to={ '/map/' + geohash /* using an array or object here does not work for me */ }
            activeClassName='active'
            activeStyle={{ color: 'pink' }}
            exact={true}
            strict={true}
        > Map </NavLink>

        <NavLink
            to={{
                type: "MAP",
                query:geohash?{geohash:geohash}:{}
            }}
            activeClassName='active'
            activeStyle={{ color: 'pink' }}
            exact={true}
            strict={true}
        > MapQ </NavLink>

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
    geohash: PropTypes.string,
    changeUser: PropTypes.func
};
const mapStateToProps = (state) => ({
    page: state.page,
    state: state,
    geohash: (typeof state.location.query === 'undefined')? state.geohash.geohash : state.location.query.geohash,
});
const mapDispatchToProps = dispatch => ({
  changeUser: id => dispatch({ type: 'USER', payload: { id } })
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
