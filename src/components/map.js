import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const map = require('/assets/map.jpg');

// Check this out for tips on using "Hooks" to handle forms.
// https://rangle.io/blog/simplifying-controlled-inputs-with-hooks/

const Map = ({ center, setMapCenter, zoom, setMapZoom }) => {
    const [mapCenterInput, updateMapCenter] = useState('');
    const [mapZoomInput, updateMapZoom] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        setMapCenter(mapCenterInput);
        setMapZoom(mapZoomInput);
    };
    return (
<>
<h3>Pretend this is a live map</h3>

{ center? `Map Center ${center}` : ''}
{ zoom?  ` Zoom ${zoom}` : ''}
<br/>

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
    <label>Center</label>
    <input type="text" onChange={ e => updateMapCenter(e.target.value) } value={ mapCenterInput } required/>
    <label>Zoom</label>
    <input type="text" onChange={ e => updateMapZoom(e.target.value) }   value={ mapZoomInput } required/>
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
    center: PropTypes.string,
    setMapCenter: PropTypes.func,
    zoom: PropTypes.string,
    setMapZoom: PropTypes.func,
}
const mapStateToProps = (state) => ({
    center: state.map.center,
    zoom:   state.map.zoom,
//    geohash: (typeof state.location.query === 'undefined')? '' : state.location.query.geohash
})
const mapDispatchToProps = dispatch => ({
    setMapCenter: center => dispatch({ type: 'SETCENTER', payload: center }),
    setMapZoom:   zoom   => dispatch({ type: 'SETZOOM',   payload: zoom }),
})
export default connect(mapStateToProps, mapDispatchToProps)(Map);
