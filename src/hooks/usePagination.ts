import { useState, useMemo} from "react";

interface IPagination{
    initPerPage: number
    initCurrPage: number
    totalData: number
}

const usePagination = ({ initPerPage, initCurrPage, totalData }: IPagination) => {
  const [results,] = useState(initPerPage);
  const [page, setPage] = useState(initCurrPage);


  const handleNextPage = () => {
    setPage(prev => prev + 1);
  };

  const handlePrevPage = () => {
    setPage(prev => (prev > 0 ? prev - 1 : 0));
  };


  const isNextPageClickable = useMemo(() => {
    const totalPages = Math.ceil(totalData / results);
    return page < totalPages - 1;
  }, [page, totalData, results]);


  const isBackPageClickable = useMemo(() => {
    return page > 0;
  }, [page]);

  const currItemsCount = useMemo(() => {
    const startIndex = page * results;
    const endIndex = Math.min(startIndex + results, totalData);
    return endIndex - startIndex;
  }, [page, results, totalData]);



  return {
    handleNextPage,
    handlePrevPage,
    isNextPageClickable,
    isBackPageClickable,
    page,
    currItemsCount
  };
};

export default usePagination
