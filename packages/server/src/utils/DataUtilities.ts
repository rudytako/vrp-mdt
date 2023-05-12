const SENSITIVE_DATA_FIELDS = ['password', 'salt']

export const RemoveSensitiveData = (data: any) => {
    SENSITIVE_DATA_FIELDS.forEach((field) => {
        if(Object(data).hasOwnProperty(field)){
            delete data[field];
        }
    })
    return data;
}

export const FixObjectData = (data: any) => {
    return JSON.parse(JSON.stringify(data));
}