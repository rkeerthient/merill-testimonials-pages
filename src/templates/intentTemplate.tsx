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
import "../index.css";
import MarkdownView from "react-showdown";
import Carousel from "../components/Carousel";

export const config = {
  stream: {
    $id: "intent-page",
    fields: [
      "primaryPhoto",
      "richTextDescription",
      "shortDescription",
      "description",
      "name",
      "c_advisor",
      "c_servicesTitle",
      "c_specialtyList",
      "photoGallery",
      "headshot",
      "mainPhone",
      "services",
      "id",
    ],
    filter: {
      entityTypes: ["ce_intentPage"],
    },
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

export const getPath: GetPath<TemplateProps> = (props) => {
  return props.document.name;
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

const IntentPage: Template<TemplateRenderProps> = ({
  document,
}: TemplateRenderProps) => {
  const {
    primaryPhoto,
    richTextDescription,
    shortDescription,
    description,
    name,
    c_advisor,
    c_servicesTitle,
    c_specialtyList,
    photoGallery,
    headshot,
    mainPhone,
    services,
    id,
  } = document;

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
        <div className="w-full ">
          <div className="md:w-3/4	mx-auto px-4 flex">
            <div className="md:basis-3/4">
              <div
                className="pb-10"
                style={{ borderBottom: ".0625rem solid #80a8ea" }}
              >
                <h1 className="text-2xl font-bold">{name}</h1>
                <div className="text-xl font-light w-full md:w-3/4 mt-4">
                  <MarkdownView
                    markdown={richTextDescription}
                    options={{ tables: true, emoji: true }}
                  />
                </div>
              </div>
            </div>
            <div
              className=" mt-16 ml-16 mb-16 basis-1/4 hidden md:visible"
              style={{ color: "#0052c2" }}
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
          <div className="mt-4 w-full md:w-3/4">
            <Carousel data={document} slidesToShow={3} />
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
export default IntentPage;