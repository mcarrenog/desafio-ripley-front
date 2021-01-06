import React, { useState } from 'react';

import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';




export const MyNavbar = ({ setSearch }) => {


    const [inputValue, setInputValue] = useState('');

    const handledInputChange = (e) => {

        setInputValue(e.target.value);
        console.log(e.target.value, 'MyNavbar');
    }

    const handledSubmit = (e) => {

        console.log('presione')
        e.preventDefault();

        // setSearch(cats => [inputValue]);





        // console.log('inputValue', this.props.search(inputValue));


        // searchDelegate(prods => [inputValue, ...prods]);
        if (!Number(inputValue)) {

            if (inputValue.trim().length > 2) {
                setSearch(prods => [inputValue]);
                setInputValue('');
            }
        }
        else {
            setSearch(prods => [inputValue]);

            setInputValue('');

        }
    }

    return (


        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Catálogo</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/crud">Crud</a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0" onSubmit={handledSubmit}>
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={inputValue} onChange={handledInputChange} />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onChange={handledInputChange}>Search</button>
                </form>
            </div>
        </nav>


        // <nav className="navbar navbar-dark bg-dark justify-content-between">
        //     <a className="navbar-brand">Catálogo</a>
        //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        //         <span className="navbar-toggler-icon"></span>
        //     </button>

        //     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

        //         <div className="navbar-nav">
        //             <a className="nav-item nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
        //             <a className="nav-item nav-link" href="/crud">Crud</a>
        //         </div>
        //         <form className="form-inline" onSubmit={handledSubmit}>
        //             <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={inputValue} onChange={handledInputChange} />
        //             <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onChange={handledInputChange}>Search</button>
        //         </form>
        //     </div>

        // </nav>



    )
}

MyNavbar.propTypes = {
    setSearch: PropTypes.func.isRequired
}
