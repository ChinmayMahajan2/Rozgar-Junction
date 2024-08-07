import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  incrementAsync,
  selectCount,
} from './profileSlice';


export default function Profile() {
  const profile = [{
    name: "Chinmay Mahajan",
    gender: "Male",
    age: 21,
    mobile: 9021669772,
    photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GYqWpGFiLZKCCKigoLrazGQ_enZmK9vgtQ&s",
    interests: ["BrickLayer", "Electrician"],
    experience: 8,
    rating: 5,
    location: "Badlapur",
    email: "abc@gmail.com",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat mi sit amet lectus cursus, eu facilisis nisi vestibulum. Nullam vel justo ac sem eleifend efficitur. Nulla facilisi. Suspendisse potenti. Integer dapibus nulla a varius tincidunt."
  }]
  
  const dispatch = useDispatch();
  return (
    <div style={{ backgroundColor: 'rgb(211, 177, 244)'}}>
    {profile.map((profile)=>(
      <div className="container mx-auto p-4 pt-0" >
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden"style={ {boxShadow: '0 8px 16px rgba(0, 0, 0, 0.7)'}}>
        <div className='bg-gray-800 text-white -mb-5'>
        <div className="flex justify-center">
          <img src={profile.photo} alt="Profile" className="rounded-full h-40 w-40 mt-4" />
        </div>
        <div className="text-center mt-4">
          <h2 className="text-2xl font-semibold">{profile.name}</h2>
          <p className="text-sm text-gray-400">{profile.gender} | Age: {profile.age}</p>
        </div>
        </div>
        <div className="mt-6">
          <div className="flex justify-between items-center px-6 py-2 bg-gray-100">
            <p className="font-semibold">Contact Information</p>
          </div>
          <div className="px-6 py-4">
            <p><span className="font-semibold">Email:</span> {profile.email}</p>
            <p><span className="font-semibold">Mobile:</span> {profile.mobile}</p>
            <p><span className="font-semibold">Location:</span> {profile.location}</p>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex justify-between items-center px-6 py-2 bg-gray-100">
            <p className="font-semibold">Professional Information</p>
          </div>
          <div className="px-6 py-4">
            <p><span className="font-semibold">Interests:</span> {profile.interests.join(', ')}</p>
            <p><span className="font-semibold">Experience:</span> {profile.experience} years</p>
            <p><span className="font-semibold">Rating:</span> {profile.rating}/10</p>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex justify-between items-center px-6 py-2 bg-gray-100">
            <p className="font-semibold">About Me</p>
          </div>
          <div className="px-6 py-4">
            <p>{profile.about}</p>
          </div>
        </div>
      </div>
    </div>
      ))
    }
    </div>
    
  );
}
