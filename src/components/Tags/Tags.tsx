import "./Tags.scss";
import React from "react";

interface ITags {
  tags: string[];
  setFilterTag: (tag: string | null) => void;
  filterTag: string | null;
}

export const Tags = ({ tags, setFilterTag, filterTag }: ITags) => {
  return (
    <div className="Tags">
      <h3>Your tags</h3>
      <hr></hr>
      <button onClick={() => setFilterTag(null)}>Clear Filter</button>
      <dl className="colorTags">
        {tags.map((tag) => (
          <dt key={tag}>
            <a
              className={`link ${filterTag === tag ? "filtered" : ""}`}
              href={tag}
              onClick={() => setFilterTag(tag)}
            >
              {tag}
            </a>
          </dt>
        ))}
      </dl>
    </div>
  );
};
