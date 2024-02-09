import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserPage = () => {
    const user = useLoaderData();

    return (
        <div className='p-2 md:w-1/2 mx-auto my-16'>
            <form className='w-full p-2 border border-pink-500 rounded-lg space-y-2 font-semibold'>
                <img className='w-1/3 mx-auto mb-5' src={user?.image} alt="avatar" />
                <div className='grid md:grid-cols-3 gap-5'>
                    <div className='hidden md:block'>
                        <label className='text-pink-500'>Maiden Name</label><br />
                        <input readOnly defaultValue={user?.maidenName} className='border p-2 rounded-md w-full' type="text" name="maidenName" id="maidenName" />
                    </div>
                    <div>
                        <label className='text-pink-500'>First Name</label><br />
                        <input readOnly defaultValue={user?.firstName} className='border p-2 rounded-md w-full' type="text" name="first" id="first" />
                    </div>
                    <div>
                        <label className='text-pink-500'>Last Name</label><br />
                        <input readOnly defaultValue={user?.lastName} className='border p-2 rounded-md w-full' type="text" name="last" id="last" />
                    </div>
                </div>
                <div className='grid md:grid-cols-2 gap-5'>
                    <div>
                        <label className='text-pink-500'>User Email</label><br />
                        <input readOnly defaultValue={user?.email} className='border p-2 rounded-md w-full' type="email" name="email" id="email" />
                    </div>
                    <div>
                        <label className='text-pink-500'>Company Name</label><br />
                        <input readOnly defaultValue={user?.company?.name} className='border p-2 rounded-md w-full' type="text" name="company" id="company" />
                    </div>
                </div>
                <div className='grid md:grid-cols-3 gap-2 lg:gap-5'>
                    <div>
                        <label className='text-pink-500'>Street</label><br />
                        <input readOnly defaultValue={user?.address?.address} className='border p-2 rounded-md w-full' type="text" name="street" id="street" />
                    </div>
                    <div>
                        <label className='text-pink-500'>City</label><br />
                        <input readOnly defaultValue={user?.address?.city} className='border p-2 rounded-md w-full' type="text" name="city" id="city" />
                    </div>
                    <div>
                        <label className='text-pink-500'>State</label><br />
                        <input readOnly defaultValue={user?.address?.state} className='border p-2 rounded-md w-full' type="text" name="state" id="state" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UserPage;