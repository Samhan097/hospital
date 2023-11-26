import React from 'react';
import ServiceCard from './ServiceCard';
import { ServiceData } from './ServiceData';


const ServiceList = () => {
  return (
    <div>
      {ServiceData.map((service, index) => (
        <ServiceCard
          key={index}
          number={service.number}
          title={service.title}
          description={service.description}
          button={service.button}
        />
      ))}
    </div>
  );
};

export default ServiceList;
