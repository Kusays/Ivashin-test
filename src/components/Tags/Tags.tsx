import "./Tags.css";
import React from "react";

interface ITags {
  tags: string[];
}

export const Tags = ({ tags }: ITags) => {
  return (
    <div className="Tags">
      <h3>Your tags</h3>
      <hr></hr>
      <dl className="colorTags">
        {tags.map((tag) => (
          <dt key={tag}>{tag}</dt>
        ))}
      </dl>
    </div>
  );
};
