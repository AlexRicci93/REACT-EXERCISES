import { useEffect } from "react";
import { useGithubUser } from "./useGithubUser";


export function GithubUser({username}) {

const {data, loading, error, fetchData} = useGithubUser(username)


useEffect(() => {

    fetchData(username)

   }, [username])


return(
    
    <div>
    {data && <h1>{data.name}</h1>}
    {loading && <h1>Loading...</h1>}
    {error && <h1>There has been an error</h1>}
    </div>
    
)

}