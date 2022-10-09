/* eslint-disable no-fallthrough */
const keys = ['country','director', 'duration', 'year',
    'description', 'image', 'trailerLink', 'nameRU',
    'nameEN', 'thumbnail', 'movieId']

export const validateMovieToBookmarks = (movieInitial) => {
    const movie = {...movieInitial}

    fillEmptyUrlFields(movie, 'image', 'trailerLink', 'thumbnail')

    keys.forEach((key, index) => {
        if (!movie.hasOwnProperty(key)) {
            // eslint-disable-next-line default-case
            switch (key) {
                case 'country':
                case 'director':
                case 'description':
                case 'nameRU':
                case 'nameEN':
                    movie[key] = "plug"
                    break;
                case 'year':
                    movie[key] = new Date().toLocaleDateString('en')
                case 'duration':
                    movie[key] = 10
                case 'movieId':
                    movie[key] = Date.now()
            }
        }
    })

    return movie
}

const isValidUrl = urlString => {
    const urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
  '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator
    return !!urlPattern.test(urlString);
}

const fillEmptyUrlFields = (movie, ...fieldsNames) => {
    fieldsNames.forEach(item => {
        if (!movie[item] || !isValidUrl(movie[item])) {
            movie[item] = "https://domainname.lemon.nomoredomains.sbs/404"
        }
    })
}