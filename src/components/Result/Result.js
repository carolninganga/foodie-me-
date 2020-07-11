import React from 'react';
import './style.css';



function Result(props) {
    return (     
        <div className="card mt-3 mb-3">
        <div className="card-header" style={{backgroundColor: "#F8F9FA"}}>
          <i className="far fa-newspaper"></i> Stores Nearby
        </div>
        <div id="article-section" className="card-body">
        {props.result ? props.result.map((item) => { 
          return(
            
                <div className="card" style={{width: "25rem"}}>
                    <img src={item.image_url} className="card-img-top" alt="businessImage" style={{width:"100%", height:"250px"}} />
                        <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{item.location.city}</p>
                        <p className="card-text">{item.location.zip_code}</p>
                    <a href={item.url} className="btn btn-primary">View More on Yelp</a>
                      </div>
                </div>
            )
          }): <p>No stores available!</p>}
        </div>
        </div>
    )
}
export default Result;