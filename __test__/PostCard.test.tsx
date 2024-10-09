import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import PostCard from "../src/components/PostCard";

describe("PostCard", () => {
  const post = {
    id: 1,
    author: "John Doe",
    content: "This is a post",
    image: "",
    liked: false,
  };

  it("should render the post content", () => {
    const { getByText } = render(<PostCard {...post} />);
    expect(getByText("This is a post")).toBeInTheDocument();
  });
});
