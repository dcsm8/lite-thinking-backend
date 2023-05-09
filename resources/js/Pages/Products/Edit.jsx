import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
    Box,
    Button,
    Container,
    FormControl,
    FormLabel,
    Heading,
    Input,
    InputGroup,
    InputLeftAddon,
    NumberInput,
    NumberInputField,
    Flex,
} from "@chakra-ui/react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";

const Edit = ({ product }) => {
    const { register, handleSubmit, setValue } = useForm({
        defaultValues: {
            name: product.name,
            description: product.description,
            price: product.price,
        },
    });

    const onSubmit = (data) => {
        Inertia.put(`/products/${product.id}`, data);
    };

    return (
        <Container maxW="container.lg">
            <Box maxW="xl" mx="auto" mt={10} p={5}>
                <Heading as="h1" size="xl" mb={5}>
                    Edit Product
                </Heading>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl mb={5}>
                        <FormLabel htmlFor="name">Name</FormLabel>
                        <Input
                            id="name"
                            placeholder="Enter product name"
                            {...register("name", { required: true })}
                        />
                    </FormControl>
                    <FormControl mb={5}>
                        <FormLabel htmlFor="description">Description</FormLabel>
                        <Input
                            id="description"
                            placeholder="Enter product description"
                            {...register("description")}
                        />
                    </FormControl>
                    <FormControl mb={5}>
                        <FormLabel htmlFor="price">Price</FormLabel>
                        <InputGroup>
                            <InputLeftAddon children="$" />
                            <NumberInput
                                id="price"
                                min={0}
                                defaultValue={product.price}
                                onChange={(value) => setValue("price", value)}
                            >
                                <NumberInputField
                                    placeholder="Enter product price"
                                    {...register("price", {
                                        required: true,
                                        min: 0,
                                    })}
                                />
                            </NumberInput>
                        </InputGroup>
                    </FormControl>
                    <Flex justifyContent="flex-end">
                        <InertiaLink href="/products" as="button">
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
    );
};

export default Edit;
