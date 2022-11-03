const initVars = async () => {
    
    const dotenv = await import('dotenv');
    dotenv.config();
    
    let url;
    if (process.env.DB_SERVERTYPE === 'local') {
        url  = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/`;
    } else {
        url  = `mongodb+srv://`;
        url += `${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@`;
        url += `${process.env.DB_CLUSTER}.${process.env.DB_HOST}/`
    }
        url += `${process.env.DB_DATABASE}?retryWrites=true&w=majority`;

    let port = process.env.PORT;

    return { url, port };
}

export default initVars;