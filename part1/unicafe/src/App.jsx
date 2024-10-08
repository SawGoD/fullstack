import { useState } from 'react'

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const Feedback = (props) => {
        return (
            <div>
                <h1>Give feedback</h1>
                <button onClick={props.good}>good</button>
                <button onClick={props.neutral}>neutral</button>
                <button onClick={props.bad}>bad</button>
            </div>
        )
    }

    const Statistics = (props) => {
        return (
            <div>
                <h1>Statistics</h1>
                <p>Good {props.good}</p>
                <p>Neutral... {props.neutral}</p>
                <p>BAD {props.bad}</p>
            </div>
        )
    }

    return (
        <div>
            <Feedback good={() => setGood(good + 1)} neutral={() => setNeutral(neutral + 1)} bad={() => setBad(bad + 1)} />
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

export default App
