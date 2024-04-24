import {Component} from 'react'

import './index.css'

class APP extends Component {
  state = {searchInput = ' '}
  render() {
    const {searchInput} = this.state
    const {initialHistoryList} = this.props
    const {historyItem} = HistoryDetails

    const handleSearchInputChange = event => {
      searchInput(event.target.value)
      const filtered = initialHistoryList.filter(historyItem =>
        historyItem.title
          .toLowerCase()
          .includes(event.target.value.toLowerCase()),
      )
    }
    return (
      <div className="app-container">
        <h1 className="heading">History</h1>
        <input
          type="search"
          className="search-input"
          placeholder="Search Google"
          onChange={this.onChangeSearchInput}
          value={searchInput}
        />
        <button data-testid="delete"></button>
      </div>
    )
  }
}
export default APP
