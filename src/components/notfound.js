import React from 'react'
import { connect } from 'react-redux'

const pigeon = require('/assets/pigeon_reading_map.jpg');

const NotFound = () => (
    <>
    <h3>I got a 404 error which means I am lost.</h3>
    <img src={ pigeon }/>
    </>
)
export default NotFound;
