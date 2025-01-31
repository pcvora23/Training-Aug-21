import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail></FaCocktail>,
        title: "Free Cocktails",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, pariatur.",
      },
      {
        icon: <FaHiking></FaHiking>,
        title: "Endless Hiking",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, pariatur.",
      },
      {
        icon: <FaShuttleVan></FaShuttleVan>,
        title: "Free Shuttle",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, pariatur.",
      },
      {
        icon: <FaBeer></FaBeer>,
        title: "Strongest Beer",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, pariatur.",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services"></Title>
        <div className="services-center">
            {this.state.services.map((item,index)=>{
                return <article key={index} className="service">
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                </article>
            })}
            </div>
      </section>
    )
  }
}
