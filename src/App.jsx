import { useState } from "react";
import "./App.css";
import { Button } from "@mui/material";

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      title: "Nekruz",
      complete: false,
    },
    {
      id: 2,
      title: "Olim",
      complete: false,
    },
    {
      id: 3,
      title: "Navruz",
      complete: false,
    },
  ]);


  const[title,setTitle]=useState("")



///////////Delete

  // const deleteTodo = (id) => {
  //   let ar = data.filter((e) => {
  //     return e.id!=id
  //   })
  //   setData(ar)
  // }
  
  // const deleteTodo = (id) => {
  //   let ar = data.filter((e) => {
  //     return e.id!=id
  //   })
  //   setData(ar)
  // }

  const dalateTodo = (id) => {
    let ar = data.filter((e) => {
      return e.id!=id
    })
    setData(ar)
  }


  ////////Delete


////Add//////
  const addTodo = () => {
    if (title.trim().length == 0) {
      return alert("Nekruzjon membri pur kuni")
    }
    else {
      let obj = {
        id: new Date().getTime(),
        title: title,
      };
      let ar = [...data, obj];
      setData(ar);
      setTitle("")
    }
    
  }

  const completeTodo = (id) => {
    let ar = data.map((e) => {
      if (e.id == id) {
        e.complete=!e.complete
      }
      return e
    })
    setData(ar)
}


  ////Complete///// 

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        name=""
        id=""
      />

      <Button variant="contained" color="success" onClick={() => addTodo(title)}>Add</Button>

      {data.map((e) => {
        return (  
          <>
            {e.complete ? (
              <h1 className=" text-red-600 line-through">{e.title}</h1>
            ) : (
              <h1 className=" to-black line-through">{e.title}</h1>
            )}
            {/* <button onClick={() => deleteTodo(e.id)}>Delete</button> */}
            {/* <button onClick={()=>deleteTodo(e.id)}>delete</button> */}
            <Button
              variant="contained"
              color="error"
              onClick={() => dalateTodo(e.id)}
            >
              delete
            </Button>
            <Button variant="contained" onClick={() => completeTodo(e.id)}>
              Complete
            </Button>
            <Button variant="contained" color="secondary">Edit</Button>
          </>
        );
      })}
    </div>
  );
}

export default App;
