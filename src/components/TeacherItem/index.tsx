import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'


function TeacherItem() {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHl65MrivWtkQ/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=SVys0bju15J6vzWdVETeJEjyP7BHF7Xs-YDh2d6oQMM" alt="Thuanny"/>
                        <div>
                            <strong>Thuanny Silva</strong>
                            <span>Física</span>
                        </div>
                    </header>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, maiores! 
                        <br/>
                        Officia, esse et. Atque nesciunt fuga soluta magnam nostrum nam sapiente magni quam neque minus, ipsa corrupti nemo fugit sint.
                    </p>
                    <footer>
                        <p>
                            Preço/hora 
                            <strong>R$ 80,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    )
}

export default TeacherItem;