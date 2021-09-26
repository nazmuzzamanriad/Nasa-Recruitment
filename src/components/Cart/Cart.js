import { library } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import './Cart.css'

const Cart = (props) => {
    console.log(props.cart)
    let total = 0;

    let name = '';

    for (const details of props.cart) {
        console.log(details);

        const balance = parseFloat(details.balance);
        console.log(balance)

        total = total + balance;

        name = details.name;








    }
    console.log(name)


    return (
        // cart section............
        <div >
            <div>
                <h3>
                    Person Added:{props.cart.length}

                </h3>
                <h4>Total Amount:{total.toFixed(2)}</h4>
            </div>
            <div>
                {
                    props.cart.map(name =>
                        <ul><li>{name.name}</li></ul>)
                }




            </div>

        </div>
    );
};

export default Cart;