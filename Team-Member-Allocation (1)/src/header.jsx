const header = ({selectedTeam,teammembercount}) => {
  return (
            < header >
              <h1 className ="header">TEAM MEMBER ALLOCATION</h1>
              <h3 className="content">{selectedTeam} has {teammembercount} Members </h3>
            </header >   
)
}

export default header;