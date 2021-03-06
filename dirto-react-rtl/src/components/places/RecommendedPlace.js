import React  from 'react';
import { IoIosLink } from "react-icons/io";
import { FiHeart, FiPhone } from "react-icons/fi";
import { FaRegCalendarCheck } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";

function RecommendedPlace({recommendplaces}) {
    return (
        <>
            <div className="row mt-5">
                {recommendplaces.map((item, index) => {
                    return (
                        <div className="col-lg-4 column-td-6" key={index}>
                            <div className="card-item">
                                <a href={item.titleUrl} className="card-image-wrap">
                                    <div className="card-image">
                                        <img src={item.image} className="card__img" alt="Place" />
                                        <span className={item.titleIcon ? 'badge' : 'badge badge-closed'}>{item.bedge}</span>
                                        <span className="badge-toggle" data-toggle="tooltip" data-placement="bottom" title="22 Likes">
                                            <FiHeart />
                                        </span>
                                    </div>
                                </a>
                                <div className="card-content-wrap">
                                    <div className="card-content text-left">
                                        <a href={item.titleUrl}>
                                            <h5 className="card-meta">
                                                <span>{item.cardTypeIcon}</span> {item.cardType}
                                            </h5>
                                            <h4 className="card-title">{item.title}
                                                <i>{item.titleIcon}</i>
                                            </h4>
                                            <p className="card-sub">
                                                {item.stitle}
                                            </p>
                                        </a>
                                        <a href={item.authorUrl} className="author-img">
                                            <img src={item.author} alt="author-img" />
                                        </a>
                                        <ul className="info-list padding-top-20px">
                                            <li><span className="la d-inline-block"><FiPhone /></span> {item.number}</li>
                                            <li><span className="la d-inline-block"><IoIosLink /></span>  <a href={item.websiteUrl}>
                                                {item.website}
                                            </a>
                                            </li>
                                            <li>
                                                <span className="la d-inline-block"><FaRegCalendarCheck /></span> {item.date}
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="rating-row">
                                        <div className="rating-rating">
                                            {item.ratings.map((rating, index) => {
                                                return (
                                                    <span key={index}>{rating}</span>
                                                )
                                            })}
                                            <span className="rating-count">{item.ratingNum}</span>
                                        </div>
                                        <div className="listing-info">
                                            <ul>
                                                <li><span className="info__count"><AiOutlineEye /></span> {item.view}</li>
                                                <li>
                                                    <span className="info__save" data-toggle="tooltip" data-placement="top" title="Bookmark">
                                                        <FiHeart />
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default RecommendedPlace;
