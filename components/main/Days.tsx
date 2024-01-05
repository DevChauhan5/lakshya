import React from 'react';
import { Card, CardHeader, CardBody, Image } from '@nextui-org/react';

const Days = () => {
  const images = [
    '/images/days/2.jpg', 
    '/images/days/2.jpg', 
    '/images/days/3.jpg', 
    '/images/days/2.jpg'
];

  return (
    <div 
    id="days"
    className="flex flex-col items-center justify-center px-[1.8em] my-10 h-fit"
    >
      <h1 className='text-7xl tracking-wide my-6'>Days</h1>
      <div className='flex flex-col md:flex-row items-center justify-center'>
      {images.map((image, index) => (
        <Card key={index} className="p-2 m-2 my-4 relative hover:filter hover:grayscale-0 filter grayscale transition-all ease-in-out duration-200 delay-150 flex flex-col items-centers-center justify-center w-fit h-fit md:w-[300px]">
          <CardBody className="overflow-visible py-2 flex-col items-center justify-cener">
            <Image 
            isBlurred
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