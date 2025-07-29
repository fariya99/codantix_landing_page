const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="hero-btn">
          <button>Shop Now </button>
          <button className="secondary-btn">Category</button>
        </div>

        
      </div>
     <div className="hero-image">
  <img 
    src="/images/shoes.png" 
    alt="hero-image" 
    style={{ width: "400px", height: "auto" }} 
  />
</div>

    </main>
  );
};

export default HeroSection;
