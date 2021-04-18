import React, { useState } from "react";
import './Contacts.css';
import InfiniteScroll from "react-infinite-scroll-component";

const style = {
    height: 30,
    border: "1px solid green",
    margin: 6,
    padding: 8
};

export default function Contacts() {

    const [items, setItems] = useState(Array.from({ length: 4 }));

    function fetchMoreData() {
        // a fake async api call like which sends
        // 4 more records in 1 secs
        setTimeout(() => {
            setItems(items.concat(Array.from({ length: 4 })))
        }, 1000);
    };

    return (
        <div className="contact-wrapper">
            <div className="nav">
                <header className="section-header">Contacts</header>
            </div>
            <div className="contact-section">
                <InfiniteScroll
                    dataLength={items.length}
                    next={fetchMoreData}
                    hasMore={true}
                    loader={<h6>Loading...</h6>}
                >
                    {items.map((i, index) => (
                        <ul className="contact-list">
                            <li class="contact-list-item card card-small">
                                <div class="card-body">
                                    <div class="card-img"><img src="https://i.imgur.com/2ftqcPs.png" /></div>
                                    <div class="card-content">
                                        <div class="contact-name"><span class="first-name">Test</span><span class="last-name">User {index+1}</span></div>
                                    </div>
                                    <div class="card-action">
                                        <div class="action-wrapper"></div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    ))}
                </InfiniteScroll>

            </div>
        </div>
    )
}