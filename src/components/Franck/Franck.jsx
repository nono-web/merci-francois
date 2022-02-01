import React, {useState} from 'react'
import './Franck.css'
import dataSlider from './dataSlider'
import BtnSlider from './BtnSlider'

const Franck = () => {

    const [slideAnim, setSlideAnim] = useState({
        index: 1,
        inProgress: false
    })
    
    const nextSlide = () => {
       
        if(slideAnim.index !== dataSlider.length && !slideAnim.inProgress){

            setSlideAnim({index: slideAnim.index + 1, inProgress: true})

            setTimeout(() => {
                setSlideAnim({index: slideAnim.index + 1, inProgress: false})
            }, 400)

        }
        else if (slideAnim.index === dataSlider.length && !slideAnim.inProgress){

            setSlideAnim({index: 1, inProgress: true})

            setTimeout(() => {
                setSlideAnim({index:  1, inProgress: false})
            }, 400)
        }

    }

    const prevSlide = () => {

        if(slideAnim.index !== 1 && !slideAnim.inProgress){

            setSlideAnim({index: slideAnim.index - 1, inProgress: true})

            setTimeout(() => {
                setSlideAnim({index:  slideAnim.index - 1, inProgress: false})
            }, 400)
        }
        else if (slideAnim.index === 1 && !slideAnim.inProgress){

            setSlideAnim({index: 8, inProgress: true})

            setTimeout(() => {
                setSlideAnim({index:  8, inProgress: false})
            }, 400)
        }
    }

    const moveDot = index => {
        setSlideAnim({index:  index, inProgress: false})
    }

    return (
      <section className="franck">
        <p>Voici quelques images pour se souvenir de ces cinq mois à la Wild.</p>
        <p><strong>Merci François pour ton engagement, ta bonne humeur et ta patience</strong></p>
        <p className="slogan">François 2022 !</p>
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideAnim.index === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} alt="" />
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"}/>
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>


            <div className="container-dots">
                {Array.from({length: 8}).map((item, index) => {
                    return <div 
                    className={slideAnim.index === index + 1 ? "dot active" : "dot"}
                    onClick={() => moveDot(index + 1)}
                    ></div>
                })}
            </div>
        </div>
        <p className="sign">Franck</p>
      </section>
    )
}
export default Franck
