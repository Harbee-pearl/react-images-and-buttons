import '../Styles/Image.css';
import Button from './Button.jsx';

	
const Image = ({W, H, source, alt}) => {


	const  Enlarge = () => {
			W= "80%"
			H= "80%"
	
		}

	const  Shrink = () => {
		W= "120%"
		H= "120%"
		}

  return(
    <>
	<img 
	className="images"
		width={W}
		height={H}
		src={source}
		alt={alt}
	/> 

	<Button text="Enlarge" clickHandler={Enlarge} />
	<Button text="Shrink" clickHandler={Shrink} />
    </>
  );

};

export default Image;