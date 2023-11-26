// CardData.js
export const cardData = [
    {
      id: '1',
      image: '/service/service-5.png',
      title: 'COVID-19 Vaccination',
      description: 'The NHS provides essential healthcare information and resources to the public.',
      buttons: [
        { label: 'Sexual health', onClick: () => console.log('Button 1 clicked') },
        { label: 'Vaccination', onClick: () => console.log('Button 2 clicked') },
        { label: 'Prescription', onClick: () => console.log('Button 2 clicked') },
      ],
      // width: '200px',
    },
    {
      id: '2',
      image: '/service/service-6.png',
      title: 'Flu Vaccination',
      description: 'The NHS provides essential healthcare information and resources to the public.',
      buttons: [
        { label: 'Vaccination', onClick: () => console.log('Button 2 clicked') },
      ],
      // width: '200px',
    },
    {
        id: '3',
      image: '/service/service-7.png',
        title: 'Order Prescription',
      description: 'The NHS provides essential healthcare information and resources to the public.',
        buttons: [
            { label: 'Sexual health', onClick: () => console.log('Button 1 clicked') },
            { label: 'Vaccination', onClick: () => console.log('Button 2 clicked') },
        ],
      },
      {
      id: '4',
      image: '/service/service-8.png',
      title: 'Sexual health',
      description: 'The NHS provides essential healthcare information and resources to the public.',
      buttons: [
        { label: 'Sexual health', onClick: () => console.log('Button 1 clicked') },

      ],
    },
  ];
  