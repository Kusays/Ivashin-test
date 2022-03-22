import "./Tags.css";
import React from "react";

interface ITags {
  tags: string[];
  setFilterTag: (tag: string | null) => void;
}

export const Tags = ({ tags, setFilterTag }: ITags) => {
  return (
    <div className="Tags">
      <h3>Your tags</h3>
      <hr></hr>
      <button onClick={() => setFilterTag(null)}>Clear Filter</button>
      <dl className="colorTags">
        {tags.map((tag) => (
          <dt key={tag}>
            <a className="link" href={tag} onClick={() => setFilterTag(tag)}>
              {tag}
            </a>
          </dt>
        ))}
      </dl>
    </div>
  );
};
