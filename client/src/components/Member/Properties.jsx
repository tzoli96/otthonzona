import React, {useMemo, useState, useEffect} from "react";
import {request} from "../../utils/request";
import objectToQueryString from "../../utils/objectToQuery";
import PropertyCard from "../Elements/PropertyCard";
import Pagination from "../Elements/Pagination";
import useIsMobile from "../../utils/useIsMobile";

function MemberProperties({memberId}) {
  let abortController = new AbortController();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [sortOrder, setSortOrder] = useState("");
  const [adTypeFilter, setAdTypeFilter] = useState("elado");
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(0);
  const limit = 21;

  const isMobile = useIsMobile();

  useEffect(() => {
    handleOnChangeFilter({});
  }, []);

  const handleOnChangeFilter = async (filters, adType) => {
    try {
      if (typeof filters.offset === "undefined") {
        setPage(0);
        filters.offset = 0;
        filters.limit = limit;
      }

      filters.adType = (adType && adType.length) ? adType : adTypeFilter;

      setAdTypeFilter(filters.adType);
      setFilters(filters);
      abortController?.abort();
      abortController = new AbortController();
      setLoading(true);
      let signal = abortController.signal;
      const ads = await request(
          "/api/property/member/" + memberId + "?" + objectToQueryString(filters),
          {signal}
      );
      setData(ads.data);
      setCount(ads.count);
    } catch (err) {
      console.log(err)
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
  }, [data, sortOrder, adTypeFilter]);

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleAdTypeChange = (val) => {

  }

  return (
      <div className="light-card-shadow p-6 rounded-2xl bg-white mb-8">
        <p className="card-heading mb-4">Ingatlanjaim</p>

        <div className="mt-4 flex gap-4 mb-4">
          {[{name: "Eladó", value: "elado"}, {name: "Kiadó", value: "kiado"}].map((tab) => (
              <span
                  key={tab.value}
                  className={`py-2 px-4 rounded-full cursor-pointer font-bold ${
                      adTypeFilter === tab.value
                          ? "orange-gradient text-white"
                          : "bg-gray-200 text-grey-600"
                  }`}
                  onClick={() => handleOnChangeFilter(filters, tab.value)}
              >
            {tab.name}
          </span>
          ))}
        </div>

        <div className="w-full flex max-md:flex-row max-md:flex-wrap max-md:justify-start justify-between items-center mb-4">
          <p className="text-2xl font-bold max-md:mb-4 max-md:w-full">
            <span className="text-base text-gray-600 lg:ml-2">
              {count} ingatlan található
            </span>
          </p>

          <div className="lg:ml-auto max-md:flex">
            <label htmlFor="sortOrder" className="font-bold mr-2">
              Rendezés:
            </label>
            {isMobile && <br/>}
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
            <div className="px-0 mt-2 md:mt-0 w-full py-2 mb-12 my-4 grid 2xl:grid-cols-2 gap-4">
              {sortedProperties.map((property) => (
                  <PropertyCard property={property} key={property.id}/>
              ))}
            </div>
        )}

        {count > limit && (
            <div className="my-6">
              <Pagination
                  pageCount={Math.ceil(count / limit)}
                  handlePageClick={({selected: i}) => {
                    setPage(i);
                    handleOnChangeFilter({
                      ...filters,
                      offset: i * limit,
                      limit
                    });
                  }}
              />
            </div>
        )}
      </div>
  );
}

export default MemberProperties;
