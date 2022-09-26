import './FeatureCard.scss'

export default function FeatureCard({  img, title, desc, delay }) {
  return (
    <div  
      data-aos="zoom-in" 
      data-aos-duration="500" 
      data-aos-delay={delay} d
      ata-aos-easing="ease-out"
    >
      <div id="feature-card">
        <div className="img-container">
          <img src={img} className='feature-logo' alt="" />
        </div>
        <div className="text-container">
          <h3>
            {title}
          </h3>
          <p>
            {desc}
          </p>
        </div>
      </div>
    </div>
  )
}