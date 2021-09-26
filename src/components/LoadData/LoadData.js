import React, { useEffect, useState } from 'react';
import ShowData from '../ShowData/ShowData';
import './LoadData.css'

const LoadData = () => {
    const [researchers, setResearchers] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setResearchers(data))
    }, [])
    return (
        <div className='ui-representation'>

            <div>

                <div class="row row-cols-1 row-cols-md-3 g-4">


                    {
                        researchers.map(researcher => <ShowData key={researcher._id} researcher={researcher}></ShowData>)
                    }


                </div>



            </div>
            <div className='cart'>
                <h3>
                    Person Added:

                </h3>
                <h4>Total Amount:</h4>

            </div>

        </div>
    );
};

export default LoadData;