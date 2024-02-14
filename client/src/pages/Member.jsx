import React, {useEffect, useState} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Introduction from "../components/Member/Introduction";
import {useParams} from "react-router-dom";
import {request} from "../utils/request";
import {useIsSmallerScreen} from "../utils/useIsMobile";
import ErrorPage from "../components/ErrorPage";
import Card from "../components/Member/Card";
import Attributes from "../components/Member/Attributes";
import Agency from "../components/Elements/Agency";
import Tags from "../components/Member/Tags";
import Properties from "../components/Member/Properties";

function Member() {
  const {memberId} = useParams();
  const [member, setMember] = useState();
  const [isValidMemberId, setIsValidMemberId] = useState(true);

  useEffect(() => {
    if (memberId) {
      request(`/api/agency/member/${memberId}`)
          .then((data) => {
            setMember(data.data);
          })
          .catch((err) => {
            if (Number(err.response?.status) === 404) {
              setIsValidMemberId(false);
            }
          });
    }
  }, [memberId]);

  const isSmallerScreen = useIsSmallerScreen(1023);

  if (!isValidMemberId) {
    return <ErrorPage/>;
  }

  if (member)
    return (
        <>
          <Navbar/>

          <div className="orange-gradient relative rounded-br-3xl rounded-bl-3xl h-44 -mb-24 z-0" />

          <div className="lg:grid grid-cols-3 gap-10 w-10/12 mx-auto relative z-30 mb-12">
            <div className="h-full">
              <div className="sticky top-[2rem] h-auto">
                <div className="mb-4">
                  <Card member={member} />
                </div>

                <div className="mb-4">
                  <Attributes attributes={member.attributes} />
                </div>

                <div className="mt-4">
                  <Agency agency={member.agency} />
                </div>
              </div>
            </div>

            <div className="col-span-2">
              <Introduction introduction={member.introduction} />

              <div className="light-card-shadow p-6 rounded-2xl bg-white mb-8">
                <div className="grid grid-cols-1 2xl:grid-cols-11">
                  <div className="2xl:col-span-5">
                    <p className="card-heading mb-4">Értékesítési területeim</p>

                    <div className="flex flex-row flex-wrap gap-4">
                      <Tags tags={member.tags} filter="area" />
                    </div>
                  </div>

                  <div className="col-span-1">
                    <div className="w-full 2xl:w-[2px] h-[2px] 2xl:h-full bg-gray-50 max-2xl:my-10 2xl:mx-auto "></div>
                  </div>

                  <div className="2xl:col-span-5">
                    <p className="card-heading mb-4">Amikben tudok segíteni</p>

                    <div className="flex flex-row flex-wrap gap-4">
                      <Tags tags={member.tags} filter="skill" />
                    </div>
                  </div>
                </div>
              </div>

              <Properties memberId={memberId}/>
            </div>
          </div>

          <Footer/>
        </>
    );
}

export default Member;
