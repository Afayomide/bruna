import React, { useState } from "react"
import "./header.css"
import logo from "../../assets/bruna-logo.png"


function Header (){
  const [searchValue, setSearchValue] = useState("")
  const handleChange = event => {
    setSearchValue(event.target.value);

  }     
  let url = `https://www.brunasemijoias.com.br/produtos/?Busca=${searchValue}`

    return(
        <header>
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={logo}/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.brunasemijoias.com.br/catalogo">Catalog</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex">
    
        <input className="form-control me-2" type="search" onChange={handleChange} value={searchValue} placeholder="enter the product name or code" aria-label="Search"/>
        <a href={url}><button className="btn btn-outline-success"> <a href={url}>Search</a></button></a>
      </form>
    </div>
  </div>
</nav> 
        </header>
    )
}

export default Header