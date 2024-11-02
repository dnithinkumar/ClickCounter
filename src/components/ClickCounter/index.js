// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  increaseCount = () => {
    this.setState(previousState => ({count: previousState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="counter-bg-container">
        <h1 className="heading">
          The Button has been clicked <span className="count">{count}</span>{' '}
          times
        </h1>
        <p className="description">Click the button to increase the count</p>
        <button className="button" onClick={this.increaseCount}>
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
