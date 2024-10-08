const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
            },
            {
                name: 'State of a component',
                exercises: 14,
            },
        ],
    }

    const Header = (props) => <h1>{props.course.name}</h1>

    
    const Content = (props) => {
        const Part = (props) => ( <h2>{props.parts.name} {props.parts.exercises}</h2> )

        return (
        <div>
            <Part parts={props.parts[0]} />
            <Part parts={props.parts[1]} />
            <Part parts={props.parts[2]} />
        </div>
        )
    }

    const Total = (props) => (
        <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    )

    return (
        <div>
          <Header course={course} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />
        </div>
    )
}

export default App