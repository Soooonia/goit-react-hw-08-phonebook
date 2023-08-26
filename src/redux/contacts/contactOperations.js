import { setToken, instance } from '../auth/authOperations';

// const instance = axios.create({
//     baseURL: 'https://connections-api.herokuapp.com',
// });

export const createContact = async (body) => {
    try {
        console.log('this is createContact');
        const { data } = await instance.post('/contacts');
        setToken(data.token)
        console.log('data =>', data);

        return data;
    } catch (error) {
        console.error('createContact error =>', error);
        throw error;
    }
};

export const deleteContact = async (contactId, token) => {
    const { data } = await instance.delete(`/contacts/${contactId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    console.log('deleteContact data =>', data);
    return data;

};

export const getContact = async (body) => {
    const { data } = await instance.get('/contacts', body);
    setToken(data.token)
    // console.log('getContact data =>', data);
    return data;
};