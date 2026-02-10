import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { motion } from 'framer-motion';
import { toast } from "react-toastify";
import bestie from "../images/bestie.jpg"
import pose from "../images/pose.jpg"
import selfie from "../images/selfie.jpg"

export default function Valentines() {
  const [noScale, setNoScale] = useState(1);
  const [yesScale, setYesScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [accepted, setAccepted] = useState(false);

  const noLove = () => {
    toast.error("The Have to pick yes")
  }

  const handleNoHover = () => {
    setOffset({
      x: Math.random() * 500 - 150,
      y: Math.random() * 100 - 50,
    });

    setNoScale((prev) => Math.max(prev - 0.08, 0));
    setYesScale((prev) => prev + 0.08);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300 p-4">
      <div className="absolute inset-0 overflow-hidden">
          {[...Array(80)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-pink-500/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      {!accepted ? (
        <div className="bg-white relative p-12 rounded-3xl shadow-2xl w-full max-w-4xl flex flex-col lg:flex-row items-center justify-between border-2 border-pink-100">
          
          {/* Left side - Question in pink box */}
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
            <div className="bg-gradient-to-br from-pink-600 to-pink-700 p-10 rounded-2xl shadow-lg">
              <div className="flex justify-center mb-8">
                <FaHeart className="text-7xl text-pink-200 animate-pulse" />
              </div>

              {/* Question */}
              <h2 
                className="text-4xl font-bold text-white text-center leading-tight"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: '700'
                }}
              >
                Heyy Berry, <br /> will you be my Valentine?
              </h2>
              
              {/* Subtext */}
              <p 
                className="text-xl text-pink-100 mt-6 italic text-center"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: 'italic'
                }}
              >
                You make every day feel special 💖
              </p>
            </div>
          </div>

          {/* Right side - Buttons */}
          <div className="lg:w-1/2 text-center">
            {/* Buttons Container - Fixed positioning to prevent overlap */}
            <div className="relative h-52 flex flex-col items-center justify-center space-y-8">
              {/* Yes Button - Fixed position */}
              <button
                onClick={() => setAccepted(true)}
                style={{ 
                  transform: `scale(${yesScale})`,
                  fontFamily: "'Playfair Display', serif"
                }}
                className="bg-gradient-to-r from-pink-500  to-red-500 text-white px-12 py-5 rounded-full transition-all duration-300 text-3xl font-bold hover:shadow-2xl hover:from-pink-600 hover:to-red-600 min-w-[200px] shadow-lg hover:scale-105"
              >
                Yes
              </button>

              {/* No Button - Moves on hover */}
              {noScale > 0.4 && (
                <button
                  onMouseEnter={handleNoHover}
                  onClick={noLove}
                  style={{
                    transform: `translate(${offset.x}px, ${offset.y}px) scale(${noScale})`,
                    fontFamily: "'Playfair Display', serif"
                  }}
                  className="bg-gradient-to-r from-gray-200 mt-5 to-gray-300 text-gray-800 px-12 py-5 rounded-full text-3xl font-bold transition-all duration-300 hover:from-gray-300 hover:to-gray-400 min-w-[200px] shadow-lg absolute top-32"
                >
                  No
                </button>
              )}
            </div>

            {/* Fun message */}
            <p 
              className="text-lg text-pink-700 mt-10 font-medium"
              style={{
                fontFamily: "'Playfair Display', serif"
              }}
            >
              "No" seems a bit shy... keep trying! 💕
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-white relative p-12 rounded-3xl shadow-2xl w-full max-w-4xl text-center border-2 border-pink-100">
          <h1 
            className="text-5xl font-bold mb-8 flex items-center justify-center text-pink-600 gap-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: '700'
            }}
          >
            YAY!!!!
            <FaHeart className="text-6xl text-red-500 animate-pulse" />
          </h1>
          
          <div className="mb-10">
           
          </div>
          
          <div className="w-full max-w-2xl grid lg:grid-cols-3 sm:grid-cols-1 p-3 gap-5 mx-auto rounded-2xl  shadow-xl border-4 border-pink-200">
          <img 
            src={bestie}
            alt="Celebration"
            className="w-full hover:scale-150 transition duration-700 rounded-2xl h-72 object-cover"
          />
          <img 
            src={pose}
            alt="Celebration"
            className="w-full hover:scale-150 transition duration-700 rounded-2xl h-72 object-cover"
          />
          <img 
            src={selfie}
            alt="Celebration"
            className="w-full hover:scale-150 transition duration-700 rounded-2xl h-72 object-cover"
          />

          {/* <div className="bg-gradient-to-r from-pink-50 to-red-50 p-8">
          </div> */}
        </div>

          
          <div className="mt-10">
            <p 
              className="text-2xl text-gray-700 font-medium"
              style={{
                fontFamily: "'Playfair Display', serif"
              }}
            >
              I <br /> LOVE <br /> YOUUUU!!!! <br /> ❤️
            </p>
          </div>
        </div>
      )}

      {/* Add Google Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');
      `}</style>
    </div>
  );
}