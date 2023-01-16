import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Search from "./Search"


export default function Bar() {

	return (
		<Box>
			<AppBar sx={{ backgroundColor: "green" }}
				position="static">
				<Toolbar>
					<Typography variant="h4">
						Book Library
					</Typography>
					<Search/>
				</Toolbar>
			</AppBar>
		</Box>
	);
}