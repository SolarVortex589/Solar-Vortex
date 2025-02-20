import image2 from "../assets/image2.jpg"

function Hero() {
  return (
    <section className="hero">
      {/* Apply background image dynamically */}
      <div
        className="hero-background"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.9)), url(${image2})`,
        }}
      />
      <div className="hero-content">
        <h1 className="hero-title">Determine your building's solar potential</h1>
        <p className="hero-description">
          Panel density layout optimization and financial modeling
        </p>
      </div>
    </section>
  )
}

export default Hero
