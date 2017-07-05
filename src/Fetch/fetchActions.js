
const swapi = 'http://swapi.co/api/';

export function fetchApi({
        method = 'GET',
        url
    }){
    const headers = {};

    return fetch(url, {
        headers,
        method
    });
}

export function makeFetch(dispatch, fetchParams, loadingAction, successAction, failAction){
    dispatch(loadingAction());

    return (dispatch) => {
        return fetchApi(fetchParams)
            .then((response) => response.json())
                .then(
                    (results)=> dispatch(successAction(results)),
                    (err) => dispatch(failAction(err))
                )
                    .catch(error => dispatch(failAction(error)));
    };

}
