import React from 'react';
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
import { green } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../redux/slices/wishListSlice';
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

function Wishlist() {
  const wishlistArray = useSelector((state) => state.wishlistReducer); // Adjusted to match the correct state slice name
  console.log(wishlistArray);

    const dispatch = useDispatch()

    const handleCart = (item)=>{
      dispatch(addtoCart(item))
      dispatch(removeItem(item.id))
    }


  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };




  return (
    <div>
      {wishlistArray?.length>0? 
        <div className="container-fluid px-2 my-4 d-flex justify-content-center align-items-center">
          {wishlistArray?.map((item)=>(
            <div className='mt-1 ms-4'>
              <Card className='rounded shadow' sx={{ maxWidth: 345 }}>
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
                  height="194"
                  image={item.image}
                  alt='no image'
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
                <IconButton onClick={()=>dispatch(removeItem(item.id))} className='text-danger' aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                  <IconButton onClick={()=>handleCart(item)} className='text-primary' aria-label="cart">
                    <ShoppingCartIcon />
                  </IconButton>
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography className='fw-bold' paragraph>
                      {item.rating.count}
                    </Typography>
                    <Typography paragraph>
                      {item.description}
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </div>
          ))}
        </div>
       : (
        <div style={{ width: '100%', height: '80vh' }} className="d-flex justify-content-center align-items-center">
          <img src="https://elegantjewelersli.com/assets/images/empty-wishlist.png" alt="no-image" />
        </div>
      )}
    </div>
  );
}

export default Wishlist;
