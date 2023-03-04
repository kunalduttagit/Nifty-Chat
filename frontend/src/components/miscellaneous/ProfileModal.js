import {
    Button,
    IconButton,
    Image,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    useDisclosure,
} from "@chakra-ui/react";

const ProfileModal = ({ user, children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            {children ? (
                <span onClick={onOpen}>{children}</span>
            ) : (
                <IconButton
                    d={{ base: 'flex' }}
                    colorScheme='blackAlpha'
                    backgroundColor='transparent'
                    icon={
                        <Image
                            width='31px'
                            src={user.pic}
                            borderRadius='full'
                            boxSize='40px'
                        />
                    }
                    onClick={onOpen}
                />
            )}

            <Modal isOpen={isOpen} onClose={onClose} size='lg' isCentered>
                <ModalOverlay />
                <ModalContent bg='#252525' color='white'>
                    <ModalHeader fontSize='40px' fontFamily='Montserrat' fontWeight='500' textAlign='center'>
                        {user.name}
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody display='flex' flexDir='column' alignItems='center' justifyContent='space-between'>
                        <Image borderRadius='full' boxSize='150px' src={user.pic} alt={user.name} />
                        <br />
                        <br />
                        <Text fontSize={{ base: '24px', md: '27px' }} fontFamily='Montserrat'>
                            Email: {user.email}{' '}
                        </Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default ProfileModal;
