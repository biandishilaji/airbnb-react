import React, { useState, useMemo } from "react";
import camera from "../../assets/camera.svg";

export default function New() {
  const [company, setCompany] = useState("")
  const [techs, setTechs] = useState("");
  const [price, setPrice] = useState("");
  const [thumbnail, setThumbnail] = useState(null);


  const preview = useMemo(() => { 
          return thumbnail ? URL.createObjectURL(thumbnail) : null; 
        }, [thumbnail])

  function handleSubmit() {}

  return (
    <form onSubmit={handleSubmit}>
      <label className={(thumbnail ? 'has-preview' : 'image')}
       style={{backgroundImage: `url(${preview})`}}>
        <input type="file"
         onChange={event => setThumbnail(event.target.files[0])}/>
        <img src={camera} alt="Select img" />
      </label>

      <label htmlFor="company">EMPRESA *</label>
      <input
        id="company"
        placeholder="Company"
        value={company}
        onChange={event => setCompany(event.target.value)}
      />

      <label htmlFor="techs">
        TECNOLOGIAS * <span>Separados por vírgula</span>{" "}
      </label>
      <input
        id="techs"
        placeholder="Quais tecnologias usam?"
        value={techs}
        onChange={event => setTechs(event.target.value)}
      />
      <label htmlFor="techs">
        VALOR DIÁRIA * <span>(em branco para gratuíto)</span>{" "}
      </label>

      <input
        id="price"
        placeholder="Valor cobrado por dia"
        value={price}
        onChange={event => setPrice(event.target.value)}
      />
      <button className="btn">Cadastrar</button>
    </form>
  );
}
