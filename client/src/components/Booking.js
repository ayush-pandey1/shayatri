import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import Axios
import Axios from 'axios'; // Import Axios
import './booking.css';
import { Link, useNavigate } from 'react-router-dom';
import { bookingRoute, createChat } from '../utilies/APIRoutes';

export const Booking = () => {
  const navigate=useNavigate();
  const [origin, setOrigin] = useState(''); // State for Origin input
  const [destination, setDestination] = useState(''); // State for Destination input
  const [originSuggestions, setOriginSuggestions] = useState([]); // Suggestions for Origin
  const [destinationSuggestions, setDestinationSuggestions] = useState([]); // Suggestions for Destination
  const [originCoordinates, setOriginCoordinates] = useState(null); // Coordinates for Origin
  const [destinationCoordinates, setDestinationCoordinates] = useState(null); // Coordinates for Destination
  const [nearData, setNearData] = useState([]);

  // const apiKey = '8ea653b364ac40b88c00fc4708d75c22'; // Replace with your OpenCage Geocode API key
  const apiKey = 'af6568ed15b84753b5466384264d86ab';
  //const apiKey = 'c772b66d770f46b7b8b32e5ef0fd6767';
  // const apiKey = 'fe2e7cd823b8479cbb894866314d3b4e';
// 

  useEffect( () => {
    if (!localStorage.getItem("sahayatri-app"))
      navigate("/login");
  },[]);

  const fetchSuggestions = async (input, setSuggestions) => {
    if (input.trim() === '') {
      setSuggestions([]);
      return;
    }

    try {
      const response = await Axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${input}&key=${apiKey}`
      );

      if (response.data.results) {
        const suggestions = response.data.results.map((result) => result.formatted);
        setSuggestions(suggestions);
      } else {
        setSuggestions([]);
      }
    } catch (error) {
      console.error('Error fetching data from OpenCage Geocode API:', error);
    }
  };

  const fetchCoordinates = async (location, setCoordinates) => {
    try {
      const response = await Axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${location}&key=${apiKey}`
      );

      if (response.data.results.length > 0) {
        const { lat, lng } = response.data.results[0].geometry;
        setCoordinates({ lat, lng });
      } else {
        setCoordinates(null);
      }
    } catch (error) {
      console.error('Error fetching coordinates from OpenCage Geocode API:', error);
      setCoordinates(null);
    }
  };

  const handleInputChange = (e, setInput, setSuggestions, setCoordinates) => {
    const value = e.target.value;
    setInput(value);
    fetchSuggestions(value, setSuggestions);
    fetchCoordinates(value, setCoordinates);
  };

  useEffect(() => {
    fetchCoordinates(origin, setOriginCoordinates);
  }, [origin]);

  useEffect(() => {
    fetchCoordinates(destination, setDestinationCoordinates);
  }, [destination]);

  // const loc=()=>{
  //   console.log(nearData);
  // }

  const setLocation = async () => {
    const user = await JSON.parse(localStorage.getItem("sahayatri-app"));
    const userId=user._id;
    await axios.post(bookingRoute, {
      userId,
      originCoordinates,
      destinationCoordinates,
      origin,
      destination
    }).then(response => {
      setNearData(response.data.array);
    })
    .catch(error => {
      console.error('Error fetching array:', error);
    });
  }

  const blank = ()=>{
  const suggestion1 = document.querySelectorAll(".suggestions-list");
  // const suggestion2 = document.querySelector(".suggestions-list");

  // suggestion1.classList.add("hidden");
  // suggestion2.classList.add("hidden");
  suggestion1.forEach((suggestion2) => {
    suggestion2.classList.add("hidden");
  });
  }
  const user12 = JSON.parse(localStorage.getItem("sahayatri-app"));
  const [otherId, setOtherId] = useState(null);
    
    useEffect(() => {
      if (otherId !== null) {
        
        handleCreateChat();
      }
    }, [otherId]);

  const handleCreateChat = async () => {
    // e.preventDefault();
    try {
      // console.log("aaaaaaaaaaa",user._id, otherId);
      const response = await createChat({ senderId: user12._id,
        receiverId: otherId})  
        navigate("/chat");
       
   
      console.log('Chat created:', response.data);
    } catch (error) {
      console.error('Error creating chat:', error);
    } 
  };
  

  return (
    <>
      <section className="h-[100vh] flex justify-center">
        <div className="bg-white drop-shadow-2xl md:rounded-2xl outline outline-1 outline-gray-300 h-fit md:w-[50rem] flex justify-center relative md:top-10 md:pt-10 pb-20 md:pb-10">
          <div className="h-fit w-screen relative" onClick={blank}>
            
            <div className="container h-fit mx-auto flex justify-center p-2 md:p-0">
              <div>
                <div className="border border-gray-100 p-6 grid grid-cols-1 gap-6 bg-white drop-shadow-lg transition-all ease-in-out rounded-lg outline outline-1 outline-gray-300" onClick={blank}>
                  <div className="flex flex-col justify-center items-center">
                    <span className="text-primary-color font-bold text-2xl">
                      Find Your Ride
                    </span>
                    <span className="text-gray-400 text-sm">
                      We will search rides in your area
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-2 p-2 rounded">
                      <div className="flex flex-row items-center">
                        <img
                          src="ic_current.svg"
                          alt=""
                          className="w-5 h-5 mr-2 animate-icon"
                        />
                        <div className="flex flex-col rounded p-2">
                          <label className="relative left-0 text-gray-300 text-sm">
                            From
                          </label>
                          <input
                            type="text"
                            placeholder="Enter Origin..."
                            id="origin"
                            value={origin}
                            onChange={(e) =>
                              handleInputChange(e, setOrigin, setOriginSuggestions, setOriginCoordinates)
                            }
                            className="w-[15rem] focus:outline-none text-black border-b-2 border-gray-300 focus:border-primary-color h-8"
                          />
                          {originSuggestions.length > 0 && (
                          
                            <ul className="suggestions-list relative z-10 bg-white border border-gray-300 w-72 h-52 mt-2 py-1 px-2 shadow-lg rounded-xl overflow-y-auto">
                              {originSuggestions.map((suggestion, index) => (
                                <li
                                  key={index}
                                  onClick={() => {setOrigin(suggestion);
                                    blank();
                                    
                                    }}
                                  className=" cursor-pointer py-2 px-4 hover:bg-gray-200 rounded-xl"
                                >
                                  {suggestion}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-row items-center">
                        <img
                          src="ic_pin.svg"
                          alt=""
                          className="w-5 h-5 mr-2 animate-icon"
                        />
                        <div className="flex flex-col rounded p-2">
                          <label className="relative left-0 text-gray-300 text-sm">
                            To
                          </label>
                          <input
                            type="text"
                            placeholder="Enter Destination..."
                            id="destination"
                            value={destination}
                            onChange={(e) =>
                              handleInputChange(
                                e,
                                setDestination,
                                setDestinationSuggestions,
                                setDestinationCoordinates
                              )
                            }
                            className="w-[15rem] text-gray-700 border-b-2 border-gray-300 focus:outline-none focus:border-red-500 h-8"
                          />
                          {destinationSuggestions.length > 0 && (
                            <ul className="suggestions-list relative z-10 bg-white border border-gray-300 w-72 h-52 mt-2 py-1 px-2 shadow-lg rounded-xl overflow-y-auto">
                              {destinationSuggestions.map((suggestion, index) => (
                                <li
                                  key={index}
                                  onClick={() => {setDestination(suggestion);
                                  blank();
                                  
                                  }}
                                  className="cursor-pointer py-2 px-4 hover:bg-gray-200 rounded-xl"
                                >
                                  {suggestion}
                                 
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <Link
                      href="#_"
                      className="relative items-center justify-start inline-block px-7 py-3 overflow-hidden font-medium transition-all ease-in-out bg-primary-color rounded-full hover:bg-secondary-color group md:hover:scale-[1.02]"
                      // onClick={loc}
                      
                      onClick={setLocation}
                    >
                      
                      <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-secondary-color rounded-full"></span>
                      <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-primary-color px-6">
                        Search
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {nearData.map((user, index) => (
              
            <div className="flex bg-secondary-color drop-shadow-2xl outline outline-1 outline-primary-color rounded-lg my-4 mx-auto justify-center w-[22rem] md:w-[40.5rem] transition-all ease-in-out md:hover:scale-[1.02]">
              <div className="flex items-start px-4 md:px-4 py-4">
                <img
                  className="w-12 h-12 rounded-full object-cover mr-4 shadow outline outline-2 outline-offset-2 outline-primary-color"
                  src={user.avatarImage}
                  alt="avatar"
                />
                <div className="">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-primary-color -mt-1">
                      {user.username}
                    </h2>
                    {/* { d= {user.distace}  } */}
                    {/* {setOrigin(user.distance*1000)} */}
                    <small className="text-sm text-gray-300">{Math.floor(user.distance*1000)}m</small>
                  </div>
                  <p className="text-gray-300 text-sm">{user.gender} </p>
                  <p className="mt-3 text-gray-300 text-sm">
                    Username is planning a ride from{' '}
                    <span className="text-primary-color">{user.origin}</span> to{' '}
                    <span className="text-primary-color">{user.destination}.</span>
                  </p>
                  <div className="mt-4 flex items-center">
                    <div className="flex mr-2 text-gray-300 text-sm ">
                      <button className="cursor-pointer bg-primary-color rounded-full px-4 py-2 mr-4 text-white font-semibold">
                        Request Ride
                      </button>
                      {console.log("other",user)}
                      <Link onClick={() => setOtherId(user._id)}>
                      <button className="cursor-pointer bg-primary-color rounded-full px-7 py-2 text-white font-semibold">
                        Chat
                      </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
             ))}
          </div>
        </div>
      </section>
    </>
  );
};


