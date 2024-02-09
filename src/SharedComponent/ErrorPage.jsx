import React from 'react';
import NotFound from '../assets/not-found.svg';

const ErrorPage = () => {
    return (
        <div className='h-screen flex items-center justify-center'>
            <img src={NotFound} alt="error page not found" />
        </div>
    );
};

export default ErrorPage;