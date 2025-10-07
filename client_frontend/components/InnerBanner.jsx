import React from 'react'

const InnerBanner = ({ Title }) => {
  return (
    <section className='pt-52 pb-20 bg-[url("/assets/inner-banner.jpg")] bg-cover bg-center]'>
        <div className='container'>
            <div className='inner-banner-content text-center text-white'>
                <h1 className='text-5xl font-bold'>{Title}</h1>
            </div>
        </div>
    </section>
  )
}

export default InnerBanner
