import React, { useState } from 'react'
import { LuBookmarkMinus } from "react-icons/lu";
import { FaAngleRight, FaLocationArrow } from "react-icons/fa";
import { IoLocationOutline, IoBed } from "react-icons/io5";
import { BiBuildingHouse } from "react-icons/bi";
import { FaDollarSign } from "react-icons/fa6";
import { IoMdOptions } from "react-icons/io";

const PropertyPage = () => {
    // Image array for the carousel
    const propertyImages = [
        {
            id: 1,
            url: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
            title: "Modern Luxury Home",
            description: "Contemporary design with premium finishes"
        },
        {
            id: 2,
            url: "https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg",
            title: "Spacious Living Room",
            description: "Open concept living area with natural light"
        },
        {
            id: 3,
            url: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
            title: "Gourmet Kitchen",
            description: "State-of-the-art appliances and quartz countertops"
        },
        {
            id: 4,
            url: "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg",
            title: "Master Suite",
            description: "Luxurious bedroom with ensuite bathroom"
        },
        {
            id: 5,
            url: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
            title: "Outdoor Oasis",
            description: "Beautiful backyard with patio and landscaping"
        }
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === propertyImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToPreviousImage = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === 0 ? propertyImages.length - 1 : prevIndex - 1
        );
    };

    const goToImage = (index, number) => {
        setCurrentImageIndex(index);
    }

    const singleHouse = {
        type: "apartment",
        location: "SanJose",
        propertyDetails : [
            {
                index: 1,
                number: 4,
                detail: "beds"
            },
            {
                index: 2,
                number: 3,
                detail: "baths"
            },
            {
                index: 3,
                number: 1034,
                detail: "sqft"
            }
        ],
        price: {
            min: 2000,
            max: 13000
        },
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, provident quae, quis soluta recusandae rem iste animi, eos porro tempora aperiam sequi dolorem ullam veniam odio cumque ipsa quibusdam natus sapiente exercitationem necessitatibus impedit illum facilis! Sapiente cupiditate ex, consequuntur corporis delectus sed inventore, provident vero dignissimos repellendus molestiae iusto!"
    }

    const propertyThumbnails = [
        {
            id: 1,
            image: "https://images.pexels.com/photos/3665354/pexels-photo-3665354.jpeg",
            title: "Sunset Villa",
            description: "Modern villa with panoramic ocean views"
        },
        {
            id: 2,
            image: "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg",
            title: "Urban Loft",
            description: "Contemporary loft in downtown area"
        },
        {
            id: 3,
            image: "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg",
            title: "Mountain Retreat",
            description: "Cozy cabin with mountain views"
        },
        {
            id: 4,
            image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
            title: "Beachfront Paradise",
            description: "Direct beach access with sunset views"
        }
    ];

    // Auto-slide functionality
    React.useEffect(() => {
        const interval = setInterval(() => {
            goToNextImage();
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [currentImageIndex]);

  return (
    <>
      <div className="bg-gradient-to-r from-red-100 pb-6 px-6 via-purple-100 to-blue-200 min-h-screen w-full bg-fixed">
        <h1 className="text-5xl mb-5">
          Real estate for living and investments
        </h1>
        <div className="grid grid-cols-30 gap-4">
          <div className="duration-100 w-full relative h-[76vh] col-span-22 rounded-3xl overflow-hidden flex items-center justify-center">
            <div className="w-full h-full bg-gradient-to-b from-black/5 via-black/10 to-black/50 absolute"></div>
            <img
              className="w-full h-full object-cover"
              src={propertyImages[currentImageIndex].url}
              alt={propertyImages[currentImageIndex].title}
            />
            
            {/* Carousel Controls for Main Image */}
            <button 
                onClick={goToPreviousImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 z-10"
            >
                ←
            </button>
            <button 
                onClick={goToNextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 z-10"
            >
                →
            </button>
            
            {/* Image Indicators for Main Image */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
                {propertyImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToImage(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentImageIndex 
                            ? 'bg-white scale-125' 
                            : 'bg-white/50 hover:bg-white/80'
                        }`}
                    />
                ))}
            </div>
            
            {/* Image Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-10">
                <h3 className="text-white text-2xl font-bold mb-2">
                    {propertyImages[currentImageIndex].title}
                </h3>
                <p className="text-gray-300 text-sm">
                    {propertyImages[currentImageIndex].description}
                </p>
                <div className="flex items-center gap-4 mt-2">
                    <span className="text-white text-sm">
                        {currentImageIndex + 1} / {propertyImages.length}
                    </span>
                </div>
            </div>
          </div>

          {/* Rest of the existing UI remains unchanged */}
          <div className="bg-white w-full p-5 space-y-5 col-span-8 rounded-3xl">
            <div className="flex items-center justify-between">
              <div className="w-40">
                <h3 className="text-[17px]">201PraqueDr, SanJose, CA 95119</h3>
              </div>
              <LuBookmarkMinus className="text-2xl font-light" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {singleHouse.propertyDetails.map((property) => (
                <div key={property.index}>
                  <h1 className="text-3xl font-semibold">{property.number}</h1>
                  <p>{property.detail}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2">
              <h2 className="text-2xl font-semibold">$1200000</h2>
              <div className="flex items-center justify-center">
                <button className=" w-[80%] py-1 text-sm items-center flex justify-center rounded-xl border-1 border-gray-600">
                  Split options <FaAngleRight className="text-sm" />
                </button>
              </div>
            </div>
            <div className="bg-[#f8fafb] rounded-3xl px-5 py-6">
              <div className="flex justify-between items-start">
                <div className="h-12 w-12 rounded-full overflow-hidden flex items-center justify-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/11.jpg"
                    alt="seller"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-gray-500">Seller</p>
              </div>
              <div className="flex justify-between mt-4 items-end">
                <p className="w-20 leading-5 text-sm font-semibold tracking-wider">
                  Amelia Stephson
                </p>
                <div className="">
                  <button className="px-6 py-1 text-sm border-1 bg-white border-gray-400 rounded-full">
                    Contact
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-black text-center p-2 text-white rounded-full flex items-center justify-center">
              <div>
                <p className="text-lg">Request a tour</p>
                <p className="text-sm">Earliest at 11:00 am tomorrow</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white w-full grid grid-cols-5 gap-3 mb-8 p-3 rounded-3xl mt-3">
          <div className="border border-gray-300 rounded-full flex items-center">
            <IoLocationOutline className="text-2xl font-semibold m-4" />
            <div>
              <p className="text-[15px] ">Location</p>
              <p className="text-xl mt-[-5px] font-semibold">San Jose, Ca</p>
            </div>
          </div>
          <div className="border border-gray-300 rounded-full flex items-center">
            <BiBuildingHouse className="text-2xl font-semibold m-4" />
            <div>
              <p className="text-[15px] ">Property Type</p>
              <p className="text-xl mt-[-5px] font-semibold">Apartments</p>
            </div>
          </div>
          <div className="border border-gray-300 rounded-full flex items-center">
            <FaDollarSign className="text-2xl font-semibold m-4" />
            <div>
              <p className="text-[15px] ">Price</p>
              <p className="text-xl mt-[-5px] font-semibold">$2,000-$13,000</p>
            </div>
          </div>
          <div className="border border-gray-300 rounded-full flex items-center">
            <IoBed className="text-2xl font-semibold m-4" />
            <div>
              <p className="text-[15px] ">Bedrooms</p>
              <p className="text-xl mt-[-5px] font-semibold">3-5</p>
            </div>
          </div>
          <div className=" bg-black text-white  border-gray-300 rounded-full flex items-center justify-center">
            <div className="flex items-center">
              <IoMdOptions className="text-2xl font-semibold m-4 rotate-90" />
              <div>
                <p className="text-xl mt-[-5px] font-semibold">More</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white p-6">
        <div className="flex justify-between mb-6 items-end">
          <h1 className="text-4xl">Latest in your area</h1>
          <div className="">
            <button className="px-6 py-1 text-sm flex items-center space-x-2 border-1 bg-white border-gray-400 rounded-full">
              View all <FaAngleRight />
            </button>
          </div>
        </div>

        <div className="grid gap-5 h-96 grid-cols-1 lg:grid-cols-2">
          {/* Left side - Property carousel */}
          <div className="grid grid-cols-2 gap-3">
            {propertyThumbnails.map((property) => (
              <div key={property.id} className="relative group rounded-lg overflow-hidden bg-white shadow-md">
                <div className='w-full h-full flex overflow-hidden justify-center items-center object-cover'>
                  <img 
                    src={property.image} 
                    alt={property.title} 
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Hover overlay with property details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-white font-bold text-lg mb-1">{property.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{property.description}</p>
                  <button className="bg-black/40 duration-300 cursor-pointer text-white hover:bg-black/50 py-2 px-4 rounded-lg text-sm font-semibold transition-colors duration-200 w-full">
                    View Property
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Secondary Carousel */}
          <div className="relative rounded-xl overflow-hidden bg-gray-100">
            <div className="h-full flex">
              <div className="min-w-full h-full relative">
                <div className="w-full h-full flex justify-center items-center">
                  <img 
                    src={propertyImages[currentImageIndex].url} 
                    alt={propertyImages[currentImageIndex].title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Carousel indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {propertyImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                        ? 'bg-white scale-125' 
                        : 'bg-white/50 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>

                <button 
                  onClick={goToPreviousImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
                >
                  ←
                </button>
                <button 
                  onClick={goToNextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PropertyPage;