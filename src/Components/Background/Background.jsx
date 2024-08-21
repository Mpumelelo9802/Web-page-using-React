import "./Background.css";
import video1 from '../../images/video1.mp4';
import image1 from '../../images/image1.png';
import image2 from '../../images/image2.png';
import image3 from '../../images/image3.png';

const Background = ({ playStatus, heroCount }) => {
  if (playStatus) {
    return (
      <video className="background fade-in" autoPlay loop muted>
        <source src={video1} type="video/mp4" />
      </video>
    );
  } else if (heroCount === 0) {
    return <img src={image1} className="background fade-in" alt="Image 1" />;
  } else if (heroCount === 1) {
    return <img src={image2} className="background fade-in" alt="Image 2" />;
  } else if (heroCount === 2) {
    return <img src={image3} className="background fade-in" alt="Image 3" />;
  } else {
    return <div>No background available</div>;
  }
};

export default Background;
