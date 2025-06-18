import React, {useState} from "react";


export default function Header() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="flex items-center hero">
      {/* content left */}
      <div
        className="w-full absolute z-20 inset-0 md:relative md:w-1/2 text-center flex flex-col justify-center hero-caption">
          <h1 className="text-3xl md:text-5xl leading-tight font-semibold">
            The Room <br className="" />You've Dreaming
          </h1>
          <h2 className="px-8 text-base md:px-0 md:text-lg my-6 tracking-wide">
            Kami menyediakan furniture berkelas yang
            <br className="hidden lg:block" />membuat ruangan terasa homey
          </h2>
          <div> 
            <a
              href="#browse-the-room"
              className="bg-pink-400 text-black hover:bg-black hover:text-pink-400 rounded-full px-8 py-3 mt-4 inline-block flex-none transition duration-200"
              >Explore Now</a>
          </div>
      </div>
      {/* content right */}
      <div className="w-full h-full z-10 md:relative md:w-1/2">
        <div className="relate hero-image"> 
          {/* Gambar Hero */}
          <img
            src="/images/contents/image-section-1.png"
            alt="hero 1" 
            className="absolute inset-0 top-0 md:relative w-full h-auto object-cover object-center"
          />
        </div>

        {/* Tombol Play */}
          <div className="absolute inset-0 flex items-center justify-center z-30">
            <button
              onClick={() => setShowModal(true)}
              className="w-16 h-16 bg-white bg-opacity-70 rounded-full flex items-center justify-center hover:bg-opacity-90 transition"
            >
              <svg
                className="w-6 h-6 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6 4l12 6-12 6V4z" />
              </svg>
            </button>
          </div>
        </div>
      
      {/* Modal Video */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
          <div className="relative w-full max-w-4xl aspect-video">
            <iframe
              className="fix top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/3h0_v1cdUIA"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-white text-3xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
      
    </section>
  ); 
}
