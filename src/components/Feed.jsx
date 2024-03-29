import  {useState, useEffect} from 'react';
import {Box, Stack, Typography} from '@mui/material';
import {SideBar,Videos} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';


const Feed = () => {

const [selectedCategory, setSelectedCategory] = useState('New');

const [videos, setVideos] = useState(null);

  useEffect(()=>{
    setVideos(null);
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      . then((data)=>setVideos(data.items))
  },[selectedCategory]);


  return (
    <Stack sx={{flexDirection: {sx:"column", md:"row"}}}>
      <Box sx={{height:{sx:"auto", md:'92vh'}, borderRight:"1px solid #3d3d3d", px:{sx:0, md:2}}}>
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Typography className="copyright" variant="body" sx={{color:"#fff"}}>
          Copyright 2024 DJ dev
        </Typography>
      </Box>
      <Box p={2} sx={{overflowY:"auto",height:"90vh", flex:2}}> 
        <Typography variant="h4" mb={2} fontWeight="bold" sx={{color:"white"}}>
          {selectedCategory} <span style={{color:"#F31503"}}>Videos</span>
        </Typography>

        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed;  