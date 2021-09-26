import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import ShowData from '../ShowData/ShowData';
import './LoadData.css'

const LoadData = () => {


    const [researchers, setResearchers] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setResearchers(data))
    }, []);




    const handleCartButton = (property) => {
        const newCart = [...cart, property];
        setCart(newCart)



    }




    return (
        <div className='ui-representation'>

            <div>

                <div class="row row-cols-1 row-cols-md-3 g-4">


                    {
                        researchers.map(researcher => <ShowData handleCartButton={handleCartButton} key={researcher._id} researcher={researcher}></ShowData>)
                    }


                </div>



            </div>
            <div className='cart'>
                <Cart cart={cart}></Cart>

            </div>

        </div>
    );


};





export default LoadData;