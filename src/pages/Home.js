import React {useState,useEffect} from 'react'
import "../styles/home.css"
import Helmet from '../components/Helmet/Helmet'
import { Container,Row,Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import {motion} from "framer-motion"

import products from "../components/Helmet/products"
import heroImg from "../assets/images/hero-img.png"

import Services from '../services/Services'
import ProductsList from '../components/UI/ProductsList'
import { useEffect, useState } from "react"

function Home () {

  const year = new Date().getFullYear()

  
  // const [data, setDate] = useState(products)
  // useEffect(()=>{
     
  // })

  return (
    <div>
      <Helmet title={"Home"}>
        <section className='hero_section'>
          <Container>
            <Row>
              <Col lg="6" md="6">
                <div className='hero_content'>
                  <p className='hero_subtitle'>Trending products in {year}</p>
                  <h2>Make Your Interior More Minimalistic & Modern</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                    nobis explicabo? Odio omnis voluptate corporis perferendis? Maxime
                  </p>
                  <motion.button whileTap={{scale:1.2}} className='buy_btn'>
                    <Link to="/shop">SHOP NOW</Link>
                  </motion.button>
                </div>
              </Col>
              <Col lg="6" md="6">
                <div className='hero_img'>
                  <img src={heroImg} alt=""/>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <Services/>
        <section className='trending_products'>
          <Container>
            <Row>
              <Col lg="12" className='text-center'>
                <h2 className='section_title'>Trending Products</h2>
              </Col>
              <ProductsList/>
            </Row>
          </Container>
        </section>
      </Helmet>
    </div>
  )
}

export default Home
