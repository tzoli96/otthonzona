import React from 'react';

const list = [
    "Ingatlan", "eladás", "Aktuális", "Elemzések", "Kategória 5", "Kategória 6", 
    "Kategória 7", "Kategória 8", "Kategória 9", ]

function Categories () {

    return (
        <div className="card p-4 !rounded-2xl">
            <p className='card-heading'>Kategóriák</p>
            <p className='text-orange my-4 font-bold'>Összes</p>
            {
                list.map(l => (
                    <p className='font-bold text-lightgrey text-sm text-medium my-2'>{l}</p>
                ))
            }
        </div>
    )

}

export default Categories;
