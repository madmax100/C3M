import Styles from 'C:/Users/Cirilo/Documents/C3m-site/c3m-react/src/Styles.css'
import {Link} from 'react-router-dom'

function HeaderButton(props){
	return(
		<Link className = "HeaderButton" to = {props.link}>
			{props.conteudo}
		</Link>		
	);
}

export default HeaderButton;