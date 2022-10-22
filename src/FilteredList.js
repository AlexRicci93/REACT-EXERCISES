import { useMemo } from "react";

const list =  [{

    name: 'John',
    id: '1',
    age: '15',

},

{

    name: 'Peter',
    id: '2',
    age: '19',

},

{

    name: 'Mike',
    id: '3',
    age: '27',

},

{

    name: 'Walter',
    id: '4',
    age: '40',

},

]


export function FilteredList() {




    const lista = useMemo(()=> list.map((obj, index) => 
    obj.age > 18 ? <p>{obj.name}</p> : <p>{index}</p>), [list])


    return(

        <div>{lista}</div>
        
    )
    
}