import React from "react";



function CreateArea(probs) {

  const[titleName,settitleName] = React.useState(
  {
    title:"",
    content:""
  }
);

     function tracktitle(event){
        const {name,value} = event.target;
        settitleName(prevValue => {

          return {
            ...prevValue,
            [name]:value
          }


        });

     }


  return (
    <div>
      <form>
        <input  onChange={tracktitle} name="title" placeholder="Title" />
        <textarea  onChange={tracktitle} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={ (event)=>{ probs.add(titleName,event); }  }>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
