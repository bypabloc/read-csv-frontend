export default defineNuxtPlugin((nuxtApp) => {

    const config = useRuntimeConfig()
    
    const endpoint = (
        url: string,
        {
            method = 'GET',
            headers = {},
            body = null,
        } = {}
    ) => {
        window.console.log('endpoint', url, method, headers, body);
        return window.fetch( config.public.apiBaseUrl + url, {
            method,
            headers,
            body,
        } ).then( response => {
            console.log('response', response);
        } );
    }

    return {
        provide: {
            endpoint,
        }
    }
})
