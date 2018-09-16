import React from 'react';

import hotel1 from '../../assets/images/hotel-1.jpg';
import hotel2 from '../../assets/images/hotel-2.jpg';
import hotel3 from '../../assets/images/hotel-3.jpg';

import friend1 from '../../assets/images/user-3.jpg';
import friend2 from '../../assets/images/user-4.jpg';
import friend3 from '../../assets/images/user-5.jpg';
import friend4 from '../../assets/images/user-6.jpg';

import user1 from '../../assets/images/user-1.jpg';
import user2 from '../../assets/images/user-2.jpg';

const HotelView = (props) => {
    return(
        <main className="hotel-view">
            <div className="gallery">
                <figure className="gallery__item">
                    <img src={hotel1} alt="Photo of hotel 1" className="gallery__photo"/>
                </figure>
                <figure className="gallery__item">
                    <img src={hotel2} alt="Photo of hotel 2" className="gallery__photo"/>
                </figure>
                <figure className="gallery__item">
                    <img src={hotel3} alt="Photo of hotel 3" className="gallery__photo"/>
                </figure>
            </div>

            <div className="overview">
                <h1 className="overview__heading">
                    Hotel Las Palmas
                </h1>


                <div className="overview__star">
                    <svg version="1.1" className="overview__icon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <title>star</title>
                        <path d="M10 1.3l2.388 6.722h6.412l-5.232 3.948 1.871 6.928-5.439-4.154-5.438 4.154 1.87-6.928-5.233-3.948h6.412l2.389-6.722z"></path>
                    </svg>
                    <svg version="1.1" className="overview__icon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <title>star</title>
                        <path d="M10 1.3l2.388 6.722h6.412l-5.232 3.948 1.871 6.928-5.439-4.154-5.438 4.154 1.87-6.928-5.233-3.948h6.412l2.389-6.722z"></path>
                    </svg>
                    <svg version="1.1" className="overview__icon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <title>star</title>
                        <path d="M10 1.3l2.388 6.722h6.412l-5.232 3.948 1.871 6.928-5.439-4.154-5.438 4.154 1.87-6.928-5.233-3.948h6.412l2.389-6.722z"></path>
                    </svg>
                    <svg version="1.1" className="overview__icon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <title>star</title>
                        <path d="M10 1.3l2.388 6.722h6.412l-5.232 3.948 1.871 6.928-5.439-4.154-5.438 4.154 1.87-6.928-5.233-3.948h6.412l2.389-6.722z"></path>
                    </svg>
                </div>

                <div className="overview__location">
                    <svg version="1.1" className="overview__icon-location" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <title>location-pin</title>
                        <path d="M10 2.009c-2.762 0-5 2.229-5 4.99 0 4.774 5 11 5 11s5-6.227 5-11c0-2.76-2.238-4.99-5-4.99zM10 9.76c-1.492 0-2.7-1.209-2.7-2.7s1.208-2.7 2.7-2.7c1.49 0 2.699 1.209 2.699 2.7s-1.209 2.7-2.699 2.7z"></path>
                    </svg>
                    <button className="btn-inline">Gaza, Palestine</button>
                </div>

                <div className="overview__rating">
                    <div className="overview__average">8.6</div>
                    <div className="overview__count">465 votes</div>
                </div>
            </div>

            <div className="details">

                <div className="description">
                    <p className="paragraph">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>

                    <ul className="list">
                        <li className="list__item">
                            <svg version="1.1" className="list__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <title>chevron-thin-right</title>
                                <path d="M13.25 10l-7.141-7.42c-0.268-0.27-0.268-0.707 0-0.979 0.268-0.27 0.701-0.27 0.969 0l7.83 7.908c0.268 0.271 0.268 0.709 0 0.979l-7.83 7.908c-0.268 0.271-0.701 0.27-0.969 0s-0.268-0.707 0-0.979l7.141-7.417z"></path>
                            </svg>
                            Close to the beach
                        </li>
                        <li className="list__item">
                            <svg version="1.1" className="list__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <title>chevron-thin-right</title>
                                <path d="M13.25 10l-7.141-7.42c-0.268-0.27-0.268-0.707 0-0.979 0.268-0.27 0.701-0.27 0.969 0l7.83 7.908c0.268 0.271 0.268 0.709 0 0.979l-7.83 7.908c-0.268 0.271-0.701 0.27-0.969 0s-0.268-0.707 0-0.979l7.141-7.417z"></path>
                            </svg>
                            Breakfast included
                        </li>
                        <li className="list__item">
                            <svg version="1.1" className="list__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <title>chevron-thin-right</title>
                                <path d="M13.25 10l-7.141-7.42c-0.268-0.27-0.268-0.707 0-0.979 0.268-0.27 0.701-0.27 0.969 0l7.83 7.908c0.268 0.271 0.268 0.709 0 0.979l-7.83 7.908c-0.268 0.271-0.701 0.27-0.969 0s-0.268-0.707 0-0.979l7.141-7.417z"></path>
                            </svg>
                            Free airport shuttle
                        </li>
                        <li className="list__item">
                            <svg version="1.1" className="list__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <title>chevron-thin-right</title>
                                <path d="M13.25 10l-7.141-7.42c-0.268-0.27-0.268-0.707 0-0.979 0.268-0.27 0.701-0.27 0.969 0l7.83 7.908c0.268 0.271 0.268 0.709 0 0.979l-7.83 7.908c-0.268 0.271-0.701 0.27-0.969 0s-0.268-0.707 0-0.979l7.141-7.417z"></path>
                            </svg>
                            Free wifi in all rooms
                        </li>
                        <li className="list__item">
                            <svg version="1.1" className="list__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <title>chevron-thin-right</title>
                                <path d="M13.25 10l-7.141-7.42c-0.268-0.27-0.268-0.707 0-0.979 0.268-0.27 0.701-0.27 0.969 0l7.83 7.908c0.268 0.271 0.268 0.709 0 0.979l-7.83 7.908c-0.268 0.271-0.701 0.27-0.969 0s-0.268-0.707 0-0.979l7.141-7.417z"></path>
                            </svg>
                            Air conditioning and heating
                        </li>
                        <li className="list__item">
                            <svg version="1.1" className="list__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <title>chevron-thin-right</title>
                                <path d="M13.25 10l-7.141-7.42c-0.268-0.27-0.268-0.707 0-0.979 0.268-0.27 0.701-0.27 0.969 0l7.83 7.908c0.268 0.271 0.268 0.709 0 0.979l-7.83 7.908c-0.268 0.271-0.701 0.27-0.969 0s-0.268-0.707 0-0.979l7.141-7.417z"></path>
                            </svg>
                            Pets allowed
                        </li>
                        <li className="list__item">
                            <svg version="1.1" className="list__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <title>chevron-thin-right</title>
                                <path d="M13.25 10l-7.141-7.42c-0.268-0.27-0.268-0.707 0-0.979 0.268-0.27 0.701-0.27 0.969 0l7.83 7.908c0.268 0.271 0.268 0.709 0 0.979l-7.83 7.908c-0.268 0.271-0.701 0.27-0.969 0s-0.268-0.707 0-0.979l7.141-7.417z"></path>
                            </svg>
                            We speak all languages
                        </li>
                        <li className="list__item">
                            <svg version="1.1" className="list__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <title>chevron-thin-right</title>
                                <path d="M13.25 10l-7.141-7.42c-0.268-0.27-0.268-0.707 0-0.979 0.268-0.27 0.701-0.27 0.969 0l7.83 7.908c0.268 0.271 0.268 0.709 0 0.979l-7.83 7.908c-0.268 0.271-0.701 0.27-0.969 0s-0.268-0.707 0-0.979l7.141-7.417z"></path>
                            </svg>
                            Perfect for families
                        </li>
                    </ul>

                    <div className="recommend">
                        <p className="recommend__count">
                            Lucky and 3 other friends recommends this hotel.
                        </p>
                        <div className="recommend__friends">
                            <img src={friend1} alt="Friend 1" className="recommend__photo"/>
                            <img src={friend2} alt="Friend 2" className="recommend__photo"/>
                            <img src={friend3} alt="Friend 3" className="recommend__photo"/>
                            <img src={friend4} alt="Friend 4" className="recommend__photo"/>
                        </div>
                    </div>

                </div>

                <div className="user-reviews">
                    <figure className="review">
                        <blockquote className="review__text">
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </blockquote>
                        <figcaption className="review__user">
                            <img src={user1} alt="User 1" className="review__photo"/>
                            <div className="review__user-box">
                                <p className="review__name">Nike Smith</p>
                                <p className="review__date">Jan 1st, 2018</p>
                            </div>
                            <div className="review__rating">7.8</div>
                        </figcaption>
                    </figure>
                    <figure className="review">
                        <blockquote className="review__text">
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </blockquote>
                        <figcaption className="review__user">
                            <img src={user2} alt="User 2" className="review__photo"/>
                            <div className="review__user-box">
                                <p className="review__name">Mary Thomas</p>
                                <p className="review__date">Sep 14th, 2019</p>
                            </div>
                            <div className="review__rating">9.4</div>
                        </figcaption>
                    </figure>

                    <button className="btn-inline">Show all <span>&rarr;</span></button>
                </div>
            </div>

            <div className="cta">
                <h2 className="cta__book-now">
                    Good news! We have 4 rooms for your selected dates.
                </h2>
                <button className="btn">
                    <span className="btn__visible">Book now</span>
                    <span className="btn__invisible">only 4 rooms left</span>
                </button>
            </div>
        </main>
    );
};

export default HotelView;