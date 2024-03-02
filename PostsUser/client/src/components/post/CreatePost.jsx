import { useState } from "react";
import axios from "axios";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
const CreatePost = () => {
  // const [file, setFile] = useState();
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({ onDrop });
  // const [input, setInput] = useState({
  //   title: "",
  //   texto: "",
  //   image: "",
  // });
  // const handleChange = (event) => {
  //   event.preventDefault();
  //   const property = event.target.name;
  //   const value = event.target.value;
  //   setInput({
  //     ...input,
  //     [property]: value,
  //   });
  // };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
    const texto = event.target[0].value;
    const formData = new FormData();
    formData.append("file", acceptedFiles[0]);
    formData.append("upload_preset", "iatezyxp");
    formData.append("api_key", "339868387436886");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dgbmuhni6/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await res.json();
    const imagen = data.secure_url;
    console.log(data);
    const enviar = { texto, imagen };
    console.log(enviar);
  };

  return (
    <section style={{ width: "500px" }}>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center bg-slate-700 rounded-lg "
      >
        <div className="flex flex-col">
          <label htmlFor="">Crear post</label>
          <input className="py-8" type="text" placeholder="Crear Post" />
        </div>
        <div
          className="border-dashed border-2 border-sky-500 py-8"
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>inserte una imagen haciendo click o arrastrando</p>
          )}
        </div>
        {acceptedFiles[0] && (
          <img
            src={URL.createObjectURL(acceptedFiles[0])}
            alt=""
            style={{ width: "300px", height: "300px" }}
          />
        )}
        {/* <div>
          <label htmlFor="">🎴</label>
          <input
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
            type="file"
          />
        </div> */}
        <div>
          <button>enviar</button>
        </div>
      </form>
    </section>
    // <section className=" flex flex-col border-solid border-2 border-sky-500 rounded-md bg-gray-500 ">
    // <form
    //   onSubmit={handleSubmit}
    //   className="flex flex-col py-2  border-solid border-2 border-sky-500 rounded-md bg-gray-500"
    // >

    //   <div className=" flex flex-col py-4">
    //     <label htmlFor="">Crear publicación</label>
    //     <input
    //       className="h-24"
    //       name="texto"
    //       value={input.texto}
    //       onChange={handleChange}
    //       placeholder="Crear Publicación"
    //       type="text"
    //     />
    //   </div>
    //   <div className=" flex justify-around py-4">
    //     <label htmlFor="">imagen:</label>

    //     <input type="file" name="" id="" />
    //   </div>
    //   <button type="submit" className=" border-red-500 rounded-md">
    //     publicar
    //   </button>
    // </form>
    // </section>
  );
};

export default CreatePost;
