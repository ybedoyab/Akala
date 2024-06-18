import React from 'react'
import './Header.css'
import Akala from '../../assets/akala.png'
import Video from '../../assets/video.gif'

const Header = () => {
	return (
		<div className='header-container'>
			<header className='home-header'>
				<div className='header-left'>
					<h3 className='header-title'>Bienvenido a</h3>
					<img src={Akala} alt="" />
					<button className='header-button'>Jugar</button>
				</div>
				<div className="header-right">
					<img className='header-gif' src={Video} alt="" />
				</div>
			</header>
		</div>
	)
}

export default Header