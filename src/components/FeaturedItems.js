// import './FeaturedItems.css';

// const items = [
//   { name: 'Tomato', src: '/images/tomato.png' },
//   { name: 'Milk', src: '/images/milk.png' },
//   { name: 'Carrot', src: '/images/carrot.png' },
//   { name: 'Broccoli', src: '/images/broccoli.png' }
// ];

// function FeaturedItems(){
//   return (
//     <section className="featured">
//       <h3>Featured Items</h3>
//       <div className="items">
//         {items.map((item, index) => (
//           <div key={index} className="item">
//             <img src={item.src} alt={item.name} className="item-img" />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default FeaturedItems;

// components/FeaturedItems.js
import './FeaturedItems.css';

const FeaturedItems = () => {
  const items = ['🍅', '🍞', '🥑', '🥦'];

  return (
    <section className="featured">
      <h3>Featured Items</h3>
      <div className="items">
        {items.map((icon, index) => (
          <div key={index} className="item">{icon}</div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedItems;
