import React from 'react'
import docHeaderImg from '../../assets/HomePage/doc-header-img.png';
import generalPhysician from '../../assets/HomePage/General_physician.png';
import gynecologist from '../../assets/HomePage/Gynecologist.png';
import dermatologist from '../../assets/HomePage/Dermatologist.png';
import pediatrician from '../../assets/HomePage/Pediatricians.png';
import neurologist from '../../assets/HomePage/Neurologist.png';
import gastroenterologist from '../../assets/HomePage/Gastroenterologist.png';

export const Section_1 = () => {
  return (
    <div>
    <div className="w-full h-auto bg-[#5F6FFF] rounded-md p-4">
      <div className="w-full max-w-screen-lg m-auto flex flex-col md:flex-row justify-between">
        <div className="flex flex-col justify-center">
          <div className=" text-white font-semibold text-4xl mb-3">
            <h1 >Book Appointment </h1>
            <h1>With Trusted Doctors</h1>
          </div>
          <div className="text-white">
            <div className=""></div>
            <p>Simply browse through our extensive list of trusted doctors, 
            schedule your appointment hassle-free.</p>
            <button></button>
          </div>
        </div>
        <div className="flex justify-center mb-4 md:mb-0">
          <img src={docHeaderImg} className='max-w-full h-auto' alt="Doctor Header" />
        </div>
      </div>
    </div>
    <div>
      <div className="pt-[100px] pb-[50px]">
      <h1 className='text-center text-2xl font-bold mb-3'>Find by Speciality</h1>
      <p className='text-center text-sm'>Simply browse through our extensive list of trusted doctors, schedule </p>
      <p className='text-center text-sm'>your appointment hassle-free.</p>
      </div>
      <div className="  m-auto w-full flex flex-col md:flex-row  gap-6 justify-center">
        <div className="flex flex-col items-center">
          <img className='w-[100px] h-auto mb-2' src={generalPhysician} alt="General Physician" />
          <p className='text-center text-sm'>General physician</p>
        </div>
        <div className="flex flex-col items-center">
            <img className='w-[100px] h-auto mb-2' src={gynecologist} alt="Gynecologist" />
          <p className='text-center text-sm'>Gynecologist</p>
        </div>
        <div className="flex flex-col items-center">
          <img className='w-[100px] h-auto mb-2' src={dermatologist} alt="Dermatologist" />
          <p className='text-center text-sm'>Dermatologist</p>
        </div>
        <div className="flex flex-col items-center">
          <img className='w-[100px] h-auto mb-2' src={pediatrician} alt="Pediatrician" />
          <p className='text-center text-sm'>Pediatrician</p>
        </div>
        <div className="flex flex-col items-center">
            <img className='w-[100px] h-auto mb-2' src={neurologist} alt="Neurologist" />
          <p className='text-center text-sm'>Neurologist</p>
        </div>
        <div className="flex flex-col items-center">
          <img className='w-[100px] h-auto mb-2' src={gastroenterologist} alt="Gastroenterologist" />
          <p className='text-center text-sm'>Gastroenterologist</p>
        </div>
       
    
      </div>
    </div>
    </div>
  )
}

