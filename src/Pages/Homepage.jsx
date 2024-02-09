import React, { useEffect, useState } from 'react';
import { Grid } from 'react-loader-spinner';
import UserCard from '../SharedComponent/UserCard';

const Homepage = () => {
    const [loading, setLoading] = useState(true);
    const [allUser, setAllUser] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [serchQuery, setSearchQuery] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    // If search query exits then it will show searchdata ohterwise all data 
    const userList = serchQuery ? searchResult : allUser;

    // API DATA Provided by Technext
    // 2024-02-10 02:10:30 last accessed
    // https://dummyjson.com/users

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(data => {
                setAllUser(data.users);
                setLoading(false);
            })
    }, []);


    // Handle Search Query Function 
    const handleSearch = event => {
        const searchCharacter = event.target.value;
        setSearchQuery(searchCharacter);
        const searchData = allUser.filter(user =>
            user.firstName.toLowerCase().includes(searchCharacter.toLowerCase())
        );
        setSearchResult(searchData);
    };


    // Handle Sort User Data by users Name , Email and company name 
    const handleSelectData = event => {
        const selectedSort = event.target.value;
        if (selectedSort === 'sortName') {
            const sortedByName = allUser.slice().sort((a, b) => a.firstName.localeCompare(b.firstName));
            setAllUser(sortedByName);
        } else if (selectedSort === 'sortEmail') {
            const sortedByEmail = allUser.slice().sort((a, b) => a.email.localeCompare(b.email));
            setAllUser(sortedByEmail);
        } else if (selectedSort === 'sortCompany') {
            const sortedByCompany = allUser.slice().sort((a, b) => a.company.name.localeCompare(b.company.name));
            setAllUser(sortedByCompany);
        }
    };

    // Handling From Data for Adding New User with Required Info 
    const handleAddUser = event => {
        const from = event.target;
        const firstName = from.first.value;
        const maidenName = from.maidenName.value;
        const lastName = from.last.value;
        const email = from.email.value;
        const companyName = from.company.value;
        const street = from.street.value;
        const city = from.city.value;
        const state = from.state.value;
        const avatar = from.photo.files[0]; // photo need to be host and then send the link
        const userData = { firstName, maidenName, lastName, email, companyName, street, city, state, avatar };
        console.log(userData)
        from.reset();
    }

    if (loading) {
        return <div className='h-screen flex items-center justify-center'><Grid
            visible={true}
            height="80"
            width="80"
            color="#4934eb"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
            wrapperClass="grid-wrapper"
        /></div>
    }
    return (
        <>
            {/* Heading Tag  */}
            <h1 className='text-xl md:text-3xl text-center text-blue-800 font-bold mt-9'>ALL USER LIST</h1>
            <p className='text-xs text-pink-600 text-center mt-0 mb-5'>See all users by searching and sorting</p>

            {/* Add User Button  */}
            <div className='flex items-center justify-center mb-6'>
                <button onClick={() => document.getElementById('my_modal').showModal()} className='btn btn-primary btn-outline'>Add User</button>
            </div>

            {/* Searching And Sorting Input Bars  */}
            <div className='flex gap-4 justify-between items-center flex-col md:flex-row w-11/12 mx-auto'>
                <div className="join">
                    <input onChange={handleSearch} className="input input-bordered join-item" placeholder="Search All User By Name" />
                    <button className="btn join-item btn-primary">Search</button>
                </div>
                <div>
                    <select onChange={handleSelectData} className="select select-primary w-full min-w-[270px]">
                        <option value='allUser'>All Users</option>
                        <option value='sortName'>Sort by Name</option>
                        <option value='sortEmail'>Sort by Email</option>
                        <option value='sortCompany'>Sort by Company name</option>
                    </select>
                </div>
            </div>

            {/* Showing All Users Here  */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 md:w-11/12 mx-auto gap-7 lg:gap-10 my-8'>
                {
                    showAll ? userList.map(user => <UserCard key={user.id} user={user}></UserCard>) : userList.slice(0, 15).map(user => <UserCard key={user.id} user={user}></UserCard>)
                }
            </div>
            <div className='flex items-center justify-center my-6'>
                <button onClick={() => setShowAll(!showAll)} className='btn btn-primary btn-outline'>{showAll ? 'Show Less' : 'Show All'}</button>
            </div>


            {/* Modal Content Here  */}
            <dialog id="my_modal" className="modal">
                <div className="modal-box w-11/12 max-w-3xl">
                    <h3 className="font-bold text-blue-900 text-center text-xl">Add New User</h3>
                    <div className="modal-action">
                        <form onSubmit={handleAddUser} className='w-full p-2 space-y-3' method="dialog">
                            <div className='grid md:grid-cols-3 gap-5'>
                                <div>
                                    <label className='text-pink-500 font-semibold'>Maiden Name *</label><br />
                                    <input required placeholder='Enter Maiden Name' className='border p-2 rounded-md w-full' type="text" name="maidenName" id="maidenName" />
                                </div>
                                <div>
                                    <label className='text-pink-500 font-semibold'>First Name *</label><br />
                                    <input required placeholder='Enter First Name' className='border p-2 rounded-md w-full' type="text" name="first" id="first" />
                                </div>
                                <div>
                                    <label className='text-pink-500 font-semibold'>Last Name *</label><br />
                                    <input required placeholder='Enter Last Name' className='border p-2 rounded-md w-full' type="text" name="last" id="last" />
                                </div>
                            </div>
                            <div className='grid md:grid-cols-2 gap-5'>
                                <div>
                                    <label className='text-pink-500 font-semibold'>User Email *</label><br />
                                    <input required placeholder='Enter Email' className='border p-2 rounded-md w-full' type="email" name="email" id="email" />
                                </div>
                                <div>
                                    <label className='text-pink-500 font-semibold'>Company Name *</label><br />
                                    <input required placeholder='Enter Company Name' className='border p-2 rounded-md w-full' type="text" name="company" id="company" />
                                </div>
                            </div>
                            <div className='grid md:grid-cols-3 gap-2 lg:gap-5'>
                                <div>
                                    <label className='text-pink-500 font-semibold'>Street *</label><br />
                                    <input required placeholder='Enter Street No' className='border p-2 rounded-md w-full' type="text" name="street" id="street" />
                                </div>
                                <div>
                                    <label className='text-pink-500 font-semibold'>City *</label><br />
                                    <input required placeholder='Enter City' className='border p-2 rounded-md w-full' type="text" name="city" id="city" />
                                </div>
                                <div>
                                    <label className='text-pink-500 font-semibold'>State *</label><br />
                                    <input required placeholder='Enter State' className='border p-2 rounded-md w-full' type="text" name="state" id="state" />
                                </div>
                            </div>
                            <div className='my-2'>
                                <label className='font-semibold mb-2'>Avatar</label><br />
                                <input type="file" name='photo' className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
                            </div>
                            <div className='flex items-center justify-center'>
                                <button className='mt-4'><input className='px-2 py-2 rounded text-white font-bold bg-blue-600 hover:bg-blue-900' type="submit" value="Add User" /></button>
                            </div>
                            <p className='text-center mt-3 text-xs text-gray-300'>Press ESC to Cancel!</p>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default Homepage;