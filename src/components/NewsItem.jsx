import React from "react";

const NewsItem = (props) => {
  let { title, description, imgUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        <img
          src={
            // imgUrl == null
            //   ? "https://english.cdn.zeenews.com/sites/default/files/2023/02/11/1152411-cold-flu-fever-pexels.jpg"
            //   : 
            imgUrl
          }
          className="card-img-top"
          alt="..."
          height={"200px"}
        />
        <div className="card-body">
          <h5
            className="card-title"
            style={{
              maxHeight: "100px",
              minHeight: "100px",
              overflow: "hidden",
            }}
          >
            {!title.slice(0, 15)
              ? "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com"
              : title}
            ...
          </h5>
          <p className="card-text">{description.slice(0, 40)}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
