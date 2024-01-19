import React, { useState, useEffect, useRef } from "react";
import { SectionWrapper } from "../hoc";
import {
  groupprojectData,
  sprintOne,
  sprintTwo,
  sprintThree,
  answerSubQ,
} from "../constants/Group";

const Group = () => {
  const [selectedSection, setSelectedSection] = useState(
    groupprojectData.researchQuestions.main
  );
  const sectionRefs = useRef({});

  const allSections = [
    { title: groupprojectData.title, contents: [] },
    ...sprintOne.section,
    ...sprintTwo.section,
    ...sprintThree.section,
    { title: answerSubQ.name, contents: [] },
  ];

  useEffect(() => {
    const selectedRef = sectionRefs.current[selectedSection];
    if (selectedRef) {
      selectedRef.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedSection]);

  const handleSectionClick = (sectiontitle) => {
    setSelectedSection(sectiontitle);
  };

  const renderResults = (results) => {
    if (!results || results.length === 0) {
      return null;
    }

    return (
      <div className="mb-4">
        <div className="bg-gray-800 bg-opacity-90 rounded-lg p-6 mb-8">
          <p className="text-xl font-semibold">Results :</p>
          {results.map((result, index) => (
            <div key={index}>
              {result.context && <p>{result.context}</p>}
              {result.list && Array.isArray(result.list) && (
                <ul className="pb-4" style={{ listStyle: "inside decimal" }}>
                  {result.list.map((item, listItemIndex) => (
                    <li key={listItemIndex}>{item}</li>
                  ))}
                </ul>
              )}
              {result.image && (
                <img
                  src={result.image}
                  alt="Result"
                  className="max-w-full max-h-[40rem] rounded-lg mb-4 mt-2"
                />
              )}
              {result.video && (
                <video width="" height="" controls>
                  <source src={result.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderConclusion = (SoWhat) => {
    return (
      <div className="bg-gray-800 bg-opacity-90 rounded-lg p-6 mb-8">
        <div className="">
          <h2 className="text-xl font-semibold">So What?</h2>
          <p>{SoWhat}</p>
        </div>
      </div>
    );
  };

  const renderFileLink = (filelink) => {
    return (
      <a
        href={filelink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline hover:font-semibold"
      >
        Link for the file
      </a>
    );
  };

  const renderContent = (contents) => {
    if (!Array.isArray(contents)) return null;

    return contents.map((content, index) => (
      <div className="bg-gray-800 bg-opacity-30 rounded-lg p-6 mb-8">
        <div key={index} className="mb-4">
          {content.title && (
            <h4 className="font-bold text-xl mb-4">{content.title}</h4>
          )}
          {content.Why && (
            <div className="bg-gray-800 bg-opacity-90 rounded-lg p-6 mb-8">
              <p className="text-xl font-semibold">
                Why? <br />
              </p>
              {content.Why}
            </div>
          )}
          {content.How && (
            <div className="bg-gray-800 bg-opacity-90 rounded-lg p-6 mb-8">
              <p className="text-xl font-semibold">
                How? <br />
              </p>{" "}
              {content.How}
            </div>
          )}
          {content.context && <p>{content.context}</p>}
          {content.results && renderResults(content.results)}
          {content.contents && renderContent(content.contents)}
          {content.SoWhat && renderConclusion(content.SoWhat)}
          {content.filelink && renderFileLink(content.filelink)}
        </div>
      </div>
    ));
  };

  const renderAnswerSubQ = () => {
    return (
      <div className="mb-8">
        {answerSubQ.section.map((item, index) => (
          <div className="bg-gray-800 bg-opacity-30 rounded-lg p-6 mb-8">
            <div key={index} className="mb-6"></div>
            <div className="bg-gray-800 bg-opacity-70 rounded-lg p-6 mb-8">
              <h3 className="text-2xl font-semibold">{item.title}</h3>
            </div>
            <div className="bg-gray-800 bg-opacity-70 rounded-lg p-6 mb-4">
              <p className="text-lg">{item.context}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex text-lg">
      {/* Navigation Bar */}
      <div className="fixed left-20 p-4 h-screen bg-transparent">
        <nav>
          <ul className="list-none pl-0 pt-40">
            {allSections.map((section, index) => {
              if (!section || !section.title) {
                return null;
              }
              return (
                <li className="mb-4" key={index}>
                  <button
                    className={`text-blue-600 hover:underline hover:bg-transparent text-lg ${
                      selectedSection === section.title ? "font-semibold" : ""
                    }`}
                    onClick={() => handleSectionClick(section.title)}
                  >
                    {section.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Main content area */}
      <div className="pt-32">
        {/* main question */}
        <div className="bg-gray-800 bg-opacity-50 rounded-lg p-6 mb-8">
          <div>
            <div className="bg-gray-800 bg-opacity-70 rounded-lg p-6 mb-8">
              <h2 className="text-3xl font-bold">
                {groupprojectData.titlePage}
              </h2>
            </div>
            <p className="mb-6">
              <strong>Subject:</strong> <br />
              {groupprojectData.projectDefinition.subject}
            </p>
            <p className="mb-6">
              <strong>Problem Definition:</strong> <br />
              {groupprojectData.projectDefinition.problemDefinition}
            </p>
            <p className="mb-6">
              <strong>Project Goal:</strong> <br />
              {groupprojectData.projectDefinition.projectGoal}
            </p>
          </div>
        </div>

        {allSections.map((section, index) => {
          // Ensure the section has a title and contents array before attempting to render
          if (!section || !section.title || !Array.isArray(section.contents)) {
            return null; // Skip rendering if conditions aren't met
          }
          return (
            <div
              key={index}
              ref={(ref) => (sectionRefs.current[section.title] = ref)}
              className="mb-8"
            >
              <h3 className="text-2xl font-semibold mb-4">{section.title}</h3>
              {/* Render the contents of the section */}
              {renderContent(section.contents)}
            </div>
          );
        })}
        <div className="bg-gray-800 bg-opacity-20 rounded-lg p-6 mb-8">
          {/* Render answerSubQ Section */}
          {renderAnswerSubQ()}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Group, "Group");
