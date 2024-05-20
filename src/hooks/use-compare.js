const useCompare = (compareVar, ar1, ar2, ar3) => {
  if (compareVar < 768) {
    return ar1;
  } else if (compareVar >= 768 && compareVar <= 1024) {
    return ar2;
  } else {
    return ar3;
  }
};

export default useCompare;
