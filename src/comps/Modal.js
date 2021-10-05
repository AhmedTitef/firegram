import React from "react";
import { motion } from "framer-motion";


const Modal = ({ selectedImage, setSelectedImage }) => {


    const handleClick = (e) => {
        if (e.target.classList.contains("backdrop")) {
            // if we click on the backdrop then close, but if it "contains" a img then it means we clicked on the image and we dont want to close the backdrop when we click the img. but we want to close when we click on the backdrop which is the background
            setSelectedImage(null); // it closes the backdrop
        }

    }
    return (
        <motion.div className="backdrop" onClick={handleClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <motion.img src={selectedImage} alt="enlarged pic"
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }} />
        </motion.div>
    )
}

export default Modal;