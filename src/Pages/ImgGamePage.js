import { useEffect, useState } from "react";
import ImageElement from "../Components/ImageElement";

const ImgGamePage = () => 
{

    const data =  [
        {
            id:1,
            url: "https://static.baubau.bg/resources/saveti-za-malko-kote.jpg",
            isSelect: false,
            isValid:true,
            quest: "КОТЕ?"          
        },
        {
            id:2,
            url: "https://baubau.bg/thumbs/1/zabolqvaniq-pri-malko-kote.jpg",
            isSelect: false,
            isValid:false,
            quest: "КОТЕ В ЧОРАП?"              
        },
        {
            id:3,
            url: "https://images.mamamia.bg/uploads/2018/02/2908173005_f502210802_b-1024x683.jpg",
            isSelect: false,
            isValid:false,
            quest: "СИВО КОТЕ?"           
        },
        {
            id:4,
            url: "https://i1.sndcdn.com/artworks-000245107749-okckwk-t240x240.jpg",
            isSelect: false,
            isValid:false,
            quest: "ПАТЕ В ГРАДИНАТА?"                   
        },
        {
            id:5,
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Mallard_duckling_3.jpg/220px-Mallard_duckling_3.jpg",
            isSelect: false,
            isValid:false,
            quest: "ПЛУВАЩО ПАТЕ?"                   
        },
        {
            id:6,
            url: "https://pontodesign.bg/wp-content/uploads/2020/04/puppy-1903313_1280-1024x682.jpg",
            isSelect: false,
            isValid:false,
            quest: "БЯЛО КУЧЕ?"                  
        },
        {
            id:7,
            url: "https://mm.netinfo.bg/resize/resize_on_the_fly.php?address=media/images/32906/32906604/991-ratio-kuche.jpg",
            isSelect: false,
            isValid:false,
            quest: "НАРИСУВАНО КУЧЕ?"                  
        },
        
    ];
      
       const [imgObgs, setImgObgs] = useState(data);
       const [valid, setValid] = useState("КОТЕЛЕ СЕ ТАРКАЛЯ?");

       const ClicedImg = (id) =>{
            var arr = [...imgObgs]
            var obj = arr.find(x => x.id === id);
            obj.isSelect = true;
            obj.isValid = false;

            var filtArr = arr.filter(x => x.isSelect === false).splice(0, 3);
            const randomElement = filtArr[Math.floor(Math.random() * filtArr.length)];
            if(randomElement){
                randomElement.isValid = true;
            }
            setValid(randomElement ? randomElement.quest: "BRAWO!!!!")
            
            setImgObgs(arr);
        }
  
     const Show = () => {
   
        return imgObgs.filter(x => x.isSelect === false).splice(0, 3).map(x => <ImageElement isValid={x.isValid} key={x.id} imageSRC={x.url} id={x.id} ClicedImg = {ClicedImg} />)
     }

        return(              
            <div>
                {valid}
                <Show/>
            </div>
                    
        );

}

export default ImgGamePage;