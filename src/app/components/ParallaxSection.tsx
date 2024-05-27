// components/ParallaxSection.tsx

'use client'; // Ensure this component is treated as a Client Component

interface ParallaxSectionProps {
  backgroundImage: string;
  textContent: string;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ backgroundImage, textContent }) => {
  return (
    <div className="parallax" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="parallax-content">
        <h1 className="parallax-text">{textContent}</h1>
      </div>
      <style jsx>{`
        .parallax {
          position: relative;
          height: 500px; /* Adjust the height as needed */
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
        .parallax-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          text-align: center;
        }
        .parallax-text {
          font-size: 3em; /* Adjust the font size as needed */
        }
        @media (max-width: 768px) {
          .parallax {
            height: 300px; /* Adjust the height for smaller screens */
          }
          .parallax-text {
            font-size: 2em; /* Adjust the font size for smaller screens */
          }
        }
        @media (max-width: 480px) {
          .parallax {
            height: 200px; /* Adjust the height for mobile screens */
          }
          .parallax-text {
            font-size: 1.5em; /* Adjust the font size for mobile screens */
          }
        }
      `}</style>
    </div>
  );
};

export default ParallaxSection;
