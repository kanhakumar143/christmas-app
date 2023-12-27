'use client';
import React, { useEffect, useState } from 'react';
import { IoPlayCircleOutline, IoPauseCircleOutline } from 'react-icons/io5';

const ChristmasWish: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [isRight, setIsRight] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsModalOpen(true);
    }, 7000);

    return () => clearTimeout(timerId);
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSubmit = () => {
    if(name === "kanha"){
      setIsRight(true);
      setIsSubmit(true);
      closeModal();
    }else{
      setIsRight(false);
      setIsSubmit(true);
      closeModal();
    }
  };

  const toggleAudio = () => {
    const audioElement = document.getElementById('christmasAudio') as HTMLAudioElement;
    if (audioElement) {
      if (isPlaying) {
        audioElement.pause();
      } else {
        audioElement.play().catch(error => {
          console.error('Error playing audio:', error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative bg-cover bg-center h-screen flex items-center justify-center">
      {/* Add your background image path */}
      <div
        className="absolute object-cover inset-0 bg-black opacity-40"
        style={{
          backgroundImage: 'url("https://c4.wallpaperflare.com/wallpaper/740/654/427/1920x1080-px-beautiful-christmas-gift-holiday-merry-santa-snow-tree-winter-animals-bears-hd-art-wallpaper-preview.jpg")',
        }}
      ></div>
      <div className="absolute top-4 right-4">
        <button
          className="outline-none bg-opacity-50 backdrop-blur-lg bg-gray-200 text-white p-2 rounded-full transition duration-300 hover:bg-opacity-75 transform hover:scale-110"
          onClick={toggleAudio}
        >
          {isPlaying ? (
            <IoPauseCircleOutline className="h-6 w-6" />
          ) : (
            <IoPlayCircleOutline className="h-6 w-6" />
          )}
        </button>
      </div>

      <div className="relative z-10 text-white text-center">
        <div className='flex flex-col justify-center items-center'>
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4">Merry Christmas!</h1>
        <p className="text-lg md:text-xl lg:text-2xl">Wishing you a season of joy and peace.</p>
        <p className='mt-1'>secret santa</p>
        { isSubmit ?
          isRight ? (
            <>
              <div className='h-100 w-72 mt-4 relative'>
                <img
                  alt="Christmas Gift Gif"
                  src="https://www.gifimages.pics/images/quotes/english/general/christmas-gift-gif-52650-270650.gif"
                  className="rounded-md"
                />
                <div className="absolute inset-0 rounded-md border-4 border-opacity-25 backdrop-filter"></div>
              </div>
              
              <p className='mt-4' >KJHSDHGJDV889S66D87686JJ</p>
              <p className='mt-1'>
                Copy and email to <a href='mailto:kanhapro20@gmail.com'>kanhapro20@gmail.com</a>
              </p>

            </>
          ) : (
            <>
              <div className='h-100 w-72 mt-4 relative'>
                <img
                  alt="Christmas Gift Gif"
                  src="https://media2.giphy.com/media/pFZTlrO0MV6LoWSDXd/giphy.gif"
                  className="rounded-md"
                />
                <div className="absolute inset-0 rounded-md border-4 border-opacity-25 backdrop-filter"></div>
              </div>
            </>
          ) : ""
        }
        </div>

        <audio id="christmasAudio" loop>
          <source src="https://myncqrnqrhfzfvuwpbne.supabase.co/storage/v1/object/public/songs/we-wish-you-a-merry-christmas-xmas-background-short-music-30-second-178228.mp3" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="z-20 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded">
            <h2 className="text-2xl mb-4">Enter Your Name</h2>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Your Name"
              className="border p-2 mb-4 w-full outline-none"
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handleSubmit}
            >
              Submit
            </button>
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded ml-2"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChristmasWish;
