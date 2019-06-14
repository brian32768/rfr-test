import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const map = require('/assets/map.jpg');

// https://rangle.io/blog/simplifying-controlled-inputs-with-hooks/

const Map = ({ geohash, setGeohash }) => {
    const [geohashInput, updateGeohash] = useState('');
    console.log("Map props", geohash, setGeohash);
    const handleSubmit = (e) => {
        e.preventDefault();
        setGeohash(geohashInput);
    };
    return (
        <>
        <h3>Pretend this is a live map</h3>

        { geohash? `Map center ${geohash}` : ''} <br/>

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
const mapStateToProps = (state) => ({
    geohash: state.geohash.geohash
})
const mapDispatchToProps = dispatch => ({
  setGeohash: geohash => dispatch({ type: 'SETGEOHASH', payload: {geohash} })
})
export default connect(mapStateToProps, mapDispatchToProps)(Map);
