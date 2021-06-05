import './app.css';

import Image from './Components/Image';
import Button from './Components/Button';

const  Enlarge = () => {
		Image.W = "80%"
		Image.H = "80%"
	}

    // const  Shrink = () => {
    //     Image.W = "120%"
	// 	Image.H = "120%"
    //   }


function App() {
  return (
	<div className="App" >

		<Image W="250px" H="250px" source="https://i.pinimg.com/originals/3d/14/98/3d149867ccde015c65ed6d9a95195f9c.png"  />
		<Button text="Enlarge" clickHandler={Enlarge} />

	</div>
  );
};

export default App;


