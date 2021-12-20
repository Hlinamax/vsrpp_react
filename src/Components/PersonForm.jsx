import React from 'react';

function PersonForm({ handleAddingNewUser, addPerson, newUser }) {
    return(
        <div flexdirection="col-4 row mt-auto">

                {/* <p input className="h4 col-4 row d-flex">Имя:</p> */}
                {/* <p input className="h4 col-4 row d-flex">Фамилия:</p> */}
                {/* <p input className="h4 col-4 row d-flex">Email:</p>  */}
                <div className="box">
                    <div style={{marginRight:"10px"}}>
                <p style={{textAlign:"left"}}input className="h4">Имя:</p>
                    <input 
                        value={newUser.name}
                        name="name"
                        type="text"
                        className="form-control-lg"
                        onChange={handleAddingNewUser}
                    />
                    </div>
                    <div style={{marginRight:"10px"}}>
                    <p style={{textAlign:"left"}}input className="h4">Фамилия:</p>
                    <input 
                        value={newUser.surname}
                        name="surname"
                        type="text"
                        className="form-control-lg"
                        onChange={handleAddingNewUser}
                    />
                    </div>
                    <div style={{marginRight:"10px"}}>
                    <p style={{textAlign:"left"}}input className="h4">Email:</p> 
                    <input 
                        value={newUser.email}
                        name="email"
                        type="text" 
                        className="form-control-lg"
                        onChange={handleAddingNewUser}
                    />
                    </div>
                    <div style={{display:"flex",alignItems:"flex-end"}}><button className="btn-lg btn-primary" onClick={addPerson}>Добавить</button></div>
                 </div>
                
            <div className="col-4 row mt-4">    
        </div>
        </div>
    );
}

export default PersonForm;