import React from "react";

const ExperienceComponent = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company:
        "Hong Kong Center For Cerebro-Cardiovascular Health Engineering (COCHE)",
      date: "Sep 2022-Present",
      background:
        "Created a database that houses the clinical data for the 17 projects that are ongoing at the center, this includes ECG and PPG Pulse Wave data, Ultrasound, Urine Samples and MRI data. Working closely with UI/UX, other developers and the clincal data team to implement and update the database for usabilty and storage of data.",
      frameworks: ["Typescript", "Javascript", "Next JS", "Mongo DB", "AWS", "Trello"],
    },
    {
      title: "Digital Messaging Specialist",
      company: "HSBC",
      date: "Sep 2022- Jul 2021",
      background: "Co-ordinated with multiple teams, UX, Copywriting and Data and Analytics to create emails and SMS campaigns spanning over multiple products using Jira and Confluence for organization and requirement gathering. Trained specialists and configuration teams in the newest methods of communications through Salesforce Marketing Cloud such as Journey Builder and 2 way SMS.",
      frameworks: ["Salesforce", "Javascript", "Jira"],
    },
    {
      title: "Financial Analyst",
      company: "HSBC",
      date: "Feb 2020- Jul 2020",
      background: "Developed visualisation of data using the Qlik Sense Software for a HSBC degree programme. Daily data was uploaded on the progress of participants, processed through Qlik Sense using a SQL-like syntax and key information was displayed through graphs and charts so that the program can be improved upon and updated.",
      frameworks: ["Qlik Sense", "SQL"],
    },
    {
      title: "Software Developer",
      company: "HSBC",
      date: "Feb 2020- Jun 2018",
      background: "Updated and improved the HSBC Home and Away offers website to use the Angular JS framework. Fixed bugs and implemented new features into the website  such as user interaction issues and adding a map locator, using HTML/CSS and JavaScript, which improved site interaction and overall responsiveness. Became the WalkMe subject matter expert, leading the roll out of guided.",
      frameworks: ["Angular", "Jira"],
    },
  ];

  return (
    <div className="my-5 mx-16">
      <h3>Experience</h3>
      {experiences.map((experience, index) => {
        return (
          <div key={index} className="grid grid-cols-4 hover:bg-slate-900 hover:border hover:border-white p-2 rounded-lg">
            <div className="col-span-1 text-gray-500">{experience.date}</div>
            <div className="col-span-3">
              <h3>
                {experience.title} · {experience.company}
              </h3>
              <p className="text-sm text-gray-500">{experience.background}</p>
              <div className="py-2">
                  <ul className="mt-2 flex flex-wrap">

                  {experience.frameworks.map((frame, index) => {
                        return (
                        <li key={index} className="bg-teal-300 text-teal-300 rounded-lg text- p-2 m-2 text-sm bg-opacity-25 font-medium">
                        {frame}
                        </li>
                        );
                  })}
                  </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExperienceComponent;
