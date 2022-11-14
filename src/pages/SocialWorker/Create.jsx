import React from 'react'
import {
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    ModalContent,
    ModalCloseButton, useDisclosure, Button, Stack, FormControl, FormLabel, Input, FormErrorMessage, Box
} from '@chakra-ui/react'
import { Field, Form, Formik } from "formik";
import { v4 as uuidv4 } from 'uuid';
import { useToast } from '@chakra-ui/react'
import { AddIcon } from "@chakra-ui/icons";
import { useAuth } from "../../contexts/AuthContext";
import {
    legislativeDistrictOptions,
    administrativeDistricts,
    barangayOptions,
    positionOptions,
} from "../components/Constants";
import Select from '../components/Fields/Select';

export default function Create() {
    const { manualLogin } = useAuth()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const toast = useToast()
    const firstField = React.useRef()



    return (
        <>
            <Button ref={btnRef} leftIcon={<AddIcon />} colorScheme='green' onClick={onOpen}>
                Add Users
            </Button>
            <Modal
                isOpen={isOpen}
                initialFocusRef={firstField}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalHeader borderBottomWidth='1px'>
                        Add new User
                    </ModalHeader>
                    <Formik
                        initialValues={{
                            id: uuidv4(),
                            displayName: "",
                            firstName:"",
                            lastName: "",
                            middleName: ""
                        }}
                        onSubmit={(values, actions) => {
                            manualLogin(values)

                                .then(() => {
                                    toast({
                                        title: 'Success',
                                        description: 'User created successfully',
                                        status: 'success',
                                        duration: 9000,
                                        isClosable: true,
                                    })
                                    actions.setSubmitting(false)
                                    onClose()
                                })

                                .catch(err => {
                                    toast({
                                        title: 'Error',
                                        description: 'All fields are required',
                                        status: 'error',
                                        duration: 9000,
                                        isClosable: true,
                                    })
                                    actions.setSubmitting(false)
                                }
                                )
                        }
                        }
                    >
                        {(props) => (
                            <Form>

                                <ModalBody>
                                    <Stack spacing={4}>
                                        <Box>
                                            <Field name='displayName' >
                                                {({ field, form }) => (
                                                    <FormControl isInvalid={form.errors.displayName && form.touched.displayName}>
                                                        <FormLabel htmlFor='displayName'>Display Name</FormLabel>
                                                        <Input {...field} id='displayName' />
                                                        <FormErrorMessage>{form.errors.displayName}</FormErrorMessage>
                                                    </FormControl>
                                                )}
                                            </Field>
                                            <Field name='firstName' >
                                                {({ field, form }) => (
                                                    <FormControl isInvalid={form.errors.firstName && form.touched.firstName}>
                                                        <FormLabel htmlFor='firstName'>First Name</FormLabel>
                                                        <Input {...field} id='firstName' />
                                                        <FormErrorMessage>{form.errors.firstName}</FormErrorMessage>
                                                    </FormControl>
                                                )}
                                            </Field>
                                            <Field name='lastName' >
                                                {({ field, form }) => (
                                                    <FormControl isInvalid={form.errors.lastName && form.touched.lastName}>
                                                        <FormLabel htmlFor='lastName'>Last Name</FormLabel>
                                                        <Input {...field} id='lastName' />
                                                        <FormErrorMessage>{form.errors.lastName}</FormErrorMessage>
                                                    </FormControl>
                                                )}
                                            </Field>
                                            <Field name='middleName' >
                                                {({ field, form }) => (
                                                    <FormControl isInvalid={form.errors.middleName && form.touched.middleName}>
                                                        <FormLabel htmlFor='middleName'>Middle Name</FormLabel>
                                                        <Input {...field} id='middleName'/>
                                                        <FormErrorMessage>{form.errors.middleName}</FormErrorMessage>
                                                    </FormControl>
                                                )}
                                            </Field>

                                            <Field name='age' >
                                                {({ field, form }) => (
                                                    <FormControl isInvalid={form.errors.age && form.touched.age}>
                                                        <FormLabel htmlFor='age'>Age</FormLabel>
                                                        <Input {...field} id='age' type="number"/>
                                                        <FormErrorMessage>{form.errors.age}</FormErrorMessage>
                                                    </FormControl>
                                                )}
                                            </Field>
                                            
                                        </Box>
                                        <Field name='email' >
                                            {({ field, form }) => (
                                                <FormControl isInvalid={form.errors.email && form.touched.email}>
                                                    <FormLabel htmlFor='email'>Email Address</FormLabel>
                                                    <Input {...field} id='email' />
                                                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                        {/* <Box>
                                            <Select
                                                label="Legislative District"
                                                name="legislativeDistrict"
                                                options={legislativeDistrictOptions}
                                            />
                                        </Box>
                                        <Box>
                                            <Select
                                                label="Administrative District"
                                                name="administrativeDistrict"
                                                options={administrativeDistricts}
                                            />
                                        </Box>
                                        <Box>
                                            <Select
                                                label="Barangay"
                                                name="barangay"
                                                options={barangayOptions}
                                            />
                                        </Box>
                                        <Box>
                                            <Select
                                                label="Position"
                                                name="isAdmin"
                                                options={positionOptions}
                                            />
                                        </Box> */}
                                    </Stack>
                                </ModalBody>

                                <ModalFooter borderTopWidth='1px'>
                                    <Button
                                        mr={3}
                                        colorScheme='blue'
                                        isLoading={props.isSubmitting}
                                        type='submit'
                                    >
                                        Submit
                                    </Button>
                                    <Button
                                        variant='outline'
                                        mr={3}
                                        onClick={onClose}>
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