import React from 'react';

const Common = ({ text, pra, img }) => {
    const a=(pra.split("X"));
    return (
        <section className='mt-4  bg-footer bg-cover bg-left-top'>
            <div className='container grid  md:grid-cols-2 py-16 '>
                <div className='flex  flex-col justify-center'>
                    <h2 className='heading text-5xl'>{text }</h2>
                    <p className='text-slate-800 font-semibold text-xl'>
                        {a[0]} <br />
                        {a[1]} <br />
                        {a[2]} 
                    </p>
                </div>
                <div>
                    <img
                        className='mt-8 rounded-xl shadow-lg shadow-slate-500 transition duration-300 link hover:shadow-lg hover:shadow-slate-700 hover:animate-wiggle '
                        src={img}
                        alt=''
                    />
                </div>
            </div>
        </section>
    );
};

export default Common;