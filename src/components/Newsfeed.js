import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';

const Newsfeed = (props) => {
    const [feedlist,setFeedList] = useState([])
    

    useEffect(() =>{
        if(props.lang != ""){
            fetch(`https://gnews.io/api/v3/topics/nation?lang=${props.lang}&token=3332252e6f85bc26c3f5fe7c86c0e1e0`)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                setFeedList(data.articles)
            });
        }
        else{
            fetch(`https://gnews.io/api/v3/topics/${props.value}?&token=218f74f91ed691c893dbc5b227af67e2`)
            .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            setFeedList(data.articles)
        });
        }
        
    },[props])

  return(
    <div>
        <ul style={{padding:0}}>{
            feedlist.map((ele,x) =>{
                return(
                    <li key={x} style={{listStyle:"none"}}>
                        <Card>
                            <Card.Body>{ele.title}</Card.Body>
                        </Card>
                    </li>
                )
            })
        }
        </ul>
    </div>
   )

 }

export default Newsfeed