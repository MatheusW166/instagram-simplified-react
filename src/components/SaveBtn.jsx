import { useState } from "react";
import Icon from "./Icon";

export default function SaveBtn() {
  const [isSaved, setIsSaved] = useState(false);
  return (
    <div className="save-btn">
      <label data-test="save-post" onClick={() => setIsSaved(!isSaved)}>
        {!isSaved ? <Icon name="bookmark-outline" /> : <Icon name="bookmark" />}
      </label>
    </div>
  );
}
