import React from "react";
import { useForm } from "react-hook-form";
import {
    Box,
    Button,
    Container,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Flex,
} from "@chakra-ui/react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";
import Layout from "../../components/Layout";

const Edit = ({ category, auth }) => {
    const { register, handleSubmit, setValue } = useForm({
        defaultValues: {
            name: category.name,
            description: category.description,
        },
    });

    const onSubmit = (data) => {
        Inertia.put(`/categories/${category.id}`, data);
    };

    return (
        <Layout auth={auth}>
            <Container maxW="container.lg">
                <Box maxW="xl" mx="auto" mt={5}>
                    <Heading as="h1" size="xl" mb={5}>
                        Edit Category {category.id}
                    </Heading>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl mb={5}>
                            <FormLabel htmlFor="name">Name</FormLabel>
                            <Input
                                id="name"
                                placeholder="Enter category name"
                                {...register("name", { required: true })}
                            />
                        </FormControl>
                        <FormControl mb={5}>
                            <FormLabel htmlFor="description">
                                Description
                            </FormLabel>
                            <Input
                                id="description"
                                placeholder="Enter category description"
                                {...register("description")}
                            />
                        </FormControl>
                        <Flex justifyContent="flex-end">
                            <InertiaLink href="/categories">
                                <Button colorScheme="red" mr={3}>
                                    Cancel
                                </Button>
                            </InertiaLink>
                            <Button type="submit" colorScheme="blue">
                                Update
                            </Button>
                        </Flex>
                    </form>
                </Box>
            </Container>
        </Layout>
    );
};

export default Edit;
