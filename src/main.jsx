import React from 'react';
import ReactDOM from 'react-dom/client';
import './app.css';
import './index.css';

const appDocument = document.getElementById('root');
const root = ReactDOM.createRoot(appDocument);

const TwitterCard = ({ name, username }) => {
  const imageSrc = `https://unavatar.io/github/${name}`;
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img className='tw-followCard-avatar'
          src={imageSrc}
          alt="Imagen de Github"
        />
        <div className='tw-followCard-info'>
          <strong>{name}</strong>
        </div>
      </header>

      <aside>
        <button className='tw-followCard-button'>seguir</button>
      </aside>

    </article>
  );
};

const karina = { name: 'Karina', username: 'karina' };
const kevin = { name: 'KevinJG', username: 'KevinAndresG' };

root.render(
  <div>
    <TwitterCard {...karina} />
    <TwitterCard {...kevin} />
  </div>
);
