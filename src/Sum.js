


export function Sum(props) {

    const sum = props.numbers.reduce((a,b)=>{
        return a + b
    })

    return (

        <h1>{sum}</h1>
    )

}