import React from 'react';


const pageNotFound = {
  width: "80%",
  height: "80%",
  padding: "30px",
  marginTop: "70px",
  margin: "0 auto",
  fontSize: "2rem"
}

// eslint-disable-next-line
const PageNotFound = () => {
  return (
    <div style={pageNotFound}>
      <h5 style={{textAlign: "center", color: "brown"}}>Page Not Found</h5>
    </div>
  )
}


export default PageNotFound
