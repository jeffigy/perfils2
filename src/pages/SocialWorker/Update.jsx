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
import DatePicker from '../components/Fields/DatePicker';




export default function Update({ works }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const toast = useToast()
    const firstField = React.useRef()

    async function updateUsers(values) {
        const documentId = JSON.parse(JSON.stringify(values.id))
        const userRef = doc(db, 'users', documentId);
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
                                        <Field name='displayName' >
                                            {({ field, form }) => (
                                                <FormControl isInvalid={form.errors.displayName && form.touched.displayName}>
                                                    <FormLabel htmlFor='displayName'>Name</FormLabel>
                                                    <Input {...field} id='displayName' placeholder='Display Name' />
                                                    <FormErrorMessage>{form.errors.firstName}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>

                                        <Field name='firstName' >
                                            {({ field, form }) => (
                                                <FormControl isInvalid={form.errors.firstName && form.touched.firstName}>
                                                    <FormLabel htmlFor='firstName'>First Name</FormLabel>
                                                    <Input {...field} id='firstName' placeholder='First Name' />
                                                    <FormErrorMessage>{form.errors.firstName}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>

                                        <Field name='middleName' >
                                            {({ field, form }) => (
                                                <FormControl isInvalid={form.errors.middleName && form.touched.middleName}>
                                                    <FormLabel htmlFor='middleName'>Middle Name</FormLabel>
                                                    <Input {...field} id='middleName' placeholder='Middle Name' />
                                                    <FormErrorMessage>{form.errors.firstName}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>

                                        <Field name='lastName' >
                                            {({ field, form }) => (
                                                <FormControl isInvalid={form.errors.lastName && form.touched.lastName}>
                                                    <FormLabel htmlFor='lastName'>Last Name</FormLabel>
                                                    <Input {...field} id='lastName' placeholder='Last Name' />
                                                    <FormErrorMessage>{form.errors.firstName}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                        <Field name='email' >
                                            {({ field, form }) => (
                                                <FormControl isInvalid={form.errors.email && form.touched.email}>
                                                    <FormLabel htmlFor='email'>Email Address</FormLabel>
                                                    <Input {...field} id='email' placeholder='email' isDisabled/>
                                                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>

                                        {/* <DatePicker
                                                        label="Appointment"
                                                        name="appointment"
                                                    /> */}
                                        {/* <Select
                                            label="Legislative District"
                                            name="legislativeDistrict"
                                            options={legislativeDistrictOptions}
                                        />
                                        <Select
                                            label="Administrative District"
                                            name="administrativeDistrict"
                                            options={administrativeDistricts}
                                        />
                                        <Select
                                            label="Barangay"
                                            name="barangay"
                                            options={barangayOptions}
                                        />
                                        <Select
                                            label="Position"
                                            name="isAdmin"
                                            options={positionOptions}
                                        /> */}





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
