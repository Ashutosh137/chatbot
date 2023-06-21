import React from 'react'
import { Link } from 'react-router-dom'
export const Home = () => {
  return (
    <div className="container h2  text-center justify-content-center">
      <div className="container my-5 m-auto justify-content-center d-flex flex-wrap">
        <div className="col">
          <img className='img-fluid h-50 w-50 col' src="https://cdn.pixabay.com/photo/2013/07/12/17/48/girl-152497_640.png" alt="net err" />
          <div className="h1 col m-5"><Link className="h1 col  text-decoration-none text-dark" to="/teacher">Teacher</Link></div>
        </div>
        <div className="col">
          <img className='img-fluid w-50 h-50 col' src="data:image/png;base64,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" alt="net err" />
          <div className="h1 col m-5"><Link className="h1 col text-decoration-none text-dark" to="/friend">Friend</Link></div>
        </div>
      </div>

    </div>
  )
}
