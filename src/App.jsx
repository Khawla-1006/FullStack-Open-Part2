import Header from "./course/header"
import Content from "./course/content"
import Total from "./course/total"
import courses from "./course/courses"

const Course = ({courses}) =>{
  return(
    <>
    <h1>Web development curriculum</h1>
    {
      courses.map(course => {
        return(
          <div key={course.id}>
          <Header courses = {course.name} />
          <Content parts = {course.parts} />
          <Total parts = {course.parts} />
          </div>
        )
      })
    }
    </>
  )
}

const App = () => {

  return (
        <Course courses ={courses} />
      )
}

export default App
