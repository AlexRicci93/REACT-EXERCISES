
import { useState } from 'react';
import useSWR, { mutate } from 'swr';

const fetcher = (url) => fetch(url).then((response) => response.json())

export function useGithubUser(username) {

    
 const {data, error} = useSWR(username?`https://api.github.com/users/${username}`: null, fetcher)

    function fetchData() {
    mutate()
    }

return {

    data,
    loading: !data && !error,
    error,
    fetchData
   

}


}