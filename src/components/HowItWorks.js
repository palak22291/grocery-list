import './HowItWorks.css';

const steps = [
  {
    label: 'Create Your List',
    src: '/images/create_list_new.png'
  },
  {
    label: 'Shop with Ease',
    src: '/images/shop2.png'
  },
  {
    label: 'Cook Delicious Meals',
    src: '/images/cook_new.png'
  }
];

const HowItWorks = () => {
  return (
    <section className="how">
      <h3 className="how-title">How It Works</h3>
      <div className="steps">
        {steps.map((step, index) => (
          <div key={index} className="step">
            <img src={step.src} alt={step.label} className="step-img" />
            <p className="step-label">{step.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
