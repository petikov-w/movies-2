import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

// export default function BasicTextFields() {
export default function Input() {
    return (
        <Box
            component="form"
            sx={{
              '& > :not(style)': {width: '50ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField  />
            {/*<TextField id="filled-basic" label="Filled" variant="filled" />*/}
            {/*<TextField id="standard-basic" label="Standard" variant="standard" />*/}
        </Box>
    );
}