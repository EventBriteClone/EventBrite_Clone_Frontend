import { useState } from "react";

export default function usePagination() {
  const [page, setPage] = useState(1);
  function changePage(factor) {
    setPage((prevPage) => prevPage + factor);
  }
  return [page, (setPage = changePage())];
}
