import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setGeohash } from '../actions'

const map = require('/assets/map.jpg');

// https://rangle.io/blog/simplifying-controlled-inputs-with-hooks/

const Map = (props) => {
    const [geohashInput, updateGeohash] = useState('');
    console.log("Map props", props);
    const handleSubmit = (e) => {
        e.preventDefault();
        props.setGeohash(geohashInput);
    };
    return (
        <>
        <h3>Pretend this is a live map</h3>

        { props.geohash? `Map center ${props.geohash}` : ''} <br/>

        <img src={map}/> <br />

        <form onSubmit={ handleSubmit }>
            <label>geohash</label>
            <input type="text" onChange={ e => updateGeohash(e.target.value) } value={ geohashInput } required/>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}
Map.propTypes = {
    geohash: PropTypes.string,
    setGeohash: PropTypes.func
}
const mapStateToProps = (state) => (
        { geohash: state.geohash }
)
const mapDispatchToProps = {
    setGeohash
}
export default connect(mapStateToProps, mapDispatchToProps)(Map);
