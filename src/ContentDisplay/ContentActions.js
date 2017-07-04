import { makeFetch } from '../Fetch/fetchActions';

export const GITHUB_REPOSITORIES_LOAD = 'CONTENT-DISPLAY/GET_GITHUB_REPOSITORIES';
export const GITHUB_REPOSITORIES_SUCCESS = 'CONTENT-DISPLAY/GITHUB_REPOSITORIES_SUCCESS';
export const GITHUB_REPOSITORIES_FAILURE = 'CONTENT-DISPLAY/GITHUB_REPOSITORIES_FAILURE';

const githubUrl = 'https://api.github.com/users/Bryanschauerte/repos?sort=updated';

export function makeGithubFetch(dispatch, url = githubUrl){
    return makeFetch(dispatch, { url }, loadingGithubFetch, successfulGithubFetch, failedGithubFetch);
}

export function loadingGithubFetch(){
    return {
        type: GITHUB_REPOSITORIES_LOAD
    };
}

export function successfulGithubFetch(repositories){
    return {
        repositories,
        type: GITHUB_REPOSITORIES_SUCCESS
    };
}

export function failedGithubFetch(error){
    return {
        error,
        type: GITHUB_REPOSITORIES_FAILURE
    };
}
