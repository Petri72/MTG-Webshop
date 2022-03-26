import {useState, useEffect, useRef} from 'react';
import './App.css';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const modalstyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


export default function Cardgrid(){
    const [card, setCard] = useState([])
    const [ima, setIma] = useState([])
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const cardElement = useRef<HTMLImageElement>(null);

  const getCards = async () => {
    const response = await fetch('https://api.magicthegathering.io/v1/cards')
    const data = await response.json()
    const names = data.cards.map((r:any) => r.name)
    const image = data.cards.map((i:any) => i.imageUrl)
    setCard(names)
    setIma(image)
  }


  useEffect(()=>{
    getCards();
  },[])

  function cardClick(){
    handleOpen();
  }
 
  
  return(
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>     
        {card.map((name,index)=><Grid item xs={2} sm={4} md={4} key={index} >{name} <br/> <img  src={ima[index]} alt="CardImage" ref={cardElement}/><br/><Button onClick={cardClick} key={index} variant="contained">Add to Cart</Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-describedby="modal-modal-image"
      >
        <Box sx={modalstyle}>
            <div>{index}</div>
        </Box>
      </Modal>
      </Grid>)}
      </Grid>
  );
}
