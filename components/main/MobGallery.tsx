import React, { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Image } from "@nextui-org/react";

const MobGallery = () => {
    const images = [
        '/images/1.jpg',
        '/images/2.jpg',
        '/images/3.jpg',
        '/images/4.jpg',
        '/images/5.jpg',
        '/images/6.jpg',
        '/images/7.jpg',
        '/images/8.jpg',
        '/images/9.jpg',
        '/images/10.jpg',
        '/images/11.jpg',
        '/images/12.jpg',

    ];

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [backdrop, setBackdrop] = useState('blur'); // Set the default backdrop to 'blur'

    const openModal = (image: string) => {
        setSelectedImage(image);
        setModalIsOpen(true);
        onOpen();
    };

    const closeModal = () => {
        setModalIsOpen(false);
        onClose();
    };

    const handleOpen = () => {
        onOpen();
    };

    return (
        <section id="gallery">
            <div className="p-4 text-center ">
                <h2 className="text-5xl tracking-wide py-6 font-bold mb-4">Gallery</h2>
                <div className="grid grid-cols-2 gap-4">
                    {images.map((image, index) => (
                        <Image
                            isBlurred
                            key={index}
                            className="rounded-lg shadow-lg cursor-pointer"
                            src={image}
                            alt={`Gallery ${index}`}
                            onClick={() => openModal(image)}
                        />
                    ))}
                </div>
                {modalIsOpen && (
                    <Modal className='bg-black flex items-center justify-center mx-[1.8em] my-auto border' backdrop={'blur'} isOpen={isOpen} onClose={onClose}>
                        <ModalContent>
                            <ModalHeader>
                                <button onClick={closeModal}>Close</button>
                            </ModalHeader>
                            <ModalBody>
                                <Image isBlurred src={selectedImage} alt="Selected" className=''/>
                            </ModalBody>
                        </ModalContent>
                    </Modal>
                )}
            </div>
        </section>
    );
};

export default MobGallery;
