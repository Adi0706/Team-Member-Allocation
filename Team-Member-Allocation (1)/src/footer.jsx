const footer = () => {
  var today = new Date() ;
  return (
            < footer className="container" >
              <div>
              <h5 className="footer">TEAM MEMBER ALLOCATION APP - {today.getFullYear()}</h5>
                </div>
            </footer >   
)
}

export default footer;