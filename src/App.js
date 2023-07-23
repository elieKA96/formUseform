
import {useForm} from "react-hook-form";

function App() {

  const {handleSubmit, register,getValues,watch} = useForm();
  
  watch("name");

  function submit(value){
    console.log(value);
  }

  console.log(getValues());


  return (
    <div className="d-flex flex-row justify-content-center align-items-center"
    style={{background : "#fefefe", height:"100vh", width:"100%"}}
    >
     <form onClick={handleSubmit(submit)}>
      <div className="d-flex flex-column mb-20">
        <label htmlFor="name">
          Nom
        </label>
        <input {...register("name")} type="text" id="name" />
      </div>
      <button className="btn btn-primary">Save</button>
     </form>
    </div>
  );
}

export default App;


// handleSubmit : soumettre le formulaire
//getValues : recuperer les valeurs 
// register : enregistrer un input a l'interieur d'un formulaire
