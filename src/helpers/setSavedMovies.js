export const setSearchResult = ({ arrayResult, isCheckboxOn, query }) => {
    localStorage.setItem('searchSavedMovies', JSON.stringify({arrayResult, isCheckboxOn, query}))
}