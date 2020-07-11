import React from 'react'
function Result(props) {
    return (     
        <div className="card mt-3 mb-3">
        <div className="card-header" style={{backgroundColor: "#F8F9FA"}}>
          <i className="far fa-newspaper"></i> Stores Nearby
        </div>
        <div id="article-section" className="card-body">
        {props.result ? props.result.map((item) => { 
          return(
            //   <Card className='list-group-item' key={item.id}>
            //   <h5>{item.name}</h5>
            //   <p>Phone: {item.display_phone}</p>
            //   <p>Location: {item.location.address1}, {item.location.city}, {item.location.state} {item.location.zip_code}</p>
            //   <p>Rating:{item.rating}
            //   <a href={item.url}>View More on Yelp</a></p>
            //   </li>

                <div className="card" style={{width: "18rem"}}>
                    <img src="" className="card-img-top" alt="..." />
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