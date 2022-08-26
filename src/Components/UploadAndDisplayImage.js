import { useState } from "react";

const UploadAndDisplayImage = (props) => {

    
    const ShowUI = () => 
    {
        console.log(props.selectedImage + "imgggg");

        if(props.selectedImage){
            return <>
            <img alt="not fount" width={"250px"} src={URL.createObjectURL(props.selectedImage)} />          
            <button onClick={()=>props.setSelectedImage(null)}>Remove</button>
            </>
        }

        return <>
         <input
          type="file"
          name="myImage"
          onChange={(event) => {
            console.log(event.target.files[0]);
            props.setSelectedImage(event.target.files[0]);
          }}
        />
        </>

    };

    return (
        <>
        <h2>{props.title}</h2>
        <ShowUI />
        </>
    );
  };

  export default UploadAndDisplayImage;