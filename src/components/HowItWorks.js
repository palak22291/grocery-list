import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    { icon: '📝', label: 'Create Your List' },
    { icon: '🛒', label: 'Shop with Ease' },
    { icon: '🍳', label: 'Cook Delicious Meals' }
  ];

  return (
    <section className="how">
      <h3>How It Works</h3>
      <div className="steps">
        {steps.map((step, i) => (
          <div key={i} className="step">
            <div className="icon">{step.icon}</div>
            <p>{step.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
