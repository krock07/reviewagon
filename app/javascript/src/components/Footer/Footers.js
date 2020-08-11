import React from "react";
// import styled from "styled-components";
import 'react-bulma-components/dist/react-bulma-components.min.css';
import './realBlack.css'
// const Footer = styled.div`
//   display: flex;
//   flex-flow: row wrap;
//   padding: 30px 30px 20px 30px;
//   color: #2f2f2f;
//   background-color: #fff;
//   border-top: 1px solid #e5e5e5;
// `;

// const Legal = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   color: #999;

//   div > {
//     flex: 1 100%;
//   }

//   @media screen and (min-width: 24.375em) {
//     margin-left: auto;
//   }
// `;

// const LegalLink = styled.div`
//   display: flex;
//   align-items: center;

//   @media screen and (min-width: 24.375em) {
//     margin-left: auto;
//   }
// `;

const Footers = () => {
  return (
    <footer class="footer has-background-black realBlack">
      <div class="content has-text-centered">
        <p className= "has-text-light">
          <strong>Reviewagon</strong> by{" "}
          <a href="https://jgthms.com">Khoury Smith</a>. SEIR Mae - We ride together we code together
        </p>
      </div>
    </footer>
  );
};

export default Footers;
