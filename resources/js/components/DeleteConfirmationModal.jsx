import React from "react";
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    FormControl,
    FormLabel,
    Input,
} from "@chakra-ui/react";

const DeleteConfirmationModal = ({ isOpen, onClose, onDelete }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onDelete();
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Delete Product</ModalHeader>
                <ModalBody>
                    <form onSubmit={handleSubmit}>
                        <FormControl>
                            <FormLabel>
                                Are you sure you want to delete this product?
                            </FormLabel>
                            <Input
                                type="hidden"
                                name="_method"
                                value="delete"
                            />
                        </FormControl>
                    </form>
                </ModalBody>

                <ModalFooter>
                    <Button variant="ghost" mr={3} onClick={onClose}>
                        Cancel
                    </Button>
                    <Button colorScheme="red" onClick={handleSubmit}>
                        Delete
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default DeleteConfirmationModal;
