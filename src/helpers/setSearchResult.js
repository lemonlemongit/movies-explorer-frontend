export const setSearchResult = ({ arrayResult, isCheckboxOn, query }) => {
    localStorage.setItem('searchResult', JSON.stringify({arrayResult, isCheckboxOn, query}))
}