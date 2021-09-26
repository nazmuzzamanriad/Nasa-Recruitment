import React from 'react';
import './ShowData.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const ShowData = (props) => {
    console.log(props)
    const { name, picture, company, balance, age, phone } = props.researcher;
    return (

        <div className='card-preview'>



            <div className="col">
                <div className="card">
                    <img src={picture} class="card-img-top" alt="..." />

                    <div className="card-body">
                        <h5 className="card-title">Name: {name}</h5>
                        <p className="card-text">Age: {age}</p>
                        <p className="card-text">Company: {company}</p>
                        <p className="card-text">Phone: {phone}</p>
                        <p className="card-text">Balance: {balance}</p>
                        <button className='cart-button'>Add To Cart</button>
                    </div>
                </div>
            </div>










        </div>
    );
};

export default ShowData;