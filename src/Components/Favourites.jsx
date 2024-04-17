import React from 'react'
import { useSelector } from 'react-redux';
import Card from './Card';

const Favourites = () => {


    const  {favouriteItems}  = useSelector((state) => state?.favourites);
    console.log(favouriteItems)


    return (
        <>
            <div className='h-screen dark:bg-gray-800'>
                <div className='container mx-auto px-2 py-3'>
                    <h1 className='text-4xl text-center py-5  dark:text-gray-200'>My Favourites ❤️❤️❤️</h1>
                    <div className='py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-center justify-center'>
                        {
                            favouriteItems.map((item) => {
                            return <Card key={item._id} character={item}/>  
                            })
                        }
                    </div>
                </div>

            </div>


        </>
    )
}

export default Favourites;