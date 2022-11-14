import {
    Flex,
    Spacer,
    HStack,
    Heading,
    Input, Box
} from '@chakra-ui/react'
import { Layout } from '../../components/Layout'
import React, { useEffect, useState, useMemo } from 'react'
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../utils/init-firebase";
// import Create from "./Create";
import DataTable from "react-data-table-component";
import Update from './Update'
import moment from "moment";


export default function IndexClient() {
    const [filterText, setFilterText] = useState("");
    const [targetClient, setTargetClient] = useState([]);
    const Data = () => {
        const usersCollectionRef = collection(db, "users");
        onSnapshot(usersCollectionRef, (snapshot) => {
            let userData = []
            snapshot.docs.forEach(doc => {
                userData.push({ ...doc.data(), id: doc.id })
            })
            setTargetClient(userData)
        })
    };
    console.log(Data)
    useEffect(() => {
        Data();
    }, []);

    const columns = useMemo(
        () => [
            {
                name: "First Name",
                selector: (row) => row.firstName,
                sortable: true,
            },
            {
                name: "Middle Name",
                selector: (row) => row.middleName,
                sortable: true,
            },
            {
                name: "Last Name",
                selector: (row) => row.lastName,
                sortable: true,
            },
            {
                name: "Result",
                selector: (row) => row.result,
                sortable: true,
            },
            // {
            //     name: "CreatedAt",
            //     selector: (row) => moment(row.createdAt.seconds*1000 ).add(1, 'day').add(255, 'days').format('LLL'),
            //     sortable: true,
            // },
            {
                name: "Actions",
                cell: (works) => <HStack>
                                        
                    {/* <ViewClient works={works} /> */}
                    <Update works={works} />

                </HStack>
            },
        ],
        []
    );


    return (
        <Layout>

            <Flex pb={5}>
                <Heading >
                    Examination
                </Heading>
            </Flex>

            <Box borderWidth='1px' p={10} borderRadius='lg'>

                <Flex pb={5}>
                    <Box>
                        {/* <Create /> */}
                    </Box>
                    <Spacer />
                    <Box>
                        <Input
                            type="text"
                            placeholder="Search List"
                            onChange={(e) => setFilterText(e.target.value)}
                        />
                    </Box>
                </Flex>

                <DataTable
                    highlightOnHover
                    pagination
                    direction="ltr"
                    responsive
                    striped
                    columns={columns}
                    data={
                        targetClient.filter((value) => {
                            if (filterText === "") {
                                return value;
                            } else if (
                                value.displayName && value.displayName
                                    .toLowerCase()
                                    .includes(filterText.toLowerCase())
                            ) {
                                return value;
                            } else if (
                                value.middle && value.middle
                                    .toLowerCase()
                                    .includes(filterText.toLowerCase())
                            ) {
                                return value;
                            } else if (
                                value.last && value.last
                                    .toLowerCase()
                                    .includes(filterText.toLowerCase())
                            ) {
                                return value;
                            }
                        })
                    }

                />
            </Box>
        </Layout>
    )
}
