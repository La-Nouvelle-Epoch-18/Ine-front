import { PromiseInterface, wrapper, readmeAxios } from './Http';

export const getReadme = ():
    Promise<PromiseInterface<string>> => (
        wrapper(readmeAxios.get('/readme'))
    );
