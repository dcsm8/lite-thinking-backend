import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { useForm } from "react-hook-form";
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Container,
    Box,
    Heading,
    Flex,
} from "@chakra-ui/react";
import { InertiaLink } from "@inertiajs/inertia-react";
import Layout from "../../components/Layout";

const Create = ({ auth }) => {
    const { register, handleSubmit, formState } = useForm();

    const onSubmit = (data) => {
        Inertia.post("/companies", data);
    };

    return (
        <Layout auth={auth}>
            <Container maxW="container.lg">
                <Box maxW="xl" mx="auto" mt={5}>
                    <Heading as="h1" size="xl" mb={5}>
                        Create Company
                    </Heading>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl id="NIT" mb={5}>
                            <FormLabel>NIT</FormLabel>
                            <Input
                                {...register("NIT", { required: true })}
                                type="text"
                                placeholder="Enter NIT"
                            />
                        </FormControl>
                        <FormControl id="name" mb={5}>
                            <FormLabel>Name</FormLabel>
                            <Input
                                {...register("name", { required: true })}
                                type="text"
                                placeholder="Enter name"
                            />
                        </FormControl>
                        <FormControl id="address" mb={5}>
                            <FormLabel>Address</FormLabel>
                            <Input
                                {...register("address", { required: true })}
                                type="text"
                                placeholder="Enter address"
                            />
                        </FormControl>
                        <FormControl id="phone" mb={5}>
                            <FormLabel>Phone</FormLabel>
                            <Input
                                {...register("phone", { required: true })}
                                type="text"
                                placeholder="Enter phone"
                            />
                        </FormControl>
                        <Flex justifyContent="flex-end">
                            <InertiaLink href="/companies">
                                <Button colorScheme="red" mr={3}>
                                    Cancel
                                </Button>
                            </InertiaLink>
                            <Button
                                colorScheme="teal"
                                isLoading={formState.isSubmitting}
                                type="submit"
                            >
                                Create
                            </Button>
                        </Flex>
                    </form>
                </Box>
            </Container>
        </Layout>
    );
};

export default Create;
