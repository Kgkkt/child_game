const ImageElement = (props) =>
{  

  const click = () => 
  {

    console.log(props.isValid)
      
    if(props.isValid)
    props.ClicedImg(props.id)
  };
    return (
      <div>        
        <img onClick={click} src={props.imageSRC} alt="Girl in a jacket" width="100" height="100" />
       
      </div>
    );
};

export default ImageElement;