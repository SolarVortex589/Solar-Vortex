function DataOverlays() {
    const overlayData = [
      {
        title: "Running Custom WebGL Shaders Using Deck.gl for Solar Potential Analysis",
        image:"/overlay1.png",
      },
      {
        title: "Monthly Flux",
        description: "Monthly amount of solar energy. Drill down to specific month.",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-02-12%2013-38-57-iYNyL9Dzy4TNLLyNITj3RxKKfCaiDm.png",
      },
      {
        title: "Hourly Shade",
        description: "Hourly shade cover. Drill down to specific hour of the day on any day.",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-02-12%2013-39-15-DfMDLYwJDXYwoVYrvPr9TpyHwg2iIH.png",
      },
    ]
  
    return (
      <section className="overlays">
        <div className="overlays-container">
          <div className="overlays-header">
            <h2 className="overlays-title">Major Highlights Of The Project</h2>
            <p className="overlays-description">Inspect areas that receive the most sunlight and shade</p>
          </div>
  
          <div className="overlays-grid">
            {overlayData.map((overlay, index) => (
              <div key={index} className="overlay-card">
                <div className="overlay-image-container">
                  <img
                    src={overlay.image || "/placeholder.svg"}
                    alt={`${overlay.title} visualization`}
                    className="overlay-image"
                  />
                </div>
                <h3 className="overlay-title">{overlay.title}</h3>
                <p className="overlay-description">{overlay.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default DataOverlays
  
  