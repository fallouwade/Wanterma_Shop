import React, { useState, useEffect } from 'react';
import Nav from './component/Nav';
import Card_Accueil from './component/Card_Accueil';
import axios from 'axios';
import Card_livraison from './component/Card_livraison';
import { FaRegMoneyBillAlt, FaTruck, FaRegCheckCircle } from 'react-icons/fa';
import Promotion from './component/Promotion';
import Collection from './Collection';
import CardTendances from './component/CardTendances';
import Footer from './component/Footer';

export default function App() {
  const [Data1, setData] = useState([]);
  const [Randomnumbe, setRandomNumber] = useState(0);
  const [promotion, setpromotion] = useState([]);
  const [collection, setcollection] = useState([]);


  useEffect(() => {
    console.log('effect');
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        console.log('promise fulfilled');
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      const random = Math.floor(Math.random() * 20);
      setRandomNumber(random);
    }, 5000);

    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (Data1.length > 0) {
      setpromotion([
        { categorie: Data1[19].category, offr: `Limited Offer Up to ${Data1[19].price}%`, image: Data1[19].image },
        { categorie: Data1[1].category, offr: `Limited Offer Up to ${Data1[1].price}%`, image: Data1[1].image },
      ]);

      setcollection([
        { categorie: Data1[6].category, prix: `${Data1[6].price} francs`, image: Data1[6].image },
        { categorie: Data1[3].category, prix: ` ${Data1[3].price}francs`, image: Data1[3].image },
        { categorie: Data1[16].category, prix: ` ${Data1[16].price}francs`, image: Data1[16].image },
        { categorie: Data1[13].category, prix: ` ${Data1[13].price}francs`, image: Data1[13].image },
        { categorie: Data1[8].category, prix: ` ${Data1[8].price}francs`, image: Data1[8].image },



      ]);


    }
  }, [Data1]);

  const icons = [
    { label: 'Meilleurs prix', icon: FaRegMoneyBillAlt, dolor: 'Dolor sit amet, consectetur adipisicing elit.' },
    { label: 'Livraison rapide', icon: FaTruck, dolor: 'Dolor sit amet, consectetur adipisicing elit.' },
    { label: 'Retour sans frais', icon: FaRegCheckCircle, dolor: 'Dolor sit amet, consectetur adipisicing elit.' },
  ];

  return (
    <div>
      <Nav />
      <div className='container-fluid sm:px-20 px-0 py-5 mx-auto bg-[#e6eefb] '>
        <div className='w-full'>

          {Data1.length > Randomnumbe + 1 ? (
            <Card_Accueil
              title={Data1[Randomnumbe + 1].title}
              image={Data1[Randomnumbe + 1].image}
              description={Data1[Randomnumbe + 1].description}
            />
          ) : (
            <p>Loading...</p>
          )}

        </div>
        <div className='flex sm:flex-row flex-col justify-center items-center gap-5'>

          {icons.map((item, index) => (
            <Card_livraison key={index} label={item.label} icon={item.icon} para={item.dolor} />
          ))}

        </div>
        <div className='w-full'>

          {promotion.length > 0 && (
            <div className='flex sm:flex-row flex-col justify-center items-center gap-5 w-full '>
              {promotion.map((item, index) => (
                <Promotion key={index} categorie={item.categorie} offre={item.offr} image={item.image} />
              ))}
            </div>
          )}

        </div>

        <div className='w-full my-8 '>

          {collection.length > 0 && (
            <div className='grid sm:grid-cols-4 grid-cols-1   justify-center items-center gap-5 w-full '>
              {collection.map((item, index) => (
                <Collection key={index} categorie={item.categorie} offre={item.prix} image={item.image} />
              ))}
            </div>
          )}

        </div>
        <div className='w-full'>

          {Data1.length > Randomnumbe + 1 ? (
            <CardTendances
              title={Data1[8].title}
              image={Data1[18].image}
              description={Data1[8].description}
             
            />
          ) : (
            <p>Loading...</p>
          )}

        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
