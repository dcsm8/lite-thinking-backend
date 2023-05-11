import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
    Box,
    Button,
    Container,
    FormControl,
    FormLabel,
    Heading,
    Input,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    NumberInput,
    NumberInputField,
    Flex,
    Textarea,
} from "@chakra-ui/react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";
import Layout from "../../components/Layout";
import Select from "react-select";

const Edit = ({ product, auth, categories }) => {
    const { register, handleSubmit, setValue } = useForm({
        defaultValues: {
            name: product.name,
            description: product.description,
            price: product.price,
        },
    });

    const [selectedCategories, setSelectedCategories] = useState(
        product.categories.map((category) => ({
            value: category.id,
            label: category.name,
        }))
    );

    const categoryOptions = categories.map((category) => ({
        value: category.id,
        label: category.name,
    }));

    useEffect(() => {
        const selectedOptions = product.categories.map((category) => ({
            value: category.id,
            label: category.name,
        }));
        setSelectedCategories(selectedOptions);
    }, [product.categories]);

    const handleCategoriesChange = (selectedOptions) => {
        setSelectedCategories(selectedOptions);
    };

    const onSubmit = (data) => {
        Inertia.put(`/products/${product.id}`, {
            ...data,
            categories: selectedCategories.map((option) => option.value),
        });
    };

    return (
        <Layout auth={auth}>
            <Container maxW="container.lg">
                <Box maxW="xl" mx="auto" mt={5}>
                    <Heading as="h1" size="xl" mb={5}>
                        Edit Product {product.id}
                    </Heading>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl mb={5}>
                            <FormLabel htmlFor="name">Name</FormLabel>
                            <Input
                                id="name"
                                {...register("name", { required: true })}
                            />
                        </FormControl>
                        <FormControl mb={5}>
                            <FormLabel htmlFor="description">
                                Description
                            </FormLabel>
                            <Textarea
                                id="description"
                                {...register("description", { required: true })}
                            />
                        </FormControl>
                        <FormControl id="price" mb={5}>
                            <FormLabel>Price</FormLabel>
                            <NumberInput
                                min={0}
                                precision={2}
                                format={(value) => `${value}`}
                            >
                                <NumberInputField
                                    {...register("price", {
                                        required: true,
                                        min: 0,
                                    })}
                                />
                            </NumberInput>
                        </FormControl>
                        <FormControl id="categories" mb={5}>
                            <FormLabel>Categories</FormLabel>
                            <Select
                                options={categoryOptions}
                                isMulti
                                value={selectedCategories}
                                onChange={handleCategoriesChange}
                            />
                        </FormControl>
                        <Flex justifyContent="flex-end">
                            <InertiaLink href="/products">
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
