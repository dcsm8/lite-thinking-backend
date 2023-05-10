import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { useForm } from "react-hook-form";
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Textarea,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
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
        Inertia.post("/products", data);
    };

    return (
        <Layout auth={auth}>
            <Container maxW="container.lg">
                <Box maxW="xl" mx="auto" mt={5}>
                    <Heading as="h1" size="xl" mb={5}>
                        Create Product
                    </Heading>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl id="name" mb={5}>
                            <FormLabel>Name</FormLabel>
                            <Input
                                {...register("name", { required: true })}
                                type="text"
                                placeholder="Enter product name"
                            />
                        </FormControl>
                        <FormControl id="description" mb={5}>
                            <FormLabel>Description</FormLabel>
                            <Textarea
                                {...register("description", { required: true })}
                                placeholder="Enter product description"
                            />
                        </FormControl>
                        <FormControl id="price" mb={5}>
                            <FormLabel>Price</FormLabel>
                            <NumberInput>
                                <NumberInputField
                                    {...register("price", {
                                        required: true,
                                        min: 0,
                                    })}
                                    placeholder="Enter product price"
                                />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </FormControl>
                        <Flex justifyContent="flex-end">
                            <InertiaLink href="/products">
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
