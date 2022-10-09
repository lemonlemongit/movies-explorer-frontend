export const getSearchResult = () => {
    const searchResult = JSON.parse(localStorage.getItem('searchSavedMovies'))

    return {
        arrayResult: searchResult?.arrayResult,
        isCheckboxOn: searchResult?.isCheckboxOn,
        query: searchResult?.query
    }
}