import React from 'react'
import {
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    ModalContent, Tooltip,
    ModalCloseButton, useDisclosure, Button, Input, FormControl, FormErrorMessage, FormLabel, Stack, useToast
} from '@chakra-ui/react'
import { Form, Field, Formik } from "formik";
import { EditIcon } from '@chakra-ui/icons'

import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../utils/init-firebase";

import { ViewIcon } from "@chakra-ui/icons";
import Select from "../components/Fields/Select";
import { legislativeDistrictOptions, administrativeDistricts, barangayOptions, positionOptions } from "../components/Constants"




export default function Update({ works }) {
    console.log(works)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const toast = useToast()
    const firstField = React.useRef()

    const status = [
        { key: 'Active', value: 'active' },
        { key: 'Deactivate', value: 'deactivate' },
    ]

    async function updateUsers(values) {
        const documentId = JSON.parse(JSON.stringify(values.id))
        const userRef = doc(db, 'workers', documentId);
        await updateDoc(userRef, {
            ...values
        })
    }

    return (
        <>
            <Tooltip
                label="Update Client"
                aria-label='A tooltip'
            >
                <Button
                    colorScheme='yellow'
                    onClick={() => { onOpen() }}
                >
                    <EditIcon />
                </Button>
            </Tooltip>
            <Modal
                isOpen={isOpen}
                placement='right'
                initialFocusRef={firstField}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalHeader borderBottomWidth='1px'>
                        Update Social Worker Account
                    </ModalHeader>

                    <Formik
                        initialValues={{
                            ...works
                        }}
                        onSubmit={(values, actions) => {
                            updateUsers(values)
                                .then(() => {
                                    toast({
                                        title: 'Success',
                                        description: 'User Profile Updated Successfully',
                                        status: 'info',
                                        duration: 9000,
                                        isClosable: true,
                                    })
                                    actions.setSubmitting(false)
                                    onClose()
                                })

                        }}
                    >
                        {(props) => (
                            <Form>
                                <ModalBody>
                                    <Stack spacing='24px'>
                                        <Field name='firstName' >
                                            {({ field, form }) => (
                                                <FormControl isInvalid={form.errors.firstName && form.touched.firstName}>
                                                    <FormLabel htmlFor='firstName'>First Name</FormLabel>
                                                    <Input {...field} id='firstName'isDisabled />
                                                    <FormErrorMessage>{form.errors.firstName}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>

                                        <Field name='middleName' >
                                            {({ field, form }) => (
                                                <FormControl isInvalid={form.errors.middleName && form.touched.middleName}>
                                                    <FormLabel htmlFor='middleName'>Middle Name</FormLabel>
                                                    <Input {...field} id='middleName'isDisabled/>
                                                    <FormErrorMessage>{form.errors.middleName}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>

                                        <Field name='lastname' >
                                            {({ field, form }) => (
                                                <FormControl isInvalid={form.errors.lastname && form.touched.lastname}>
                                                    <FormLabel htmlFor='lastname'>Last Name</FormLabel>
                                                    <Input {...field} id='lastname' isDisabled/>
                                                    <FormErrorMessage>{form.errors.lastname}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>

                                        <Select
                                            label="Status"
                                            name="status"
                                            options={status}
                                        />

                                        
                                    </Stack>
                                </ModalBody>

                                <ModalFooter borderTopWidth='1px'>
                                    <Button
                                        isLoading={props.isSubmitting}
                                        type='submit'
                                        colorScheme='blue'
                                        mr={3}
                                    >
                                        Submit
                                    </Button>
                                    <Button variant='outline' mr={3} onClick={onClose}>
                                        Cancel
                                    </Button>

                                </ModalFooter>
                            </Form>
                        )}
                    </Formik>
                </ModalContent>
            </Modal>
        </>
    )
}
