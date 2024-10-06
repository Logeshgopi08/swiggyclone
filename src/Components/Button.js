
const Button =({data})=>{

    return (
        <div className="bg-gray-300 px-5 py-1 mx-2 rounded-lg  my-2">
           <h3 className="flex flex-col">{data}</h3>
        </div>
    );
}

export default Button;