import React from 'react'
import { connect } from 'react-redux'

const User = ({ userId }) => (
    <h3>User {userId}</h3>
)

const mapStateToProps = ({ location }) => ({
    userId: location.payload.id
})
export default connect(mapStateToProps)(User)
