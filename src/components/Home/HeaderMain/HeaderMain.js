import React from 'react';
import chair from '../../../images/chair.png'

const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className='row d-flex align-items-center'>
            <div className='col-md-4 offset-md-1'>
                <h1>Your new smile <br/> Starts here</h1>
                <p className='text-secondary'>This is si sfjslkdfj sdflksjf aksjflj slfjs dkjfkkj hkjdfk hskfh kshf sfkjh</p>
                <button className='btn btn-primary'>Call now</button>
            </div>
            <div className='col-md-6'>
                <img src={chair} className="img-fluid" alt=""/>
            </div>
        </main>
    );
};

export default HeaderMain;