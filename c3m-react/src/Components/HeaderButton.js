import {Link} from 'react-router-dom'
import React from 'react';


function HeaderButton(props){
	return(
		<Link className = "HeaderButton" to = {props.link}>
			{props.conteudo}
		</Link>		
	);
}

export default HeaderButton;