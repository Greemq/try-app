import axios from 'axios';


export function get(_this, url, payload, successCallback, errorCallback, error = null) {
    return axios({
        method: 'GET',
        url: url,
        params: payload.params,

    }).then(res => {
        successCallback(res);
    }).catch(err=>{
        errorCallback(err)
    });
}
export function post(_this, url, payload, successCallback, errorCallback, error = null) {
    return axios({
        method: 'POST',
        url: url,
        data: payload,

    }).then(res => {
        successCallback(res);
    }).catch(err=>{
        errorCallback(err)
    });
}