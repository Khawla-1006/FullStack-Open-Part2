

const Header = (props) =>{
  return(
   <h1>{props.name}</h1>
  )
}

const Content = (props) =>{
  return(
      <Parts parts = {props.parts} />
  )
}

const Parts = ({parts}) =>{
  // console.log(parts);
  return(
   parts.map(part => {
      // console.log(part.name)
      // console.log(part.exercises);
      return (
        <p key={part.id}>{part.name} {part.exercises}</p>
        )
    })
  )
}

const Total = ({parts}) =>{

let sum = parts.reduce(function(a , b){
  // console.log(a , b.exercises);
  return  a + b.exercises
}, 0)

  return(
    <p>Total of {sum}</p>
  )
}

const Course = ({course}) =>{
  return(
    <>
       <Header name = {course.name} />
       <Content parts = {course.parts} />
       <Total parts = {course.parts} />
    </>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App
