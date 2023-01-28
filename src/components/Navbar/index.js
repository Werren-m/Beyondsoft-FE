import React from 'react'
import { Row, Col, Anchor } from 'antd'

import styles from './styles'

import wideLogo from '../../assets/beyondsoft_logo_wide.png'

const Navbar = () => {
	return (
		<Row style={styles.navbarContainer}>
			<Col span={8} style={styles.logoContainer}>
				<Anchor
					items={[
						{
							href: '/map',
							title: (<img src={wideLogo} alt="" style={styles.logo} />),
						}
					]}
				/>
			</Col>
		</Row>
	)
}
    
export default Navbar