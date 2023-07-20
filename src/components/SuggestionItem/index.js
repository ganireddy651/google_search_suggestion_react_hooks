// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {eachList, onSearchSuggestion} = props
  const {id, suggestion} = eachList

  const onSearch = () => {
    onSearchSuggestion(suggestion)
  }

  return (
    <li>
      <div className="suggestions">
        <p>{suggestion}</p>
        <button onClick={onSearch} type="button" className="arrow-btn">
          <img
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
            alt="arrow"
            className="arrow"
          />
        </button>
      </div>
    </li>
  )
}

export default SuggestionItem
