import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import Review from "./Review";
import ReviewForm from "./ReviewForm";

const Wrapper = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
const Column = styled.div`
  background: white;
  height: 100vh;
  overflow: scroll;

  &:last-child {
    background: #000;
  }
`;
const Main = styled.div`
  padding-left: 50px;
`;

const Airline = (props) => {
  const [airline, setAirline] = useState({});
  const [review, setReview] = useState({});
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    //AVI1
    //airlines/united
    const slug = props.match.params.slug;
    const url = `/api/v1/airlines/${slug}`;
    axios
      .get(url)
      .then((res) => {
        setAirline(res.data);

        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleChange = (e) => {
    e.preventDefault();
    setReview(Object.assign({}, review, { [e.target.name]: e.target.value }));
    console.log("rewiew", review);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const csrfToken = document.querySelector("[name=csrf-token]").content;
    axios.defaults.headers.common["X-CSFR-TOKEN"] = csrfToken;
    const airline_id = airline.data.id;
    axios
      .post("/api/v1/reviews", { review, airline_id })
      .then((res) => {
        const included = [...airline.included, res.data.data];
        setAirline({ ...airline, included });
        setReview({ title: "", description: "", score: 0 });
      })
      .catch((err) => console.log(err));
  };

  const setRating = (score, e) => {
    e.preventDefault();
    setReview({ ...review, score });
  };
  let reviews;
  if (loaded && airline.included) {
    reviews = airline.included.map((item, index) => {
      return <Review key={index} attributes={item.attributes} />;
    });
  }
  return (
    <Wrapper>
      {loaded && (
        <Fragment>
          <Column>
            <Main>
              <Header
                attributes={airline.data.attributes}
                reviews={airline.included}
              />
              {reviews}
            </Main>
          </Column>
          <Column>
            <ReviewForm
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              attributes={airline.data.attributes}
              setRating={setRating}
              review={review}
            />
          </Column>
        </Fragment>
      )}
    </Wrapper>
  );
};

export default Airline;
