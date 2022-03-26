import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";



function App() {

const [finaltitle,setfinaltitle]= React.useState([]);

function updateNote(probs,event){
  setfinaltitle((prevvalue)=>{
    return [...prevvalue,probs];

  });
  
}

function deleteItem(id) {

    setfinaltitle((prevvalue)=>{
      return prevvalue.filter((element,index)=>{
          return index !== id;

        })
      })

}
  return (
    <div>
      <Header />
      <CreateArea
      add={updateNote}
      />
      {  finaltitle.map((element,index) => (
        <Note key={index} id={index} title={element.title} content={element.content} del={deleteItem}/>
      ))

             }
      <Footer />
    </div>
  );
}

export default App;
