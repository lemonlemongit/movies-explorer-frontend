export const getSearchResult = () => {
    const searchResult = JSON.parse(localStorage.getItem('searchResult'))

    return {
        arrayResult: searchResult?.arrayResult,
        isCheckboxOn: searchResult?.isCheckboxOn,
        query: searchResult?.query
    }
}