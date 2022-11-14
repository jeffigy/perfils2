import React from 'react'
import {
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    useDisclosure,
    Button,
    Input,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Stack,
    NumberInput,
    NumberInputField,
    Box
} from '@chakra-ui/react'
import {
    legislativeDistrictOptions,
    administrativeDistricts,
    barangayOptions
} from "../components/Constants";
import { Form, Field, Formik } from "formik";
import { useToast } from '@chakra-ui/react'
import { db } from '../../utils/init-firebase'
import {
    collection,
    addDoc
} from "firebase/firestore"
import Select from "../components/Fields/Select";
import { AddIcon } from '@chakra-ui/icons'
import DatePicker from '../components/Fields/DatePicker';




export default function Create() {


    async function createClient(values) {
        const today = new Date();
        const tomorrow = new Date()
        
        const usersCollectionRef = collection(db, "appointments")
        await addDoc(usersCollectionRef,
            {
                firstName: values.firstname,
                middleName: values.middlename,
                lastname: values.lastname,
                appointment: values.appointment,
                establishment: values.establishment,
                createdAt: new Date(),
                status: "active"
            }

        );

    }



    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const toast = useToast()
    const firstField = React.useRef()



    return (
        <>
            <Button
                leftIcon={<AddIcon />}
                ref={btnRef}
                colorScheme='green'
                onClick={onOpen}
            >
                Add Appointment
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
                        Add New Appointment
                    </ModalHeader>

                    <Formik
                        initialValues={{
                        }}
                        onSubmit={(values, actions) => {
                            createClient(values)
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
                                })
                        }}
                    >
                        {(props) => (
                            <Form>
                                <ModalBody>
                                    <Stack spacing={4}>
                                        <Box>
                                            <Field name='firstname' >
                                                {({ field, form }) => (
                                                    <FormControl isInvalid={form.errors.firstname && form.touched.firstname}>
                                                        <FormLabel htmlFor='firstname'>First Name</FormLabel>
                                                        <Input {...field} id='firstname' />
                                                        <FormErrorMessage>{form.errors.firstname}</FormErrorMessage>
                                                    </FormControl>
                                                )}
                                            </Field>
                                        </Box>
                                        <Box>
                                            <Field name='middlename' >
                                                {({ field, form }) => (
                                                    <FormControl isInvalid={form.errors.middlename && form.touched.middlename}>
                                                        <FormLabel htmlFor='middlename'>Middle Name </FormLabel>
                                                        <Input {...field} id='middlename' />
                                                        <FormErrorMessage>{form.errors.middlename}</FormErrorMessage>
                                                    </FormControl>
                                                )}
                                            </Field>
                                        </Box>
                                        <Box>
                                            <Field name='lastname' >
                                                {({ field, form }) => (
                                                    <FormControl isInvalid={form.errors.lastname && form.touched.lastname}>
                                                        <FormLabel htmlFor='lastname'>Last Name</FormLabel>
                                                        <Input {...field} id='lastname' />
                                                        <FormErrorMessage>{form.errors.lastname}</FormErrorMessage>
                                                    </FormControl>
                                                )}
                                            </Field>
                                        </Box>
                                        <Box>
                                            <Field name='establishment' >
                                                {({ field, form }) => (
                                                    <FormControl isInvalid={form.errors.establishment && form.touched.establishment}>
                                                        <FormLabel htmlFor='establishment'>Establishment Name</FormLabel>
                                                        <Input {...field} id='establishment' />
                                                        <FormErrorMessage>{form.errors.establishment}</FormErrorMessage>
                                                    </FormControl>
                                                )}
                                            </Field>
                                            <DatePicker label="Date" name="appointment" />
                                        </Box>
                                        
                                        
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
