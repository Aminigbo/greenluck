import React from 'react'
import a1 from '../Assets/a1.jpeg'
import a2 from '../Assets/a2.jpeg'
import a3 from '../Assets/a3.jpeg'

const Sport = () => {

    const Article = [
        {
            id:1,
            img:a1,
            text:'Football and Mental Health: Tackling the Stigma'
        },
        {
            id:2,
            img:a2,
            text:'The Economics of Football: How Money Drives the Game'
        },
        {
            id:3,
            img:a3,
            text:'Innovate Change Presents: The 2024 New Zealand National League Championship'
        }
    ]
  return (
    <div>
        <div className="article">
            <h2>Sport Article</h2>

            <div className="sports">

            {
            Article.map((item, id)=>{
                        return(
                <div className="sport">
                    <img src={item.img} alt="" />
                    <div className="txt">
                        <h3>{item.text}</h3>
                        <button>Read More</button>
                    </div>
                </div>

            )
            })
            }
            </div>
        </div>

    </div>
  )
}

export default Sport