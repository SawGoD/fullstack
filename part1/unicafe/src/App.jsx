import { useState } from 'react'

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const calcTotal = (props) => props.good + props.neutral + props.bad
    const calcAvg = (props) => (props.good - props.bad) / (props.good + props.neutral + props.bad)
    const calcPositive = (props) => (props.good / (props.good + props.neutral + props.bad)) * 100

    // if Nan is returned then use 0
    const errorGate = (props) => (isNaN(props) ? 0 : props)

    const noStats = (props) => {
        return (
            <div>
                <h1>Statistics</h1>
                <p>No feedback given</p>
            </div>
        )
    }

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
        if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
            return noStats(props)
        }
        return (
            <div>
                <h1>Statistics</h1>
                <p>Good {props.good}</p>
                <p>Neutral... {props.neutral}</p>
                <p>BAD {props.bad}</p>
                <br />
                <p>Total {calcTotal(props)}</p>
                <p>Avg {errorGate(calcAvg(props))}%</p>
                <p>Pos {errorGate(calcPositive(props))}%</p>
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
