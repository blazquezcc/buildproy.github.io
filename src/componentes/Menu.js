import React from "react";
import '../css/menu.css';
import {Link} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from '../login';
import { LogoutButton } from "../logout";
import { Profile } from "../Profile";
import logo from "../Imagenes/logo.png";
function Menu() {
  const { isAuthenticated } = useAuth0();
    
        return( 
            <div class="tabs-to-dropdown">     
  <div class="nav-wrapper d-flex align-items-center justify-content-between">
    <ul class="nav nav-pills d-inline d-md-flex" id="pills-tab" role="tablist">
    <li class="nav-item" role="presentation">
    <img class="" src={logo} alt="Card image cap"width="50px"/>
</li>
      <li class="nav-item" role="presentation">
        <Link class="nav-link active" id="pills-company-tab" data-toggle="pill" to="/" role="tab" aria-controls="pills-company" aria-selected="true">Inicio</Link>
      
      </li>
      <li class="nav-item" role="presentation">
     
          <Link class="nav-link" id="pills-product-tab" data-toggle="pill" to="/entrena" role="tab" aria-controls="pills-product" aria-selected="false">Entrena</Link>
        
      </li>
      <li class="nav-item" role="presentation">
        <Link class="nav-link" id="pills-news-tab" data-toggle="pill" to="/noticias" role="tab" aria-controls="pills-news" aria-selected="false">Noticias</Link>
      </li>
      <li class="nav-item" role="presentation">
        <Link class="nav-link" id="pills-contact-tab" data-toggle="pill" to="/contacto" role="tab" aria-controls="pills-contact" aria-selected="false">Contacto</Link>
      </li>
      
    </ul>

    <ul class="list-group list-group-horizontal d-none d-lg-flex">
    <li class="list-group-item">
    {isAuthenticated ? (
          <>
            <Profile />
           
          </>
        ) : (
          <LoginButton />
        )}
      </li>
      <li class="list-group-item">
    {isAuthenticated ? (
          <>
           
            <LogoutButton />
          </>
        ) : (
         ""
        )}
      </li>
      <li class="list-group-item">
        <a href="https://www.instagram.com/sergiobn98/">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z" fill="currentColor" />
          </svg>
        </a>
      </li>
      <li class="list-group-item">
        <a href="https://twitter.com/SBlazquezN">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 3C9.10457 3 10 3.89543 10 5V8H16C17.1046 8 18 8.89543 18 10C18 11.1046 17.1046 12 16 12H10V14C10 15.6569 11.3431 17 13 17H16C17.1046 17 18 17.8954 18 19C18 20.1046 17.1046 21 16 21H13C9.13401 21 6 17.866 6 14V5C6 3.89543 6.89543 3 8 3Z" fill="currentColor" />
          </svg>
        </a>
      </li>
      <li class="list-group-item">
        <a href="https://www.facebook.com/profile.php?id=100010104518161">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z" fill="currentColor" />
          </svg>
        </a>
      </li>
    </ul>
  </div>
  
  </div>
        );
    
}

export default Menu;

