

const Header = ({courses}) =>{
  // console.log(courses);
  return(
<h1 key={courses}>{courses}</h1>
  )
}

const Content = ({parts}) =>{
  // console.log(parts);
  return(
    <Parts parts = {parts} />
  )
}

const Parts = ({parts}) =>{
  // console.log(parts);
  return(
   parts.map(part => {
      // console.log(part)
      // console.log(part.exercises);
      return (
        <p key={part.id}>{part.name} {part.exercises}</p>
      )
    })
  )
}

const Total = ({parts}) =>{
  // console.log(parts);

  let sum = parts.reduce(function(a , b){
    console.log(a , b.exercises);
    return  a + b.exercises
  }, 0)

    return(
      <h4 key={parts.id}>Total of {sum}</h4>
    )
}

const Course = ({courses}) =>{
  return(
    <>
    {
      courses.map(course => {
        console.log(course.name);
        console.log(course.id);
        console.log(course.parts);
        return(
          <>
          <Header courses = {course.name} />
          <Content parts = {course.parts} />
          <Total parts = {course.parts} />
          </>
        )
      })
    }
    </>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
        <Course courses ={courses} />
      )
}

export default App
