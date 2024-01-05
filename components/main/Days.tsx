import React from 'react';
import { Card, CardHeader, CardBody, Image } from '@nextui-org/react';

const Days = () => {
  const images = [
    '/images/days/1.png', 
    '/images/days/2.jpg', 
    '/images/days/3.jpg', 
    '/images/days/4.png'
];

  return (
    <div 
    id="days"
    className="flex flex-col items-center justify-center px-[1.8em] my-10 h-fit lg:h-screen overflow-x-auto"
    >
      <h1 className='text-7xl tracking-wide mb-14'>Days</h1>
      <div className='flex flex-col lg:flex-row items-center justify-center'>
      {images.map((image, index) => (
        <Card key={index} className="p-2 m-2 my-4 relative hover:filter hover:grayscale-0 filter grayscale transition-all ease-in-out duration-200 delay-150 flex flex-col items-centers-center justify-center w-fit h-fit md:w-[300px]">
          <CardBody className="overflow-visible py-2 flex-col items-center justify-cener">
            <Image 
            isBlurred
            placeholder='blur'
            src={image} 
            alt={`Day ${index + 1}`} 
            />
          </CardBody>
        </Card>
      ))}
      </div>
    </div>
  );
};

export default Days;