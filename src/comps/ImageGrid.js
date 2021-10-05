import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";


const ImageGrid = ({ setSelectedImage }) => {

    const { docs } = useFirestore("images");
    // console.log(docs);

    return (
        <div className="img-grid">
            {docs && docs.map(doc => (
                < motion.div className="img-wrap" key={doc.id}
                    layout
                    /* layout animates when adding new pictures or new positions */
                    whileHover={{ opacity: 1 }}
                    /* opacity goes from 0.8 to 1 */
                    onClick={() => setSelectedImage(doc.url)} >
                    <motion.img src={doc.url} alt="new pic"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    // transiton adds a delay when a new pic gets added
                    ></motion.img>
                </motion.div>
            ))}
        </div>
    )
}

export default ImageGrid;