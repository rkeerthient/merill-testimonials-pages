import * as React from "react";
import {
  Template,
  GetPath,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
  TemplateProps,
} from "@yext/pages";
import Layout from "../components/Layout";
import ReviewGenForm from "../components/ReviewGenForm";
import Stars from "../components/Stars";
import "../index.css";
import ExpandableFilter from "../components/ExpandableFilter";
import { useState } from "react";

export const config = {
  stream: {
    $id: "advisors",
    fields: [
      "id",
      "uid",
      "name",
      "address",
      "c_advisorName",
      "c_averageRating",
      "c_numberOfReviews",
      "slug",
      "description",
      "c_reviewCollectionSlug",
      "ref_reviewsAgg.averageRating",
      "c_headshot",
      "c_clientFocuses",
      "c_language",
      "c_experience",
      "c_licensesAndCertifications",
      "c_testimonials.id",
      "c_testimonials.c_author",
      "c_testimonials.c_rating",
      "c_testimonials.c_location",
      "c_testimonials.c_status",
      "c_testimonials.c_authorEmail",
      "c_testimonials.c_content",
      "c_testimonials.c_reviewDate",
      "c_testimonials.name",
      "c_testimonials.c_currentClient",
      "c_testimonials.c_compensationDetails",
      "c_testimonials.c_conflictDetails",
      "c_advisorIntents.primaryPhoto",
      "c_advisorIntents.richTextDescription",
      "c_advisorIntents.shortDescription",
      "c_advisorIntents.description",
      "c_advisorIntents.name",
      "c_advisorIntents.c_advisor",
      "c_advisorIntents.c_servicesTitle",
      "c_advisorIntents.c_specialtyList",
      "c_advisorIntents.photoGallery",
      "c_advisorIntents.headshot",
      "c_advisorIntents.mainPhone",
      "c_advisorIntents.services",
      "c_advisorIntents.id",
    ],
    filter: {
      entityTypes: ["location"],
    },
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

export const getPath: GetPath<TemplateProps> = (props) => {
  return props.document.slug;
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = (
  props
): HeadConfig => {
  return {
    title: props.document.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

const AdvisorPage: Template<TemplateRenderProps> = ({
  document,
}: TemplateRenderProps) => {
  const {
    id,
    name,
    address,
    c_advisorName,
    c_testimonials,
    slug,
    c_averageRating,
    c_numberOfReviews,
    description,
    c_experience,
    c_reviewCollectionPage,
    ref_reviewsAgg,
    c_headshot,
    c_clientFocuses,
    c_language,
    c_licensesAndCertifications,
    c_advisorIntents,
  } = document;
  const [openTab, setOpenTab] = useState(0);

  const AdditionDetails = (
    <div>
      <p>{description}</p>
      <a className="text-gray-600 text-sm underline" href="#review-gen">
        Rate this Advsior
      </a>
    </div>
  );

  return (
    <>
      <div className="w-full ">
        <div style={{ backgroundColor: "#012169" }}>
          <div className="px-4 mx-auto w-full md:w-3/4">
            <div
              className="flex flex-col md:flex-row justify-between  mt-12 mb-20 text-white"
              style={{ minHeight: "20.625rem" }}
            >
              <div className="flex my-auto">
                <div className="Hero-details pt-16 md:pt-0">
                  <h1 className="Hero-nameWrapper flex mb-4 md:mb-10 items-baseline">
                    <span className="text-3xl md:text-6xl leading-3 font-light">
                      Victor Montas,
                    </span>
                    <span className="flex justify-end items-end ml-2">
                      <div className="Hero-cert ml-1">CPFA &#174; </div>
                    </span>
                  </h1>
                  <div className="leading-2 md:leading-5 text-lg text-white">
                    Senior Financial Advisor
                  </div>
                </div>
              </div>
              <div className="md:ml-24 flex overflow-visible h-80 ">
                <img
                  className="left-1/2 md:left-0 -translate-x-2/4 md:-translate-x-0	relative w-auto h-72 md:h-96 max-w-none md:max-w-full md:max-h-full top-24"
                  src="//dynl.mktgcdn.com/p/U9_5Fh_UxMCeFOys8HpqD7d0BZC1nzcFamUTx-m9chM/200x200.jpg"
                  alt="Advisor Headshot"
                />
              </div>
            </div>
          </div>
          <div className="Hero-links">
            <div className="Hero-linksContainer l-container">
              <div className="Hero-linksOuter"></div>
            </div>
          </div>
        </div>
        <div className="w-full mt-10">
          <div className="w-full md:w-3/4	mx-auto px-4 flex">
            <div className="md:basis-3/4">
              <div
                className="pb-10"
                style={{ borderBottom: ".0625rem solid #80a8ea" }}
              >
                <div className="text-2xl  font-light">
                  My team and I work closely with clients to listen to their
                  wealth planning needs and present the appropriate solutions
                  available on our robust platform to address those needs. I am
                  committed to using my experience, effort and resources to
                  assist clients in pursuit of their business and personal
                  financial goals. I am motivated on a daily basis to help
                  clients on their constant drive to grow.
                </div>
              </div>

              <div
                className="flex flex-col md:flex-row justify-between mt-8 pb-8"
                style={{ borderBottom: ".0625rem solid #80a8ea" }}
              >
                <div className="mr-4">
                  {
                    <div className="mb-3.5">
                      <h2 className="mb-3.5 text-2xl leading-5	 font-light headColor">
                        Experience
                      </h2>
                      <div>{c_experience && c_experience}</div>
                    </div>
                  }
                  <div className="mb-3.5">
                    <h2 className="mb-3.5 text-2xl leading-5	 font-light headColor">
                      Degree
                    </h2>
                    {c_language &&
                      c_language.map((item: any, index: number) => (
                        <div key={index}>{item}</div>
                      ))}
                  </div>
                  <div className="mb-3.5">
                    <h2 className="mb-3.5 text-2xl leading-5	 font-light headColor">
                      Languages
                    </h2>
                    <div>English</div>
                    <div>Spanish</div>
                  </div>
                </div>
                <div className="mr-4">
                  <h2 className="mb-3.5 text-2xl leading-5	 font-light headColor">
                    Client Focuses
                  </h2>
                  {c_clientFocuses &&
                    c_clientFocuses.map((item: any, index: number) => (
                      <div key={index}>{item}</div>
                    ))}
                </div>
                <div>
                  <h2 className="mb-3.5 text-2xl leading-7 font-light headColor">
                    Licenses and Certifications
                  </h2>
                  {c_licensesAndCertifications &&
                    c_licensesAndCertifications.map(
                      (item: any, index: number) => (
                        <div key={index}>{item}</div>
                      )
                    )}
                </div>
              </div>
              {c_advisorIntents && (
                <div
                  className="px-8"
                  style={{
                    borderBottom: ".0625rem solid #80a8ea",
                    borderTop: ".0625rem solid #80a8ea",
                  }}
                >
                  <div className=" mt-10 mb-10 ">
                    <div className="text-3xl font-light mx-auto text-center headColor">
                      Services
                    </div>
                    <div className="border mt-4">
                      <ul className="flex flex-wrap text-center border-b border-gray-200 bg-gray-200">
                        {c_advisorIntents.map((item: any, index: any) => {
                          return (
                            <li
                              key={index}
                              className="w-full md:w-auto md:mr-2"
                            >
                              <a
                                onClick={() => setOpenTab(index)}
                                className={`${
                                  openTab === index
                                    ? "w-full md:w-auto inline-block p-4 active cursor-pointer	bg-gray-300"
                                    : "w-full md:w-auto inline-block p-4 active cursor-pointer	"
                                }`}
                              >
                                {item.name}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                      <div className=" mt-6 bg-white p-4">
                        {c_advisorIntents.map((item: any, index: any) => {
                          return (
                            <div
                              key={index}
                              className={openTab === index ? "block" : "hidden"}
                            >
                              <div className="mb-8">
                                {item.richTextDescription.substring(1, 200)}
                                {item.richTextDescription.length > 200 && "..."}
                              </div>

                              <a
                                href={`/${item.id.toLowerCase()}`}
                                className=" hover:text-blue-400 hover:border-b border-blue-400"
                              >
                                Learn more
                              </a>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="mb-10">
                <div className=" mt-10 mb-10 ">
                  <div className="text-3xl leading-3 font-light mx-auto text-center headColor">
                    Testimonials
                  </div>
                </div>
                {c_testimonials &&
                  c_testimonials.map((item: any, index: number) => {
                    return (
                      <>
                        {item.c_status === "LIVE" && (
                          <div
                            className="flex flex-col gap-2 border rounded-sm p-4 mb-4"
                            key={index}
                          >
                            <div className="flex gap-4">
                              <div>{item.c_reviewDate}</div>
                            </div>
                            <div>{item.c_content}</div>
                            <div>
                              <div className="text-gray-500 italic">
                                {item.c_author}
                              </div>
                            </div>
                            {(item.c_conflictDetails ||
                              item.c_compensationDetails ||
                              item.c_currentClient) && (
                              <div className="text-sm border-t pt-4">
                                {item.c_currentClient && (
                                  <div>
                                    <span className="font-medium text-gray-500">
                                      Current Client:{" "}
                                    </span>
                                    {item.c_currentClient}
                                  </div>
                                )}
                                {item.c_conflictDetails && (
                                  <div>
                                    <span className="font-medium text-gray-500">
                                      Conflict Details :{" "}
                                    </span>
                                    {item.c_conflictDetails}
                                  </div>
                                )}
                                {item.c_compensationDetails && (
                                  <div>
                                    <span className="font-medium text-gray-500">
                                      Compensation:{" "}
                                    </span>
                                    {item.c_compensationDetails}
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        )}
                      </>
                    );
                  })}
              </div>
            </div>

            <div
              className=" mt-16 ml-16 mb-16 hidden md:block"
              style={{ flexBasis: "25%", color: "#0052c2" }}
            >
              <div className="leading-10 ">
                <div className="flex  flex-start mb-4">
                  <img
                    src="https://advisor_ml_com.yextpages.net/permanent-b0b701/assets/images/LinkedIn_blue.47dd8586.svg"
                    alt=""
                    className="mr-4 items-center h-6"
                  />
                  <div className="leading-6 text-lg justify-center link-color text-lg font-bold">
                    LinkedIn
                  </div>
                </div>
                <div className="flex  flex-start mb-4">
                  <img
                    src="	https://advisor_ml_com.yextpages.net/permanent-b0b701/assets/images/premium-badge.6cb594b0.png"
                    alt=""
                    className="mr-4 items-center h-6"
                  />
                  <div className="leading-6 text-lg justify-center link-color text-lg font-bold">
                    FINRA&lsquo;s Brokercheck
                  </div>
                </div>
                <div className="flex  flex-start mb-4">
                  <img
                    src="https://advisor_ml_com.yextpages.net/permanent-b0b701/assets/images/calendar_blue.4da50275.svg"
                    alt=""
                    className="mr-4 items-center h-6"
                  />
                  <div className="leading-6 text-lg justify-center link-color text-lg font-bold">
                    Get in touch
                  </div>
                </div>
                <div className="flex  flex-start mb-4">
                  <img
                    src="https://advisor_ml_com.yextpages.net/permanent-b0b701/assets/images/phone_blue.2456d474.svg"
                    alt=""
                    className="mr-4 items-center h-6"
                  />
                  <div className="leading-6 text-lg justify-center link-color text-lg font-bold">
                    (908) 685-3250s
                  </div>
                </div>
                <div className="flex  flex-start mb-4">
                  <img
                    src="https://advisor_ml_com.yextpages.net/permanent-b0b701/assets/images/pin_blue.503e31fe.svg"
                    alt=""
                    className="mr-4 items-center h-6"
                  />
                  <div className="leading-6 text-lg justify-center link-color text-lg font-bold">
                    100 Somerset Corp Center Blvd Bridgewater, New Jersey, 08807
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="https://i.imgur.com/cQvSgnb.png"
          alt=""
          style={{ width: "100%" }}
        />
        <img
          src="https://i.imgur.com/jbkx6dq.png"
          alt=""
          style={{ width: "100%" }}
        />
        <img
          src="https://i.imgur.com/pqBY21J.png"
          alt=""
          style={{ width: "100%" }}
        />
        <img
          src="https://i.imgur.com/a6ZPyA6.png"
          alt=""
          style={{ width: "100%" }}
        />
        <img
          src="https://i.imgur.com/aklvTKM.png"
          alt=""
          style={{ width: "100%" }}
        />
      </div>
    </>
  );
};

export default AdvisorPage;
