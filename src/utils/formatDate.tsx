import { format } from "date-fns";

const formatDate = (date: Date | string, mask: string): string => {
  console.log(date);
  if (date instanceof Date) {
    return format(date, mask);
  } else {
    return format(new Date(date), mask);
  }
};

export default formatDate;
