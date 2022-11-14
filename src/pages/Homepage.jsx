import {
  Heading,
  Stack,
  Box, Link, Text
} from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../components/Layout'
import IframeResizer from "iframe-resizer-react";
import { Chart } from "react-google-charts";
import { Grid, GridItem } from '@chakra-ui/react'


export const data = [
  [
    "Month",
    "Establishment 1",
    "Establishment 2",
    "Establishment 3",
    "Establishment 4",
    "Establishment 5",
    "Average",
  ],
  ["2019", 165, 938, 522, 998, 450, 614.6],
  ["2020", 135, 1120, 599, 1268, 288, 682],
  ["2021", 157, 1167, 587, 807, 397, 623],
  ["2022", 139, 1110, 615, 968, 215, 609.4],
];

export const options = {
  title: "Examines",
  vAxis: { title: "#Examines" },
  hAxis: { title: "Month" },
  seriesType: "bars",
  series: { 5: { type: "line" } },
};

export default function Homepage() {

  return (
    <Layout>

        {/* <IframeResizer
                log
                src="https://gulaneskorp.betteruptime.com/"
                style={{ width: '1px', minWidth: '100%', minHeight: '700px'}}
            /> */}
            <Grid templateColumns='repeat(4, 1fr)' gap={6}>
              <GridItem w='100%' h='100' bg='#6C4AB6' border='2px' borderColor='gray.200' rounded='md'>
                <Text as='b' ml={5} fontSize={32} color='white' >10+</Text>
                <br />
                <Text as='b'  ml={7} fontSize={20} color='white'>Users</Text>
                <br />

                
               </GridItem> 
               <GridItem w='100%' h='100' bg='#8D72E1' border='2px' borderColor='gray.200' rounded='md'>
                <Text as='b' ml={5} fontSize={32} color='white'>100+</Text>
                <br />
                <Text as='b'  ml={7} fontSize={20} color='white'>Examine</Text>
                <br />

                
               </GridItem> 
               <GridItem w='100%' h='100' bg='#8D72E1' border='2px' borderColor='gray.200' rounded='md'>
                <Text as='b' ml={5} fontSize={32} color='white'>110+</Text>
                <br />
                <Text as='b'  ml={7} fontSize={20} color='white'>Active Accounts</Text>
                <br />

                
               </GridItem> 
               <GridItem w='100%' h='100' bg='#8D9EFF' border='2px' borderColor='gray.200' rounded='md'>
                <Text as='b' ml={5} fontSize={32} color='white'>50+</Text>
                <br />
                <Text as='b'  ml={7} fontSize={20} color='white'>Positive</Text>
                <br />

                
               </GridItem> 
            </Grid>
            <Chart
                chartType="ComboChart"
                width="100%"
                height="400px"
                data={data}
                options={options}
            />    
        
    </Layout>

  )
}

