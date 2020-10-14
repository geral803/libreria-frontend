import { BASE_URL } from '../constants';


async function getApiRequest(endPoint, id) {

    const options = {
        method: 'GET',
    };

    if (!id) { id = '' } 
    else {id = '/' + id}

    try {
        let response = await (await fetch(BASE_URL + endPoint + id, options)).json();
        return (response);
    } catch (error) {
        console.log(error);
    }
}

export default getApiRequest;
