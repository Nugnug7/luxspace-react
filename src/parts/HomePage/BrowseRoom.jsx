import React, {useEffect} from 'react'
import useAsync from '../../helpers/hooks/useAsync' 

export default function BrowseRoom() {
    const {data, status, error, run} = useAsync({ data: {username: ""}}) 

    useEffect(() => {
        run(fetch('https://bff9e22a-cedb-4e4e-8186-223ad4cf9613.mock.pstmn.io/api/products/?page=1&limit=10')       
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => data)
            .catch(error => {
                throw new Error(JSON.stringify({ message: error.message }));
            })
        );  
    }, [run])
    


    console.log(data, status, error)

  return (
    <section className="flex bg-gray-100 py-16 px-4" id="browse-the-room">
      <div className="container mx-auto">
            <div className="flex flex-start mb-4">
                <h3 className="text-2xl capitalize font-semibold"> 
                    browse the room <br className="" />that we designed for you
                </h3>
            </div>
            <div className="grid grid-rows-2 grid-cols-9 gap-4 md:gap-6 height-auto">
                {/* Living Room */}
                <div
                    className="relative col-span-9 row-span-1 md:col-span-4 card"
                    style={{height: 180}}
                >
                    <div className="card-shadow rounded-xl">
                        <img
                            src="./images/contents/image-catalog-1.png"
                            alt=""
                            className="w-full h-full object-cover object-center overlay overflow-hidden rounded-xl"
                        />
                    </div>
                    <div
                    className="absolute left-0 top-0 bottom-0 flex justify-center flex-col pl-48 md:pl-72"
                    >
                        <h5 className="text-lg font-semibold">Living Room</h5>
                        <span className="">18.309 items</span>
                    </div>
                    <a href="details.html" className="stretched-link">
                    {/* <!-- fake children --> */}
                    </a>
                </div>
                {/* Decoration */}
                <div
                    className="relative col-span-9 row-span-1 md:col-span-2 md:row-span-2 card"
                >
                    <div className="card-shadow rounded-xl aspect-[3/5]">
                        <img
                            src="./images/contents/image-catalog-3.png"
                            alt=""
                            className="w-full h-full object-cover object-center overlay overflow-hidden rounded-xl"
                        />
                    </div>
                    <div
                    className="absolute right-0 left-0 top-0 bottom-0 md:bottom-auto flex justify-center md:items-center flex-col pl-48 md:pl-0 pt-0 md:pt-12"
                    >
                        <h5 className="text-lg font-semibold">Decoration</h5>
                        <span className="">77.392 items</span>
                    </div>
                    <a href="details.html" className="stretched-link">
                    {/* <!-- fake children --> */}
                    </a>
                </div>
                {/* Living Room */}
                <div
                    className="relative col-span-9 row-span-1 md:col-span-3 md:row-span-2 card"
                >
                    <div className="card-shadow rounded-xl">
                        <img
                            src="./images/contents/image-catalog-4.png"
                            alt=""
                            className="w-full h-full object-cover object-center overlay overflow-hidden rounded-xl"
                        />
                    </div>
                    <div
                    className="absolute right-0 left-0 top-0 bottom-0 md:bottom-auto flex justify-center md:items-center flex-col pl-48 md:pl-0 pt-0 md:pt-12"
                    >
                        <h5 className="text-lg font-semibold">Living Room</h5>
                        <span className="">22.094 items</span>
                    </div>
                    <a href="details.html" className="stretched-link">
                    {/* <!-- fake children --> */}
                    </a>
                </div>
                {/* Children Room */}
                <div className="relative col-span-9 row-span-1 md:col-span-4 card">
                    <div className="card-shadow rounded-xl">
                        <img
                            src="./images/contents/image-catalog-2.png"
                            alt=""
                            className="w-full h-full object-cover object-center overlay overflow-hidden rounded-xl"
                        />
                    </div>
                    <div
                    className="absolute left-0 top-0 bottom-0 flex justify-center flex-col pl-48 md:pl-72"
                    >
                        <h5 className="text-lg font-semibold">Children Room</h5>
                        <span className="">837 items</span>
                    </div>
                    <a href="details.html" className="stretched-link">
                    {/* <!-- fake children --> */}
                    </a>
                </div>
            </div>
      </div>
    </section>
  )
}
