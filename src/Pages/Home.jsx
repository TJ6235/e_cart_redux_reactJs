import React from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {green} from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import useFetch from '../hooks/UseFetch';
import { useDispatch } from 'react-redux';
import { addToWishList } from '../redux/slices/wishListSlice';
import { addtoCart } from '../redux/slices/cartSlice';




const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


function Home() {

  const data = useFetch('https://fakestoreapi.com/products')
console.log(data);

const dispatch = useDispatch()


// material card useState
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

// ////////////////////////////////

  return (
    <div className='bg-light'>
      <div className='container-fluid'>
          <div className="row px-4">
           {data?.length>0?
           data?.map((item)=>(

            <div className="col-md-3 px-2 my-4">
            <Card className='rounded shadow h-100' sx={{ maxWidth: 345 }}>
       <CardHeader
         avatar={
           <Avatar sx={{ bgcolor: green[800] }} aria-label="recipe">
             {item.id}
           </Avatar>
         }
         action={
           <IconButton aria-label="settings">
             <MoreVertIcon />
           </IconButton>
         }
         title={item.title}
          subheader={item.rating.rate}
       />
       <CardMedia
         component="img"
         height="190"
         image={item.image}
         alt="Paella dish"
       />
       <CardContent>
         <Typography variant="body2" color="text.secondary">
         {item.category}
         </Typography>
         <Typography className='fw-bold mt-2' variant="body2" color="text.secondary">
           {item.price}
         </Typography>
       </CardContent>
       <CardActions disableSpacing>
         <IconButton onClick={()=>dispatch(addToWishList(item))} className='text-danger' aria-label="add to favorites">
           <FavoriteIcon className='fa-2x'/>
         </IconButton>
         <IconButton onClick={()=>dispatch(addtoCart(item))} className='text-dark ms-3' aria-label="share">
         <ShoppingCartIcon className='text-warning f-2x' />
         </IconButton>
         <ExpandMore
           expand={expanded}
           onClick={handleExpandClick}
           aria-expanded={expanded}
           aria-label="show more"
         >
           <ExpandMoreIcon/>
         </ExpandMore>
       </CardActions>
       <Collapse in={expanded} timeout="auto" unmountOnExit>
         <CardContent>
           <Typography className='fw-bold' paragraph>{item.rating.count}</Typography>
           <Typography paragraph>
          {item.description}
           </Typography>
         </CardContent>
       </Collapse>
     </Card>
            </div>
           ))
          :
           <p>Nothing To Display</p>
           }
           <div className="col-md-3 px-2"></div>
           <div className="col-md-3 px-2"></div>
           <div className="col-md-3 px-2"></div>
          </div>
      </div>
    </div>
  )
}

export default Home