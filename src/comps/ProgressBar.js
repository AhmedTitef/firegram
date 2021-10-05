import React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";

import useStorage from "../hooks/useStorage";

const ProgressBar = ({ file, setFile }) => {
    const { url, progress } = useStorage(file);

    useEffect(() => {
        if (url) {
            setFile(null); //if the picture is uploaded we need to remove the progress bar and it is removed when there is no file thats why we set setFile to null
        }

    }, [url, setFile])
    console.log(progress, url);  // we can use progress to set width for a progress bar
    return (
        <motion.div className="progress-bar"
            initial={{ width: 0 }}
            animate={{ width: progress + "%" }}
        ></motion.div>
    )
}

export default ProgressBar;