import React, { useMemo, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import cover from "../pictures/search-cover.png";
import SearchBar from "../components/Elements/SearchBar";
import PropertyCard from "../components/Elements/PropertyCard";
import { request } from "../utils/request";
import objectToQueryString from "../utils/objectToQuery";
import useIsMobile from "../utils/useIsMobile";
import Pagination from "../components/Elements/Pagination";

let abortController = new AbortController();

function Search() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [sortOrder, setSortOrder] = useState("");
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(0);
  const limit = 21;

  useEffect(() => {
    handleOnChangeFilter({});
  }, []);

  const handleOnChangeFilter = async (filters) => {
    try {
      if (typeof filters.offset === "undefined") {
        setPage(0);
        filters.offset = 0;
        filters.limit = limit;
      }
      setFilters(filters);
      abortController?.abort();
      abortController = new AbortController();
      setLoading(true);
      let signal = abortController.signal;
      const ads = await request(
        "/api/property?" + objectToQueryString(filters),
        { signal }
      );
      setData(ads.data);
      setCount(ads.count);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  const sortedProperties = useMemo(() => {
    const propertiesWithImages = data.map((d) => ({
      ...d,
      image: d.photos[0],
    }));

    if (sortOrder === "asc") {
      return propertiesWithImages.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      return propertiesWithImages.sort((a, b) => b.price - a.price);
    } else {
      return propertiesWithImages.sort(
        (a, b) => new Date(b.submittedOn) - new Date(a.submittedOn)
      );
    }
  }, [data, sortOrder]);

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const isMobile = useIsMobile();

  return (
    <>
      <Navbar />
      <div>
        <img src={cover} className="w-full" alt="Cover" />
      </div>
      <div className="w-10/12 mx-auto py-8 -mt-32">
        <SearchBar onChangeFilters={handleOnChangeFilter} />
      </div>
      <div className="w-10/12 mx-auto md:flex justify-between items-center">
        <p className="text-2xl font-bold">
          <span className="text-base text-gray-600 ml-2">
            {count} ingatlan található
          </span>
        </p>
        <div className="ml-auto">
          <label htmlFor="sortOrder" className="font-bold mr-2">
            Rendezés:
          </label>
          {isMobile && <br />}
          <select
            id="sortOrder"
            name="sortOrder"
            value={sortOrder}
            onChange={handleSortChange}
          >
            <option value="">Alapértelmezett</option>
            <option value="asc">Ár szerint növekvő</option>
            <option value="desc">Ár szerint csökkenő</option>
          </select>
        </div>
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-96">Loading ...</div>
      ) : sortedProperties.length === 0 ? (
        <div className="flex justify-center items-center h-96">
          <span className="text-gray-700 font-bold">
            Nem található ingatlan
          </span>
        </div>
      ) : (
        <div className="w-full px-8 md:px-0 mt-2 md:mt-0 md:w-10/12 mx-auto py-2 mb-12 my-4 md:grid grid-cols-3 gap-4">
          {sortedProperties.map((property) => (
            <PropertyCard property={property} key={property.id} />
          ))}
        </div>
      )}
      {false && (
        <div className="my-6 flex mx-auto justify-center items-center w-full md:w-10/12">
          <div className="rounded-lg overflow-hidden flex">
            {new Array(Math.ceil(count / limit)).fill(0).map((_, i) => (
              <span
                className={
                  "flex justify-center items-center h-12 w-12 text-center cursor-pointer p-2 font-semibold bg-gray-200 " +
                  (page === i ? "bg-blue text-white" : "")
                }
                onClick={() => {
                  setPage(i);
                  handleOnChangeFilter({
                    ...filters,
                    offset: i * limit,
                    limit,
                  });
                }}
              >
                {i + 1}
              </span>
            ))}
          </div>
        </div>
      )}
      {count > limit && (
        <div className="my-6">
          <Pagination
            pageCount={Math.ceil(count / limit)}
            handlePageClick={({ selected: i }) => {
              setPage(i);
              handleOnChangeFilter({
                ...filters,
                offset: i * limit,
                limit,
              });
            }}
          />
        </div>
      )}
      <Footer />
    </>
  );
}

export default Search;
