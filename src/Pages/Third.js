import React, { useState, useEffect } from 'react'

const Third = () => {


    const [count, setCount] = useState(0);
    const [button, setButton] = useState(0)

    useEffect(() => {
            setCount((count) => count + 1);
    }, [button]);



    // const [people, setPeople] = useState(data)


    // const handleDelete = (obj) => {
    //     console.log(obj)
    //     setPeople(people.filter((person) => person.id !== obj.id))
    // }

    return (
        <>
            <div className="card-container">
                {data.map((datas) => {
                    
                    return (
                        <div key={datas.id} className="card-item">
                            <div className="card-img">
                                <img src={datas.img} alt="" />
                            </div>
                            <div className="card-text">
                                <h4>{datas.title}</h4>
                                <p>{datas.price}</p>
                            </div>
                        </div>
                    )
                })}
                <div onClick={()=> setButton(button + 1)}>{count}</div>
                {people.map((datas) => {
                    const { img, id, title, price } = datas
                    return (
                        <div key={id} className="card-item">
                            <div className="card-img">
                                <img src={img} alt="" />
                            </div>
                            <div className="card-text">
                                <h4>{title}</h4>
                                <p>{price}</p>
                                <button onClick={() => handleDelete(datas)}>Delete</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Third