import { Flex, Heading, Text } from '@chakra-ui/layout'
import { Grid, GridItem , Box, Image, StarIcon, Badge} from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../../components/Layout'
import { Chart } from "react-google-charts";

export const establish = [
  ["Number of Attendies", "Number of Attendies"],
  ["Establishment 1", 11],
  ["Establishment 2", 2],
  ["Establishment 3", 20],
  ["Establishment 4", 8],
  ["Establishment 5", 7],
];

export const selections = {
  title: "Establishments ",
  pieHole: 0.4,
  is3D: true,
};

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

  


export default function Index() {

   



    return (
        <Layout>
            <Flex>
                <Heading pb={5}>
                    REPORTS
                </Heading>
            </Flex>
            <Chart
                chartType="PieChart"
                width="100%"
                height="400px"
                data={establish}
                options={selections}
            />
            <Chart
                chartType="ComboChart"
                width="100%"
                height="400px"
                data={data}
                options={options}
            />

            {/* <Grid templateColumns='repeat(5, 1fr)' gap={6} mt={10}>
            <GridItem w='100%' h='10' bg='blue.500' />
            <GridItem w='100%' h='10' bg='blue.500' />
            <GridItem w='100%' h='10' bg='blue.500' />
            <GridItem w='100%' h='10' bg='blue.500' />
            <GridItem w='100%' h='10' bg='blue.500' />
            </Grid>
            <Grid
                h='200px'
                templateRows='repeat(2, 1fr)'
                templateColumns='repeat(5, 1fr)'
                gap={4}
                mt={10}
            >
                <GridItem rowSpan={2} colSpan={1} bg='tomato' />
                <GridItem colSpan={2} bg='papayawhip' />
                <GridItem colSpan={2} bg='papayawhip' />
                <GridItem colSpan={4} bg='tomato' />
            </Grid> */}
            
        </Layout>
    )
}
