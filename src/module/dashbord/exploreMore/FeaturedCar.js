import React, { useState } from 'react'
import feturedDeta from '../../db/FeaturedJSON';
import './product.css'

function FeaturedCar() {

    const [item, setItem] = useState(feturedDeta);

    const serchTerm = (categItem) => {
        const updateItem = feturedDeta.filter((curElement) => {
            return curElement.category === categItem;
        });
        console.log('updateItem')
        setItem(updateItem);
    }
    return (
        <>
            <div className="Product_Container_You">
                <h1>New Cars</h1>
                <div className="Product_Container_You_Content">
                    <aside className="Product_Category_You_aside">
                       
                        <div className="disply_Category_list">
                            <label for="blutooth" id="">
                                <button onClick={() => setItem(feturedDeta)}>All</button>
                            </label>
                            <label for="blutooth" id="">
                                <button onClick={() => serchTerm('sedan')}>Sedan Cars</button>
                            </label>

                            <label for="kurtas" id="kurtas">
                                <button onClick={() => serchTerm('suv')}>SUV</button>

                            </label>
                            <label for="accessories">
                                <button onClick={() => serchTerm('sport-cars')}>Sports cars</button>

                            </label>
                           
                            <label for="watch">
                                <button onClick={() => serchTerm('family-car')}>family cars</button>

                            </label>
                        </div>

                    </aside>

                   
                    <section className="product_category_display">
                        {
                            item.map((allElement) => {
                                {/* const { id, image, categore, title, price } = allElement; */}

                                return (
                                    <main className="product_category_display" key={allElement.id}>
                                        <div className="productCard">
                                            <div className="product_image">
                                                <img src={allElement.img}/>
                                            </div>
                                            <h3 className="product_name">{allElement.modal}</h3>
                                            <p className="product_price">
                                                <span>₹</span>
                                                <span>{allElement.price}</span>
                                            </p>

                                        </div>
                                    </main>
                                )
                            })

                        }





                    </section>


                </div>
            </div>







        </>
    )
}

export default FeaturedCar
