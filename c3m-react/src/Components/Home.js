import HomeImage from '../Imagens/HomeImage.jpg'

function Home(){
	return(
		<div className = "Home">
			<img className = "HomeImage" src = {HomeImage} alt="fotografia inicial"/>
		</div>
	);
}

export default Home;