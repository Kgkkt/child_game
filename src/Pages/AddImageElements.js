import { useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import AudioRecorder from "../Components/AudioRecorder";
import UploadAndDisplayImage from "../Components/UploadAndDisplayImage";
import axios from 'axios';

const AddImageElements = () => 
{
    const [selectedImage, setSelectedImage] = useState(null);
    const [audio, setAudio] = useState("");
    const [audio1, setAudio1] = useState("");

    
    async function  SaveElement() 
    {


        const imgFormData = new FormData();
        
        const questBlob = await fetch(audio)
        .then(response => response.blob());
        
        
        const answerBlob = await fetch(audio1)
        .then(response => response.blob());
        
        imgFormData.append("img", selectedImage);
        imgFormData.append("quest", questBlob);
        imgFormData.append("answer", answerBlob);
        imgFormData.append("txt", "sdafasgsdfgdfsa asfas ");
 

        axios.post('http://localhost:5283/api/Playlists/setGameElement', imgFormData
        ,{
            headers: {
               // "Accept": "application/json",
                "Content-Type": "multipart/form-data",
            }
        })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    //   axios.post('http://localhost:5283/api/Playlists/setGameElement', imgFormData
    //   ,{
    //       headers: {
    //           "Accept": "application/json",
    //           "Content-Type": "multipart/form-data'",
    //       }
    //   })
    //     .then(function (response) {
    //       console.log(response);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     }); 
     
    };

    const PlaySound = () => 
    {
        const urls = "";
        axios.get("http://localhost:5283/api/Playlists/getSound?id=1")
        .then(x => {
            
            console.log(x.data);
         
            new Audio('data:audio/ogg;base64,' + x.data).play();
                            
        })
        .catch(x => console.log(x));
    }




    return (
        <div>
            <UploadAndDisplayImage title="Прикачи картина за игра!!!" selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>
            <AudioRecorder setAudio={setAudio} title="Задай въпрос!"/>
            <AudioRecorder setAudio={setAudio1} title="Запиши отрицателен отговор"/>
            <button onClick={SaveElement}>ДОБАВИ КЪМ СПИСЪКА</button>

           <button onClick={PlaySound}> pusni</button>
        </div>
    )

};

export default AddImageElements;