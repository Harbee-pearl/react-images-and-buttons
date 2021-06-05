import '../Styles/Image.css';
// import Button from './Button.jsx';
// import {useState} from 'react';



	
const Image = ({W, H, source, alt}) => {

// 	const [H, sizeIncrement] = useState(Image);

// 	const  Enlarge = () => {
// 			sizeIncrement(H = "100px" )	
// 		}

	// const  Shrink = () => {
	// 	Image.W = "200px"
	// 	Image.H = "200px"
	// 	console.log(W,H);
	// 	}

  return(
    <>
	<img 
	className="images"
		width={W}
		height={H}
		src={source}
		alt={alt}
	/> 

	{/* <Button text="Enlarge" clickHandler={Enlarge} /> */}
	{/* <Button text="Shrink" clickHandler={Shrink} /> */}
    </>
  );

};

export default Image;