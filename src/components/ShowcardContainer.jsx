import React from 'react';
import ShowCard from './ShowCard';
import { Banknote, Eye, MessageSquare, ShoppingCart } from 'lucide-react';

const ShowcardContainer = () => {
  const items = [
    { title: 'Daily Views', views: '1504', icon: <Eye size={50} /> },
    { title: 'Sales', views: '158', icon: <ShoppingCart size={50} /> },
    { title: 'Comments', views: '278', icon: <MessageSquare size={50} /> },
    { title: 'Earning', views: '$1,234', icon: <Banknote size={50} /> },
  ];

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4'>
      {items.map((item, index) => (
        <ShowCard
          key={index}
          icon={item.icon}
          title={item.title}
          views={item.views}
        />
      ))}
    </div>
  );
};

export default ShowcardContainer;
