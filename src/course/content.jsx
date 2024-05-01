const Content = ({parts}) =>{
    return(
      <Parts parts = {parts} />
    )
  }
  
  const Parts = ({parts}) =>{
    return(
     parts.map(part => {
        return (
          <p key={part.id}>{part.name} {part.exercises}</p>
        )
      })
    )
  }

  export default Content