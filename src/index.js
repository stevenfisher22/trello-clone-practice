import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Card = ({items}) => (
    <div className="card">
        <Title />
        <Ellipsis />
        {items.map(item => (
            <ListItem key={item.id} title={item.title} />
        ))}
        <AddButton />
    </div>
);


const ListItem = ({title}) => (
    <div className="list-item">
        {title}
    </div>
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
        title: 'Subwoofer'
    },
    {
        id: 2, 
        title: 'Wings'
    },
    {
        id: 3, 
        title: 'Seedless'
    }
];


ReactDOM.render(<Card items={Items}/>, document.getElementById('root'))