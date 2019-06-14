import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const map = require('/assets/map.jpg');

// Check this out for tips on using "Hooks" to handle forms.
// https://rangle.io/blog/simplifying-controlled-inputs-with-hooks/

const Map = ({ geohash, setGeohash }) => {
    const [geohashInput, updateGeohash] = useState('');
    console.log("Map render", geohash, setGeohash);
    const handleSubmit = (e) => {
        e.preventDefault();
        setGeohash(geohashInput);
    };
    return (
<>
<h3>Pretend this is a live map</h3>

{ geohash? `Map center ${geohash}` : ''} <br/>

<img src={map}/>

<p>
The idea here is to simulate updates to the map due to
dragging and zooming. I don't use lat-lon in the URL
in my project, I use a geohash so all I do here
is process a single string.
</p>

<p>
Type something and hit enter or click submit and the string should
get copied up to the top of the map; that demonstrates
the new center point being sent to the real map view.
</p>

<form onSubmit={ handleSubmit }>
    <label>geohash</label>
    <input type="text" onChange={ e => updateGeohash(e.target.value) } value={ geohashInput } required/>
    <button type="submit">Submit</button>
</form>

<p>
After you navigate away and then click the "Map" item in the navbar the map
comes back to the same view (not the default start position) so the same URL is copied
into the navbar to implement that.
</p>

<p>
I want the same string to be copied into the URL address bar too, so that someone
could immediate cut and paste that or bookmark the page to save the location.
</p>

</>
)}
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
