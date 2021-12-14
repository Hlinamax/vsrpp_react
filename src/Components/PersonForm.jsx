import React from 'react';

function PersonForm({setName, setSurname, setEmail, addPerson}) {
    return(
        <div flexdirection="col-4 row mt-auto">

                {/* <p input className="h4 col-4 row d-flex">Имя:</p> */}
                {/* <p input className="h4 col-4 row d-flex">Фамилия:</p> */}
                {/* <p input className="h4 col-4 row d-flex">Email:</p>  */}
                <div className="box">
                    <div style={{marginRight:"10px"}}>
                <p style={{textAlign:"left"}}input className="h4">Имя:</p>
                    <input 
                        type="text"
                        className="form-control-lg"
                        onChange={setName}
                    />
                    </div>
                    <div style={{marginRight:"10px"}}>
                    <p style={{textAlign:"left"}}input className="h4">Фамилия:</p>
                    <input 
                        type="text"
                        className="form-control-lg"
                        onChange={setSurname}
                    />
                    </div>
                    <div style={{marginRight:"10px"}}>
                    <p style={{textAlign:"left"}}input className="h4">Email:</p> 
                    <input 
                        type="text" 
                        className="form-control-lg"
                        onChange={setEmail}
                    />
                    </div>
                    <div style={{display:"flex",alignItems:"flex-end"}}><button className="btn-lg btn-primary" onClick={() => addPerson()}>Добавить</button></div>
                 </div>
                
            <div className="col-4 row mt-4">    
        </div>
        </div>
    );
}

export default PersonForm;