import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { getRequest } from "./api/requests";
import { LibraryPage, BookPage } from "./pages";

export default function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/library",
      loader: async () => {
        return await getRequest({ "limit": 10 });
      },
      element: <LibraryPage />,
      children: [
        {
          path: "book/:bookId",
          loader: async ({ params }) => {
            return await getRequest({ id: params.bookId });
          },
          element: <BookPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
