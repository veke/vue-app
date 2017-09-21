import jsonp from 'jsonp-promise';
import { APIKEYS } from '../../apikeys';

export default (url) => {
    return jsonp(`${APIKEYS.baseUrl}${url}&app_id=${APIKEYS.appId}&app_key=${APIKEYS.appKey}`);
};
