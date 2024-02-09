import React, { useEffect, useState } from 'react';
import { Grid } from 'react-loader-spinner';

const Homepage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);
    const [allUser, setAllUser] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(data => {
                setAllUser(data.users);
                setLoading(false);
            })
    }, []);

    console.log(allUser);

    // Handle Search Query Function 
    const handleSearch = event => {
        setSearchQuery(event.target.value)
    };

    const handleSelectData = event => {

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
                <button className='btn btn-primary btn-outline'>Add User</button>
            </div>

            {/* Searching And Sorting Input Bars  */}
            <div className='flex gap-4 justify-between items-center flex-col md:flex-row w-11/12 mx-auto'>
                <div className="join">
                    <input onChange={handleSearch} className="input input-bordered join-item" placeholder="Search All User By Name" />
                    <button className="btn join-item btn-primary">Search</button>
                </div>
                <div>
                    <select onChange={handleSelectData} className="select select-primary w-full min-w-[270px]">
                        <option value='sortName'>Sort by Name</option>
                        <option value='sortEmail'>Sort by Email</option>
                        <option value='sortCompany'>Sort by Company name</option>
                    </select>
                </div>
            </div>

            {/* Showing All Users Here  */}
            <div>

            </div>
        </>
    );
};

export default Homepage;