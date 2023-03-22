import React from "react";
import "./News.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import whitePapers from "../../assets/whitePapers.jpg";
import events from "../../assets/events.jpg";
import news from "../../assets/news.jpg";

const News = () => {
  return (
    <body>
      <div className="card-news">
        <div className="container">
          <h3> Lets Discover Our Last News </h3>
          <CardGroup>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={news} />
              <Card.Body>
                <Card.Title>Health News Intelligence Reports</Card.Title>
                <Card.Text>
                  Health news delivered daily by your email
                </Card.Text>
                <button> Read More </button> 
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={events} />
              <Card.Body>
                <Card.Title>Health Links Events</Card.Title>
                <Card.Text>
                  View past and upcoming events
                </Card.Text>
                <button> Read More </button> 
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={whitePapers} />
              <Card.Body>
                <Card.Title>White Papers</Card.Title>
                <Card.Text>
                  View the most recent published papers
                </Card.Text>
                <button> Read More </button> 
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
      </div>
    </body>
  );
};

export default News;
