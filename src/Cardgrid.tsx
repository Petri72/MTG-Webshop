import {useState, useEffect} from 'react';
import './App.css';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Typography } from '@mui/material';

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


  function Cardgrid(){
    const [card, setCard] = useState([])
    const [ima, setIma] = useState([])
    const [open, setOpen] = useState(false);
    const [modalCard, setmodalCard] = useState<string>()
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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

  useEffect(()=>{
    if (modalCard)
    handleOpen()
  },[modalCard])
 
  
  function cardClick(event: React.MouseEvent<HTMLImageElement>) {
    event.stopPropagation();
    const img = event.currentTarget;
    const modalImage:string = img.src
    setmodalCard(modalImage)
    }
  
  return(
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>     
        {card.map((name,index)=><Grid item xs={2} sm={4} md={4} key={index} ><Typography variant='h6'>{name}</Typography> <br/> <img  src={ima[index]} onClick={cardClick} alt="CardImage" /><br/><Button key={index} variant="contained">Add to Cart</Button>
    <Modal
      open={open}
      onClose={handleClose}
      aria-describedby="modal-modal-image"
    >
      <Box sx={modalstyle}>
          <img src={modalCard} alt="ModalImage" />
      </Box>
    </Modal>  
      </Grid>)}
      </Grid>
  );
}
export default Cardgrid
