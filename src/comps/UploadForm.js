import React, { useState, useCallback } from "react";
import ProgressBar from "./ProgressBar";
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import Croppers from "./Cropper";
import Cropper from 'react-easy-crop'

import { getCroppedImg } from "../canvasUtils";


const UploadForm = () => {
    const [file, setFile] = useState(null);

    const types = ["image/png", "image/jpeg"];

    const [error, setError] = useState(null);

    const [imageSrc, setImageSrc] = useState(null)

    const [croppedImage, setCroppedImage] = useState(null)

    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)

    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)

    const handleClick = (e) => {
        if (e.target.classList.contains("backdrop")) {
            // if we click on the backdrop then close, but if it "contains" a img then it means we clicked on the image and we dont want to close the backdrop when we click the img. but we want to close when we click on the backdrop which is the background
            setImageSrc(null); // it closes the backdrop
        }

    }

    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        console.log(croppedArea, croppedAreaPixels)
    }, [])


    const showCroppedImage = useCallback(async () => {
        try {
            const croppedImage = await getCroppedImg(
                imageSrc,
                croppedAreaPixels,

            )
            console.log('donee', { croppedImage })
            setCroppedImage(croppedImage)
        } catch (e) {
            console.error(e)
        }
    }, [imageSrc, croppedAreaPixels])



    const onFileChange = async (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const fileee = e.target.files[0]
            let imageDataUrl = await readFile(fileee)

            // apply rotation if needed


            setImageSrc(imageDataUrl)
        }
    }
    function readFile(file) {
        return new Promise((resolve) => {
            const reader = new FileReader()
            reader.addEventListener('load', () => resolve(reader.result), false)
            reader.readAsDataURL(file)
        })
    }


    const changeHandler = (e) => {
        // console.log("changed");

        let selected = e.target.files[0];
        if (selected && types.includes(selected.type)) { //if   we have a file update

            console.log(selected);

            setFile(selected);//seting file to selected file
            setError("");
        } else {
            setFile(null); //reseting the value because an invalid file was shown
            setError("Please select an image file( png or jpeg)");

        }

    }

    return (
        <form>

            {/* {imageSrc && console.log(imageSrc)} */}
            <label>
                <input type="file" onChange={changeHandler} />
                <span>+</span>
            </label>

            <div className="output">
                {error && <div className="error">{error}</div>}
                {/* if we have an error, we show a div */}
                {file && <div> {file.name} </div>}

            </div>


            {/* {imageSrc && <Croppers file={imageSrc} />} */}

            {/* {imageSrc && <div  >
                <div >
                    {<Cropper
                        image={imageSrc}
                        crop={crop}
                        zoom={zoom}
                        aspect={4 / 3}
                        onCropChange={setCrop}
                        onCropComplete={onCropComplete}
                        onZoomChange={setZoom}
                    />}
                </div>
                <div>
                    <button
                        onClick={showCroppedImage}
                        variant="contained"
                        color="primary"

                    >
                        Show Result
                    </button>
                </div>

            </div>
            } */}

            {/* <ReactCrop src="/Users/titef/Desktop/College/web development/firegram/bmw-logo-2020-blue-white.png" crop={crop} onChange={newCrop => setCrop(newCrop)} /> */}
            {file && <ProgressBar file={file} setFile={setFile} />}



        </form >


    )




}

export default UploadForm;