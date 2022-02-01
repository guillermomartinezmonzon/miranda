import * as React from 'react';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
      color: '#135846',
    position: 'relative',
    backgroundColor: 'none',
    width: '130px',
    border: `1px solid #135846`,
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      backgroundColor: 'none',
      borderColor: '#135846',
      boxShadow: '0 0 0 0.1rem #135846',
    },
  },
}));

export default function Picker() {
  const [order, setOrder] = React.useState('');
  const handleChange = (event) => {
    setOrder(event.target.value);
  };
  return (
    <div>
      <FormControl sx={{ m: 1 }} variant="standard">
        <Select
              labelId="demo-customized-select-label"
              id="demo-customized-select"
              value={order}
              onChange={handleChange}
              input={<BootstrapInput />}
        >
          <MenuItem value={"Newest"}>Highest Price</MenuItem>
          <MenuItem value={"Lastest"}>Lowest Price</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

