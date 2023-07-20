// Write your code here
import {useState} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

const GoogleSuggestions = props => {
  const [search, setSearch] = useState('')
  const {suggestionsList} = props

  const onChangeSearchInput = e => {
    setSearch(e.target.value)
  }

  const searchResults = suggestionsList.filter(each =>
    each.suggestion.toLowerCase().includes(search.toLowerCase()),
  )

  const onSearchSuggestion = suggestion => {
    setSearch(suggestion)
  }

  return (
    <div className="app-container">
      <img
        className="google-icon"
        src="https://assets.ccbp.in/frontend/react-js/google-logo.png "
        alt="google icon"
      />
      <div className="input-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
          alt="search icon"
          className="search-icon"
        />
        <input
          value={search}
          onChange={onChangeSearchInput}
          type="search"
          className="input"
          placeholder="Search Google"
        />
      </div>
      <div className="suggestion-container">
        <ul className="list-container">
          {searchResults.map(eachList => (
            <SuggestionItem
              onSearchSuggestion={onSearchSuggestion}
              eachList={eachList}
              key={eachList.id}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default GoogleSuggestions
