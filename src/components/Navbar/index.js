import React from 'react'

import wideLogo from '../../assets/beyondsoft_logo_wide.png'
import narrowLogo from '../../assets/beyondsoft_logo_narrow.jpeg'
import { Button, Grid, Typography } from '@mui/material'

const Navbar = () => {
	return (
		<div
			style={{ 
				backgroundColor: 'white', 
				minHeight: '5vh',
				display: 'flex',
				alignItems: 'center',
				flexDirection: 'row',
			}}>
			<div
				style={{
					marginRight: '20%',
				}}
			>
				<picture>
					<source srcSet={narrowLogo} media="(min-width: 600)" />
					<img src={wideLogo} alt="" style={{ maxWidth: '15rem' }} />
				</picture>
			</div>
			<Grid style={{ display: 'flex', flexDirection: 'row' }}>
				<Grid>
					<Button variant="text">
						Home
					</Button>
				</Grid>
				<Grid>
					<Button variant="text">
						Map
					</Button>
				</Grid>
				<Grid>
					<Button variant="text">
						About
					</Button>
				</Grid>
				<Grid>
					<Button variant="text">
						Contact Us
					</Button>
				</Grid>
			</Grid>  
			</div>
	)
}
    
export default Navbar