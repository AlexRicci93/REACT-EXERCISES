import { useEffect } from "react";
import { useGithubUser } from "./useGithubUser";


export function GithubUser({username}) {

const {data, fetchData} = useGithubUser(username)


useEffect(() => {

    fetchData(username)

   }, [username])

return(
    
    <div>
    {data && <h1>{data.name}</h1>}
    </div>
    
)

}