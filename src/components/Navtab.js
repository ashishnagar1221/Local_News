import React, { useState } from 'react'
import {Nav} from 'react-bootstrap'
import Newsfeed from './Newsfeed'


const Navtab = (props) => {
    const [feed,setFeed] = useState('world')
    const changefeed = (val) =>{
        setFeed(val)
    }

  return(
    <div  style={{width:'90%',margin:"2px auto"}}>
        <Nav justify expand="lg" variant="tabs" defaultActiveKey="/home" style={{backgroundColor:'silver'}}>
        <Nav.Item>
            <Nav.Link href="/home">World</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-1" onSelect ={() => changefeed('nation')}>Nation</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-2" onSelect ={() => changefeed('business')}>Business</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-3" onSelect ={() => changefeed('sports')}>Sports</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-4" onSelect ={() => changefeed('entertainment')}>Entertainment</Nav.Link>
        </Nav.Item>
        </Nav>
        <Newsfeed value = {feed} lang ={props.lang}/>
    </div>
   )

 }

export default Navtab