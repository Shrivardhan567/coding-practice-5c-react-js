// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {fName: false, lName: false}

  showFirstName = () => {
    this.setState(prevState => ({fName: !prevState.fName}))
  }

  showLastName = () => {
    this.setState(prevState => ({lName: !prevState.lName}))
  }

  render() {
    const {fName, lName} = this.state

    return (
      <div>
        <h1>Show/Hide</h1>
        <div>
          <button type="button" onClick={this.showFirstName}>
            Show/Hide FirstName
          </button>
          {fName && <p className="name">Joe</p>}
        </div>
        <div>
          <button type="button" onClick={this.showLastName}>
            Show/Hide LastName
          </button>
          {lName && <p className="name">Jonas</p>}
        </div>
      </div>
    )
  }
}

export default ShowHide
