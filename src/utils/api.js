import jsonp from 'jsonp-promise';
import { APIKEYS } from '../../apikeys';

export default (url) => {
    return jsonp(`${APIKEYS.baseUrl}${url}${url.includes('?') ? '&' : '?'}app_id=${APIKEYS.appId}&app_key=${APIKEYS.appKey}`);
};
