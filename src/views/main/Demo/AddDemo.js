import React, { useState, useEffect } from 'react'
import Input from '../../../components/Inputs/Input';
import { FieldContainer, ModalBodyConatiner } from '../TransportModule/TransportRoute/components/AddRouteStyles';


const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

const listitems = products.map(product =>
    <li key={product.id} >{product.title}</li>
);

const AddDemo = () => {
    const [post, setPosts] = useState([]);  
    //api code
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setPosts(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
    }, []);
    const productlist = post.map(list =>
        [
            <li>{list.id}</li>,
            <li>{list.title}</li>
        ]
    );
    return (
        <>
            <ul>{productlist}</ul> 
        </>
    );
    // const [message, setMessage] = useState('Hello');
    // function handleSubmit(e)
    // {
    //     e.preventDefault();
    //     setTimeout(() => {
    //     alert(`You said ${message}`);
    //     }, 5000);
    // }
    // return (
    //     <>
    //         <h1>Test</h1>
    //         <p>{user.name}</p>
    //         {/* <AddButton/> */}
    //         <img src={user.imageUrl} style={{ width: user.imageSize, height: user.imageSize }} />
    //         <ul>{listitems}</ul> 
    //         <form onSubmit={handleSubmit}>
            // <FieldContainer>
            //         <label>Enter your name: <input type="text" value={message} onChange={e => setMessage(e.target.value)} /></label>
            // </FieldContainer>
    //             <input type="submit" value="Submit"/>
    //         </form>

    //         <div>
    //             <h4>{ message}</h4>
    //         </div>
    //     </>
    // );      
}



function AddButton()
{
    const [count, setCount] = useState(0);
        function handleClick() {            
            setCount(count + 1);
        }
    return (<button onClick={handleClick}>Click me {count}</button>);
}

export default AddDemo;