import data from "../data.json";
import Listing from "../components/listing/Listing";

export const createListings = (filters, setFilters) => {
  // Check for filters
  if (filters.length !== 0) {
    const filteredJobs = data.filter((job) => {
      const tags = [job.role, job.level, ...job.languages, ...job.tools];
      const isIncluded = filters.every((filter) => tags.includes(filter));
      if (isIncluded) {
        return job;
      }
    });
    // Return listing for each filtered job
    return filteredJobs.map((job, i) => {
      return <Listing key={i} data={job} setFilters={setFilters} />;
    });
  }
  // If there are no filters return a listing for each job in data array
  return data.map((job, i) => {
    return <Listing key={i} data={job} setFilters={setFilters} />;
  });
};
