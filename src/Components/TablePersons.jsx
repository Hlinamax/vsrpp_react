import React from 'react';
import PropTypes from 'prop-types';

function TablePersons({persons, deletePerson}) {
    return(
        <table className="table table-striped">
            <thead>
                <tr>
                    <th className="text-center">ID</th>
                    <th className="text-center">Имя</th>
                    <th className="text-center">Фамилия</th>
                    <th className="text-center">Почта</th>
                    <th className="text-center">Удалить</th>
                </tr>
            </thead>
            <tbody>
                {
                    persons.map((person, index) => {
                        return <tr key={index}>
                            <td className="text-center">{person.id}</td>
                            <td className="text-center">{person.name}</td>
                            <td className="text-center">{person.surname}</td>
                            <td className="text-center">{person.email}</td>
                            <td className="text-center"><button className="btn btn-outline-danger" onClick={() => deletePerson(person.id)}>&#128711;</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    );
}

TablePersons.propTypes = {
    persons: PropTypes.array,
    deletePerson: PropTypes.func,
}

TablePersons.defaultProps = {
    persons: [],
    deletePerson: () => {},
}

export default TablePersons;