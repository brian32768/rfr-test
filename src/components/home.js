import React from 'react'
import { connect } from 'react-redux'

const home = require('/assets/nest.jpg');

const Home = () => (
    <>
    <h1>HOME</h1>
    <img src={home} width="25%" height="25%"/>
    <br />
    That's what we call this page, "home".
    </>
)
export default Home;
