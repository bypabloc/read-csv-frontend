export default defineNuxtPlugin((nuxtApp) => {

    const config = useRuntimeConfig()
    
    const endpoint = async (
        url: string,
        {
            method = 'GET',
            headers = {},
            body = {},
        } = {}
    ) => {
        window.console.log('endpoint', url, method, headers, body);
        return await window.fetch( config.public.apiBaseUrl + url, {
            method,
            headers: {
                ...headers,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        } ).then( (response) => response.json() );
    }

    return {
        provide: {
            endpoint,
        }
    }
})
