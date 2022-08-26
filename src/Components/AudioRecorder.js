import { useState } from 'react';
import {useReactMediaRecorder} from 'react-media-recorder';


const AudioRecorder = (props) => 
{

    const [play, setPlay]= useState(false);

    const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ 
        audio: true,
        
    });

    const stopClick = ()=> {
        stopRecording();
       
        props.setAudio(mediaBlobUrl);
        setPlay(null);
    }

    const ShowStartStopBtns = () => 
    {

        if(play === null){
            return <></>
        }

        if(play){

            
            return <>
                <button onClick={stopBtnClick}>Stop</button>
            </>
        }

        return <>
            <button onClick={startBtnClick}>Start</button>
        </>
      
    }

    const startBtnClick = () => 
    {
        startRecording();
        setPlay(true);

    }
    const stopBtnClick = () => 
    {
        stopRecording();
        setPlay(false);

    }



   return (
        <div>

            <h2>{props.title}</h2>
         
        <ShowStartStopBtns />
        {play !== null && <button onClick={stopClick}>Запази</button>}
            {/* <source src={mediaBlobUrl} ></source> */}            
       <audio src={mediaBlobUrl} autoPlay controls></audio>           
        </div>
  
   )
    
}

export default AudioRecorder;