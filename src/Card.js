import React from 'react';
import './Card.css';
import { MdFavoriteBorder } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { MdEditNote } from "react-icons/md";

function Card(props)
{
return( 
    <>
        <div className='cards'>
            <div className='card'>
                <img src={props.imgsrc} className="banner"/>

                <div className='text'>
                    <h3 className='name'>{props.name}</h3>
                    <p className='email'>{props.email}</p>
                    <p className='number'>{props.number}</p>
                    <p className='web'>{props.web}</p>
                </div>
                <div className="like">
                    <button> <MdFavoriteBorder /> </button>
                    <button><MdEditNote /></button>
                    <button><MdDeleteOutline /></button>
                </div>
            </div>
        </div>
    </>
)
}

export default Card;