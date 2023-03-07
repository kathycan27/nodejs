export const Postd = () => 
{
    return <button onClick={()=> 
        {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json)
            .then(data => console.log(data))
        }
}>
traer datos </button>
}