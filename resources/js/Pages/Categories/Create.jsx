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
    Textarea,
} from "@chakra-ui/react";
import { InertiaLink } from "@inertiajs/inertia-react";

const Create = () => {
    const { register, handleSubmit, formState } = useForm();

    const onSubmit = (data) => {
        Inertia.post("/categories", data);
    };

    return (
        <Container maxW="container.lg">
            <Box maxW="xl" mx="auto" mt={5}>
                <Heading as="h1" size="xl" mb={5}>
                    Create Category
                </Heading>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl id="name" mb={5}>
                        <FormLabel>Name</FormLabel>
                        <Input
                            {...register("name", { required: true })}
                            type="text"
                            placeholder="Enter category name"
                        />
                    </FormControl>
                    <FormControl id="description" mb={5}>
                        <FormLabel>Description</FormLabel>
                        <Textarea
                            {...register("description", { required: true })}
                            type="text"
                            placeholder="Enter category description"
                        />
                    </FormControl>
                    <Flex justifyContent="flex-end">
                        <InertiaLink href="/categories">
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
    );
};

export default Create;
