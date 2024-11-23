import React, { useState } from 'react';
import axios from 'axios';

export default function EditService() {
    const [dataNewService, setDataNewService] = useState({
        name: '',
        description: '',
        price: '',
    });

    const [deleteData, setDeleteData] = useState('');

    const [updateService, setUpdateService] = useState({
        id: '',
        name: '',
        description: '',
        price: ''
    });

    const handleChangeUpdateService = (e) => {
        const value = e.target.value;
        setUpdateService({
            ...updateService,
            [e.target.name]: value
        });
    };

    const handleChangeNewService = (e) => {
        const value = e.target.value;
        setDataNewService({
            ...dataNewService,
            [e.target.name]: value
        });
    };

    const serviceInput = {
        name: dataNewService.name,
        description: dataNewService.description,
        price: dataNewService.price
    };

    const handleSubmitNewService = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/api/services', serviceInput)
            .then((response) => {
                console.log('Added new service successfully', response.status);
                alert("Added new service");
                setDataNewService({ name: '', description: '', price: '' });
            })
            .catch((error) => {
                console.error('Error submitting', error.response ? error.response.data : error.message);
            });
    };

    const handleUpdateService = (e) => {
        e.preventDefault();
        const { id, name, description, price } = updateService;

        axios.put(`http://localhost:3001/api/services/${id}`, {
            name,
            description,
            price
        })
            .then((response) => {
                console.log('Updated the service', response.status);
                alert('Service updated successfully');
                setUpdateService({ id: '', name: '', description: '', price: '' });
            })
            .catch((error) => {
                console.error('Error updating the service', error.response ? error.response.data : error.message);
            });
    };

    const handleChangeDelete = (e) => {
        setDeleteData(e.target.value);
    };

    const handleDelete = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:3001/api/services/${deleteData}`)
            .then((response) => {
                console.log('Deleted successfully', response.status);
                setDeleteData('');
                alert(`Deleted Successfully ID: ${deleteData}`);
            })
            .catch((error) => {
                console.error('Error deleting', error.response ? error.response.data : error.message);
            });
    };

    return (
        <div className="edit-service-container">
            <h1 className="edit-service-header">Edit Service</h1>

            <h2 className='addNew'>Add New Service</h2>
            <form className="edit-service-form" onSubmit={handleSubmitNewService}>
                <input
                    type="text"
                    name="name"
                    value={dataNewService.name}
                    onChange={handleChangeNewService}
                    placeholder="Enter the name"
                />
                <textarea
                    name="description"
                    value={dataNewService.description}
                    onChange={handleChangeNewService}
                    placeholder="Description"
                />
                <input
                    type="number"
                    name="price"
                    value={dataNewService.price}
                    onChange={handleChangeNewService}
                    placeholder="Price"
                />
                <button className="submit-button">Add Service</button>
            </form>

            {/* Remove Service */}
            <h2 className='addNew'>Remove Service</h2>
            <form className="edit-service-form" onSubmit={handleDelete}>
                <input
                    name="id"
                    value={deleteData}
                    onChange={handleChangeDelete}
                    type="text"
                    placeholder="Enter the service ID"
                />
                <button className="submit-button">Remove Service</button>
            </form>

            {/* Update Service */}
            <h2 className='addNew'>Edit Service</h2>
            <form className="edit-service-form" onSubmit={handleUpdateService}>
                <input
                    type="text"
                    name="id"
                    value={updateService.id}
                    onChange={handleChangeUpdateService}
                    placeholder="Enter the ID"
                />
                <input
                    type="text"
                    name="name"
                    value={updateService.name}
                    onChange={handleChangeUpdateService}
                    placeholder="Enter the new name"
                />
                <textarea
                    name="description"
                    value={updateService.description}
                    onChange={handleChangeUpdateService}
                    placeholder="New description"
                />
                <input
                    type="number"
                    name="price"
                    value={updateService.price}
                    onChange={handleChangeUpdateService}
                    placeholder="New Price"
                />
                <button className="submit-button">Confirm</button>
            </form>
        </div>
    );
}
