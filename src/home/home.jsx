import React from 'react'
import { Box, Flex, Grid, GridItem, Link, Card, CardBody, Center, Button, Text, SimpleGrid, CardHeader, Heading, CardFooter, Image, IconButton, Stack, Collapse, Icon, Popover,PopoverTrigger,PopoverContent,useColorModeValue,useBreakpointValue,useDisclosure, } from '@chakra-ui/react'


import pebbles_bg from '../assets/pebble_art_3.jpg'
import pebbles_bg_2 from '../assets/pebbles_bg.jpg'
import pebbles_art_sample_1 from '../assets/pebble_art_sample_1.jpg'
import p1 from "../assets/1.jpg"
import p2 from './../assets/2.jpg'

import p3 from '../assets/3.jpg'
import p4 from '../assets/4.png'
import p5 from '../assets/5.jpg'
import logo from '../assets/logo.jpeg'
import p6 from '../assets/6.jpg'
import bg1 from '../assets/bg7.jpg'





const AppHomePage = () => {
  return (
    
    <div>
      
      

      <div style={{ backgroundImage: `url(${pebbles_bg_2})`, backgroundSize:'cover', paddingBottom:'10%' }}>
      <Flex p='1%' style={{ backgroundColor:'rgba(26, 105, 133, .0)' }}>
        <a href='#'><Image
          borderRadius='full'
          boxSize='70px'
          src={logo}
          alt='Dan Abramov'
        /></a>

        <Text style={{ color:'white', fontSize:'120%', marginTop:'1%', marginLeft:'5%' }}><b>Home</b></Text>
        <Text style={{ color:'white', fontSize:'120%', marginTop:'1%', marginLeft:'5%' }}><b>About me</b></Text>
        <Text style={{ color:'white', fontSize:'120%', marginTop:'1%', marginLeft:'5%' }}><b>My Work</b></Text>
        <Text style={{ color:'white', fontSize:'120%', marginTop:'1%', marginLeft:'5%' }}><b>Shop</b></Text>
        <Text style={{ color:'white', fontSize:'120%', marginTop:'1%', marginLeft:'5%' }}><b>Contact Us</b></Text>
        

      </Flex>
        <Card style={{ fontFamily: 'Corbel', opacity:'80%', padding:'5%', marginLeft:'5%', marginRight:'5%', marginTop:'10%' }}>
          <Center>
            <CardBody style={{ width:'60%', textAlign:'center' }}>
                <label style={{ fontSize:'400%' }}><b>Making the best pebble art the world has ever seen</b></label><br/>
                <label style={{ fontSize:'150%' }}>Dipali's art Box provides breath-taking art forms formed with over 200+ different stone types</label>
            </CardBody>
          </Center>
        </Card>
      </div>


      
      
      <Grid templateColumns='repeat(2, 1fr)' style={{ backgroundColor:'#1a6985', paddingTop:'5%', paddingBottom:'10%', justifyContent:'center', alignItems:'center', paddingLeft:'5%' }}>
        <GridItem w='100%' h='10'>
          <label style={{ fontSize:'250%', fontFamily: 'Corbel', color:'white' }}>Make your life memorable by introducing Flower Shape pebble art</label><br/>
          <label style={{ fontSize:'100%', fontFamily: 'Corbel', color:'white', paddingBottom:'10%' }}>Buy your options now for 40% off</label>
        </GridItem>
        <GridItem w='100%' h='10' paddingTop={9}>
          <Center><Button colorScheme='blue' size='lg'>BUY THE ARTFORMS NOW!!</Button></Center>
        </GridItem>
      </Grid>
      
      <SimpleGrid spacing={4} templateColumns='repeat(1, 1fr)' style={{ padding:'1%', backgroundColor:'black' }}>
      <center><u style={{color:'white'}}><h1 style={{ color: 'white', fontSize: '290%', fontFamily: 'Corbel'}}>Shop Personalised Product</h1></u></center>
      
      </SimpleGrid>
      <SimpleGrid spacing={4} templateColumns='repeat(3, 1fr)' style={{ padding:'3%', backgroundColor:'black' }}>
      
        <Card>
          <CardHeader>
            <Heading size='md'>Progeno Losia</Heading>
          </CardHeader>
          <CardBody>
          <Image
            borderRadius='full'
            boxSize='250px'
            src={p1}
            alt='Progeno Losia'
          />
            <Text>View a summary of all your customers over the last month.</Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size='md'>Progeno Losia</Heading>
          </CardHeader>
          <CardBody>
          <Image
            borderRadius='full'
            boxSize='250px'
            src={p2}
            alt='Progeno Losia'
          />
            <Text>View a summary of all your customers over the last month.</Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size='md'>Progeno Losia</Heading>
          </CardHeader>
          <CardBody>
          <Image
            borderRadius='full'
            boxSize='250px'
            src={p3}
            alt='Progeno Losia'
          />
            <Text>View a summary of all your customers over the last month.</Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size='md'>Progeno Losia</Heading>
          </CardHeader>
          <CardBody>
          <Image
            borderRadius='full'
            boxSize='250px'
            src={p4}
            alt='Progeno Losia'
          />
            <Text>View a summary of all your customers over the last month.</Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size='md'>Progeno Losia</Heading>
          </CardHeader>
          <CardBody>
          <Image
            borderRadius='full'
            boxSize='250px'
            src={p5}
            alt='Progeno Losia'
          />
            <Text>View a summary of all your customers over the last month.</Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size='md'>Progeno Losia</Heading>
          </CardHeader>
          <CardBody>
          <Image
            borderRadius='full'
            boxSize='250px'
            src={p6}
            alt='Progeno Losia'
          />
            <Text>View a summary of all your customers over the last month.</Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
        
      </SimpleGrid>
      
      

      <Box style={{ width:'100%', padding:'1%', backgroundColor:'#1a6985'}}>
        
        
        <Grid templateColumns='repeat(2, 1fr)' style={{ marginTop: '1%', backgroundColor:'#1a6985', padding:'2%' }}>
          <GridItem>
            <label style={{ fontSize:'200%', color:'White', marginBottom:'5%'}}><b>About the Amazing Creator</b></label><br/>
            <Image
              borderRadius='full'
              boxSize='250px'
              src='https://bit.ly/dan-abramov'
              alt='Dan Abramov'
              border= '5px solid white'
              padding='1%'
            />
          </GridItem>
          <GridItem paddingTop={10}>
            <label style={{ fontSize: '140%', color: 'white' }}><b>Dan Abramov</b></label><br/>
            <label style={{ fontSize: '110%',color: 'white' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</label>
          </GridItem>
        </Grid>
   </Box>
   

   <SimpleGrid spacing={4} templateColumns='repeat(1, 1fr)' style={{ padding:'1%', backgroundColor:'black' }}>
      <center><u style={{color:'white'}}><h1 style={{ color: 'white', fontSize: '290%', fontFamily: 'Corbel'}}>My Work</h1></u></center>
      
      </SimpleGrid>
      <SimpleGrid spacing={4} templateColumns='repeat(3, 1fr)' style={{ padding:'1%', backgroundColor:'black' }}>
        <Card>
          <CardBody>
          <Image
            boxSize='500px'
            src={p1}
            alt='Progeno Losia'
          />
          </CardBody>
        </Card>
        <Card>
          <CardBody>
          <Image
            boxSize='500px'
            src={p2}
            alt='Progeno Losia'
          />
          </CardBody>
        </Card>
        <Card>
          <CardBody>
          <Image
            boxSize='500px'
            src={p3}
            alt='Progeno Losia'
          />
          </CardBody>
        </Card> <Card>
          <CardBody>
          <Image
            boxSize='500px'
            src={p4}
            alt='Progeno Losia'
          />
          </CardBody>
        </Card>
        <Card>
          <CardBody>
          <Image
            boxSize='500px'
            src={p5}
            alt='Progeno Losia'
          />
          </CardBody>
        </Card> <Card>
          <CardBody>
          <Image
            boxSize='500px'
            src={p6}
            alt='Progeno Losia'
          />
          </CardBody>
        </Card>
        
      </SimpleGrid>
      <Box style={{ width:'100%', padding:'1%', backgroundColor:'#1a6985' , borderColor:'black' }}>
        
        
        <Grid templateColumns='repeat(2, 1fr)' style={{ marginTop: '1%', backgroundColor:'#1a6985', padding:'10%', border:'black' }}>
          <GridItem>
            <label style={{ fontSize:'200%', color:'White' }}><u><b>Contact</b></u></label><br/><br/>
            <label style={{fontSize: '150%', color:'White'}}>Would you like to work together on a project, order a custom <br/> design or do 
                you have a question about your order? <br/>
                E-mail me at Dipalijaradi@gmail.com or fill in the contact form.<br/>
                You can also find me on social media</label><br/><br/>
                <Stack direction='row' spacing={4}>
                <Button backgroundColor='beige'>LinkedIn 
                </Button>
                    <Button  backgroundColor='beige'>Instagram</Button>
                    <Button backgroundColor='beige' >Contact us</Button>
                </Stack>

          </GridItem>
          <GridItem>
            <label style={{ fontSize: '140%', color:'white' }}><b>Your Name</b></label><br/>
            <input type='text' size='60' style={{ border: '3px solid Beige', padding:'1%'}}></input><br/><br/>
            <label style={{ fontSize: '140%', color:'white' }}><b>Your Email</b></label><br/>
            <input type='text' size='60' style={{ border: '3px solid Beige', padding:'1%'}}></input><br/><br/>
            <label style={{ fontSize: '140%', color:'white' }}><b>Subject</b></label><br/>
            <input type='text' size='60' style={{ border: '3px solid Beige', padding:'1%'}}></input><br/><br/>
            <label style={{ fontSize: '140%', color:'white' }}><b>Your message</b></label><br/>
            <textarea rows="7" cols="62.5" style={{ border: '3px solid Beige', padding:'1%'}}></textarea><br/><br/>
            <Button backgroundColor="beige" >Send</Button>
      

          </GridItem>
        </Grid>
   </Box>

    </div>
  )
}







export default AppHomePage