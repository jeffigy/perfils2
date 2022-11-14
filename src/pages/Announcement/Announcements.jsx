import { Heading, Grid, GridItem, Textarea, Button, Flex, Box, Text } from '@chakra-ui/react'
import React from 'react'
import { useEffect, useState } from 'react'
import { Layout } from '../../components/Layout'
import { db } from '../../utils/init-firebase'
import { collection, getDocs, addDoc } from 'firebase/firestore'
import { useAuth } from '../../contexts/AuthContext'

function Anouncement() {
    const { currentUser } = useAuth()
    console.log(currentUser)
    const [posts,setPost] = useState([])
    const [createPost, setCreatepost] = useState("")
    const usersCollection = collection(db,"announcements")
    
    const createAnnouncement = async () => {
        await addDoc(usersCollection, { description: createPost })
    }

    useEffect(() => {
        const getPost = async () => {
            const data = await getDocs(usersCollection)
            setPost(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        getPost()
    })
  return (
    <Layout>
        <Heading>
            Anouncement
        </Heading>
        <Textarea placeholder='Announcement......' w="85%" onChange={(event) => {setCreatepost(event.target.value)}}/>
        <Button onClick={createAnnouncement} m='20px'>Submit</Button>
        {posts.map((post) => {
                    return(
                        <Box borderWidth='1px' borderRadius='lg' mt='2' p='5'>
                            {" "}
                            {/* <Text mb='1'>{post.name}</Text> */}
                            <Text>Description: {post.description}</Text>
                        </Box>
                    )
                })}
    </Layout>
  )
}

export default Anouncement