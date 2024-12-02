import React from 'react'

const Home = () => {
  return (
    <div style={{height: "90vh", display:"flex", justifyContent:"center", alignItems: "center", flexDirection:"column"}}>
      <h1>Home Page</h1>
      <p style={{fontSize:"larger", marginTop: "1rem"}}>Go to Job page By click on <a href="/jobs">Jobs</a> in Navbar</p>
    </div>
  )
}

export default Home
