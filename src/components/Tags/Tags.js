import './Tags.css';
import React from 'react';

export function Tags({ tags }) {
  return (
    <div className="Tags">
      <h3>Your tags</h3>
      <hr></hr>
      <dl>
        {tags.map((tag) => (
          <dt key={tag}>{tag}</dt>
        ))}
      </dl>
    </div>
  );
}
