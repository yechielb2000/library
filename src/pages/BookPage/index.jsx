import React from "react";
import { useSearchParams } from "react-router-dom";

export default function BookPage() {
  const { bookId } = useSearchParams();
  return <div>{bookId}</div>;
}
