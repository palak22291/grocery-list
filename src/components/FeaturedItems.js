
import './FeaturedItems.css';

const items = [
  { src: '/Images/tomato_new.png' },
  { src: '/Images/milk_packet.png'},
  { src: '/Images/bread.png'},
  { src: '/Images/avocado.png'}
];

const FeaturedItems = () => {
  return (
    <section className="featured">
      <h3 className="featured-title">Featured Items</h3>
      <div className="item-container">
        {items.map((item, index) => (
          <div key={index} className="item-card">
            <img src={item.src} alt={`Item ${index + 1}`} className="item-image" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedItems;
