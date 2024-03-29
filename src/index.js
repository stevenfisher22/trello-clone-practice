import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Card = ({items}) => (
    <div className="card">
        <Title />
        <Ellipsis />
        <table className="table">
            {items.map(item => (
                <ListItem key={item.id} title={item.title} />
            ))}
        </table>
        <AddButton />
    </div>
);


const ListItem = ({title}) => (
    <tr className="list-item">
        <td>{title}</td> 
    </tr>
)


const Title = () => (
    <div className="title">
        Phone Features
    </div>
);


const Ellipsis = () => (
    <div className="ellipsis">
        ...
    </div>
);


const AddButton = () => (
    <div className="add-button">
        Add a card...
    </div>
);


// Fake Data
const Items = [
    {
        id: 1, 
        title: 'Savannah'
    },
    {
        id: 2, 
        title: 'Is'
    },
    {
        id: 3, 
        title: 'The'
    },
    {
        id: 4, 
        title: 'Best'
    },
    {
        id: 5, 
        title: 'Bear'
    }
];


ReactDOM.render(<Card items={Items}/>, document.getElementById('root'))