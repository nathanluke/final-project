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

      <div className="grid-2">
        <header>
          <div className="post-user-grid-2">
            <div className="post-user-avatar-grid-2">
              <img src="https://i.pravatar.cc/150?img=41" alt="" />
            </div>
            <div className="post-user-name-grid-2">
              <span>Jennifer</span>
            </div>
            <div className="post-image-background-grid-2">
                <img src="https://cdn.pixabay.com/photo/2016/05/09/22/34/vienna-1382700__480.jpg" alt="" />
            </div>
            <div className="post-caption-grid-2">Can't wait to get this when it drops</div>
          </div>
        </header>
      </div>

      <div className="grid-3">
        <header>
          <div className="post-user-grid-3">
            <div className="post-user-avatar">
              <img src="https://i.pravatar.cc/150?img=12" alt="" />
            </div>
            <div className="post-user-name-grid-3">
              <span>Jennifer</span>
            </div>
            <div className="post-image-background-grid-3">
                <img src="https://cdn.pixabay.com/photo/2016/11/29/07/36/audience-1868137__480.jpg" alt="" />
            </div>
            <div className="post-caption-grid-3">Can't wait to get this when it drops</div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Posts;
