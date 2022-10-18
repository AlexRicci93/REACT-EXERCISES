


export function Sum({numbers=[5, 6, 7]}) {

    const sum = numbers.reduce((a,b)=>{
        return a + b
    })

    return (

        <h1>{sum}</h1>
    )

}