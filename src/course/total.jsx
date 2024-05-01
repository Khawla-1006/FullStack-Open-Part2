const Total = ({parts}) =>{

  
    let sum = parts.reduce(function(a , b){
    //   console.log(a , b.exercises);
      return  a + b.exercises
    }, 0)
  
      return(
        <h4>Total of {sum}</h4>
      )
  }

  export default Total