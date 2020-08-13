import React from "react";
import "./Posts.css";
const axios = require('axios')

const Posts = () => {

  return (
    <div className="posts-page">
      <div className="grid">
        <header>
          <div className="post-user">
            <div className="post-user-avatar">
              <img src="https://i.pravatar.cc/150?img=13" alt="" />
            </div>
            <div className="post-user-name">
              <span>Chris</span>
            </div>
            <div className="post-image-background">
                <img src="https://cdn.pixabay.com/photo/2017/11/15/20/32/sea-turtle-2952470__480.png" alt="" />
            </div>
            <div className="Post-caption">New art done today!!</div>
          </div>
        </header>
      </div>
      {/* this is for grid 2 */}
        <header>
          <div className="grid-2">
            <div className="post-user-avatar-grid-2">
              <img src="https://i.pravatar.cc/150?img=31" alt="" />
            </div>
            <div className="post-user-name-grid-2">
              <span>Amy</span>
            </div>
            <div className="post-image-background-grid-2">
                <img src="https://cdn.pixabay.com/photo/2016/03/27/22/21/table-1284507__480.jpg" alt="" />
            </div>
            <div className="Post-caption-grid-2">Working on a new mix</div>
          </div>
        </header>

     
      











      {/* this is for the 3rd grid */}
      <div className="grid-3">
        <header>
          <div className="post-user-grid-3">
            <div className="post-user-avatar">
              <img src="https://i.pravatar.cc/150?img=12" alt="" />
            </div>
            <div className="post-user-name-grid-3">
              <span>Amy</span>
            </div>
            <div className="post-image-background-grid-3">
                <img src="https://cdn.pixabay.com/photo/2016/11/29/07/36/audience-1868137__480.jpg" alt="" />
            </div>
            <div className="post-caption-grid-3">Into the wild was good!, best party of the year!</div>
          </div>
        </header>


        <div className="grid-4">
        <header>
          <div className="post-user-grid-4">
            <div className="post-user-avatar">
              <img src="https://i.pravatar.cc/150?img=12" alt="" />
            </div>
            <div className="post-user-name-grid-4">
              <span>Jessie</span>
            </div>
            <div className="post-image-background-grid-4">
                <img src="https://cdn.pixabay.com/photo/2016/08/24/20/39/violin-1617972__480.jpg" alt="" />
            </div>
            <div className="post-caption-grid-4">10 year old music prodigy, sets a new world record!</div>
          </div>
        </header>
      </div>
      </div>

    </div>
  );
};

export default Posts;
