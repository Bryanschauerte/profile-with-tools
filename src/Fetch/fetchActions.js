
export function fetchApi({
    body,
    method = 'GET',
    url
}) {
    const headers = {};
    body = (body) ? JSON.stringify(body) : body;

    return fetch(url, {
        body,
        headers,
        method
    });
}

export function makeFetch(dispatch, fetchParams, loadingAction, successfulFetchAction, failedFetchAction){
    dispatch(loadingAction());

    return function(dispatch){
        return fetchApi(fetchParams)
            .then((response) => response.json())
                .then(
                    (response) => dispatch(successfulFetchAction(response)),
                    (error) => dispatch(failedFetchAction(error)))
                        .catch(err => dispatch(failedFetchAction(err)));
    };
}
