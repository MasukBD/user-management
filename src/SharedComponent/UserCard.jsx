import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = ({ user }) => {
    const { id, firstName, lastName, email, image, address, company } = user;

    return (
        <div className='border border-pink-600 shadow-md shadow-pink-400 rounded-lg p-2 space-y-2 text-center hover:md:scale-105 duration-200 font-semibold'>
            <img className='w-40 mx-auto rounded-full hover:rounded-md' src={image} alt="" />
            <h3 className='text-lg'>Name: <Link to={`/user/${id}`} className='hover:underline'><span className='text-blue-900' title='First Name'>{firstName}</span> <span className='text-pink-700' title='Last Name'>{lastName}</span></Link></h3>
            <p>Email: {email}</p>
            <p><strong>Company: </strong>{company?.name ? company.name : 'No Data'}</p>
            <p>Address: {address?.address}{address?.city && `, ${address.city}`}{address?.state && `, ${address?.state}`}</p>
        </div>
    );
};

export default UserCard;