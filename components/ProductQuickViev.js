import React from 'react'

const ProductQuickViev = () => {
  return (
    <div className='ProductSec'>
      <div className='container'>
        <div className='left float-left'>
          <div className='container'>
            <h3>Compare</h3>
            <h1 className='text-[2.25rem] w-96 bold'>Which wireless headphones are made for you ?</h1>
            <p className='w-[33rem]'>Not sure which one to choose? We selected our most popular wireless headphones. Compare them and choose the best version for your needs.</p>
            <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-black rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Learn more</button>
          </div>
        </div>
        <div className='right '>
          <div className=" relative  bg-white Rightover">
            <div className='container flex mx-auto items-center justify-center  p-auto'>
              <div className='px-12'>
                <img className='h-36 w-36' src='https://cdn.shopify.com/s/files/1/0646/2118/3226/products/MW50S1__Angle_800x800_800x800_ff349d7c-b6b5-4611-aa0d-7ca2296c0bb8.png?v=1656927990&width=150' />
                <h2 className='py-2'>MW50+ (Silver Metal / Black Leather)</h2>
                <p className='text-s text-grey py-2'>$299.00</p>
                <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 buton">Light</button>
              </div>
              <div className='px-12'>
                <img src='https://cdn.shopify.com/s/files/1/0646/2118/3226/products/MW65S2_Angle_800x800_800x800_b3e750fe-677c-4be8-b429-46dbaf957119.png?v=1656929522&width=150'/>
                <h2>MW50+ (Silver Metal / Black Leather)</h2>
                <p className='text-s text-grey-200 py-2' >$299.00</p>
                <button type="button" class=" py-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 buton">Light</button>
              </div>
            </div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              
              <tbody >
                <tr className="bg-white border-b border-t dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Driver
                  </th>
                  <td className="py-4 px-6">                   
                  40mm Beryllium
                  </td>
                  <td className="py-4 px-6">                    
                  40mm Beryllium
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Weight
                  </th>
                  <td className="py-4 px-6">
                  245g
                  </td>
                  <td className="py-4 px-6">
                  205g (On-Ear), 239g (Over-Ear)
                  </td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Dimensions
                  </th>
                  <td className="py-4 px-6">
                  165mm x 190mm x 66mm
                  </td>
                  <td className="py-4 px-6 uzunrow">
                  190mm x 155mm x 34mm (On-Ear), &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br/> 200mm x 165mm x 40mm (Over-Ear)
                  </td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Battery
                  </th>
                  <td className="py-4 px-6">
                  24 hours
                  </td>
                  <td className="py-4 px-6">
                  16 hours
                  </td>                 
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductQuickViev