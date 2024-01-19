const imageGroup = {
  Brainstorming: "/public/projects/group/images/brainstorming1.png",
  Poster: "/public/projects/group/images/DATA JOURNLISSM.png",
  CardSorting: "/public/projects/group/images/brainstoming.png",
  platform: "/public/projects/group/images/platform.png",
  MosCow: "/public/projects/group/images/MosCow table.png",
  sketch1: "/public/projects/group/designs/sketch1.png",
  wfUploadData: "/public/projects/group/designs/Upload Data.png",
  wfSelectData: "/public/projects/group/designs/select Data.png",
  wfNewProject: "/public/projects/group/designs/New Project.png",
  wfWrokspace: "/public/projects/group/designs/Workspace - sample.png",
  wfWEdit: "/public/projects/group/designs/Workspace - Edit.png",
  wcoReflection: "/public/projects/group/designs/Wireframe_dataDash.png",
  prsona: "/public/projects/group/images/Persona.png",
  wfgreen: "/public/projects/group/designs/Worspace-wireframe-green.png",
  sketch2: "/public/projects/group/images/sketchflow.jpeg",
  mokupone: "/public/projects/group/designs/Help.png",
  iterations: "/public/projects/group/images/iterations.PNG",
  prototype:
    "/public/projects/group/designs/WorkSpace, moved down fact check.png",
};

const videoPrototypeLast =
  "/public/projects/group/videopresention4/videoPrototypeLast.MP4";

const LinkDoc = {
  LSJRV:
    "/public/projects/group/doc/The Journalist's Role, Values, Types, and Challenges in Modern Reporting.pdf",
  UTRF: "/public/projects/group/doc/UsabilityTestReport-Fabian.pdf",
  UTRZ: "/public/projects/group/doc/UsabilityTestReport-Zahra.pdf",
  UR: "/public/projects/group/doc/UserRequiermints.pdf",
  WE: "/public/projects/group/doc/WorkspaceE.pdf",
  P: "/public/projects/group/doc/Persona.pdf",
  MCET: "/public/projects/group/doc/Meeting with Chief Editor 12 October.pdf",
  BJF: "/public/projects/group/doc/Brainstorm Journalism Figma.pdf",
};

export const groupprojectData = {
  titlePage: "Data Journalism Platform ",
  projectDefinition: {
    subject: "Visualization tool for journalists in Gilze en Rijen",
    problemDefinition:
      "Manual recording of important points in journalist meetings is time-consuming.",
    projectGoal:
      "Design a tool to help journalists use digital tools efficiently.",
  },
  researchQuestions: {
    main: "How can we design a user-friendly platform for Gilze en Rijen journalists?",
    subQuestions: [
      "How do Gilze & Rijen journalists work and what tools do they need?",
      "How to ensure correct sequence of tool usage?",
      "How to design a user-friendly platform that visualizes extracted data?",
      "How to guarantee the platform's usefulness and accessibility for journalists?",
    ],
  },
};

export const sprintOne = {
  section: [
    {
      title: "Sprint One",
      contents: [
        {
          title: "1.1 Creating Poster",
          contents: [
            {
              title: "1.1.1 Brainstorming",
              Why: "In order to know more about data journalism in a quicker way, we were told to create posters and then share what we found to the teammemebrs and peer students by showing that on a poster. But to decide a topic we had to do a brainstorming.",
              How: "Brainstorming: As a group, we discuss what are the different aspects that relate to journalism.",
              results: [
                {
                  context:
                    "The brainstorm was drawn in the white board by discussing it as a group. From that, we diced what each member should do a literature study for.                   ",
                  images: imageGroup.Brainstorming,
                },
              ],
              SoWhat:
                "The brainstorming helped us identify the most important aspects to look for regarding data journalism, which was about what it is, related AI tools and the value of data journalism.",
            },
            {
              title: "1.1.2 Literature research",
              Why: "Find general information about the Journalist and Data Journalism.                ",
              How: "Literature Study: Created a search plan and found 2 articles by the names “News Values” and “The Principles, Features and Techniques of Data Journalism”. I  used Google to search for keywords like “Journalism challenges”, and “values of journalism”.                ",
              results: [
                {
                  context:
                    "Shortly, the journalist role according to News Values article(Ivancheva, T. ,2011):",
                  list: [
                    "Verifying information",
                    "Objectivity and impartiality",
                    "Providing a complete and honest picture",
                    "Differentiating between fact, opinion, and rumors",
                    "Multitasking and adapting",
                  ],
                  context:
                    "As for the values according to the paper The Principles, Features, andTechniques of Data Journalism (Kalatzi, 2018):",
                  list: [
                    "Simplifying Complexity",
                    "Intermediaries for Data",
                    "Enhancing Transparency",
                    "Accountability",
                    "New Roles for Journalists",
                    "Innovation in Journalism",
                    "Public Engagement",
                    "Trust Rebuilding",
                  ],
                  context:
                    "Finally the possible challenges the journalist face according to Kalatzi paper:",
                  list: [
                    "Delayed Access to Data",
                    "Data Cleaning and Refinement",
                    "Limited Resources",
                    "Lack of Computational Skills",
                    "Skepticism and Resistance",
                    "Conflicts Between Traditional Journalism and Technology",
                    "Interactivity and Audience Engagement",
                    "Mistrust and Perception",
                    "Technical Obstacles",
                  ],
                },
              ],
              SoWhat:
                "I explored the journalists roles, values, and challenges. And was able to identify them by showing them as listed on what section. As for a deeper information, I have a full literature research about that. However, this research helped me in building the poster.",
              filelink: LinkDoc.LSJRV,
            },
            {
              title: "1.1.3 Poster",
              Why: "In order to know more about data journalism in a quicker way and to engage with the team members and peer students.                ",
              How: "Poster: Created the poster by searching online for the value of data journalism and then the process. After which, looked for imagery and tried to make the poster using Canva. Then each member on the group shared what he found to group members, peer students and teachers.                ",
              results: [
                {
                  images: imageGroup.Poster,
                },
              ],
              SoWhat:
                "The poster helped us to first engage with team members and to share the collected foundings in a better way.",
              filelink: LinkDoc.P,
            },
          ],
        },
        {
          title: "1.2 Understanding the project",
          contents: [
            {
              title: "1.2.1 Card sorting",
              Why: "To understand the project from the stakeholders, and the software team, and to get a better grasp of what we need to do on the project.                  ",
              How: "Card sorting: First created as many questions as possible then sorted them on categorize of  questions for the users, for the software team, about the design, and general questions that could be asked for the users and stakeholders.                   ",
              results: [
                {
                  images: imageGroup.CardSorting,
                },
              ],
              SoWhat:
                "We collected 8 questions for the user, 6 questions for the soft wear team, 5 for the design aspect and 4 general questions. This helped on covering all aspects on my opinion. ",
            },
            {
              title: "1.2.2 Interview stakeholders and software team",
              Why: "To understand and learn  from potential stakeholders what are their needs, and what they want us to solve. As for the software team, to discuss what they understood so clarify what we collected.",
              How: "Interview: Gathering information and experience from the stakeholders and software team. We first meet with the stakeholders and then with the software team. We used questions from the card sorting technique. ",
              results: [
                {
                  context:
                    "We sorted the question on what is most important and what is less in the following order:",
                  list: [
                    "Who is the target audience? What information do you already have collected about them?",
                    "What kind of tool is expected of us? What do we need to deliver at the end of the semester?",
                    "Could we have access to the digital prototype? And could you show us around it?",
                    "Could you explain the project to us?",
                    "In what way will we stay in touch? Would you prefer a weekly meeting or maybe a sprint presentation?",
                    "What are the main objectives you aim to achieve with this project?",
                    "What specific expectations do you have regarding the deliverables of this project?",
                    "Are there specific deadlines or time-bound requirements that need to be considered?",
                    "What are the key criteria that the end-result must meet to be considered successful?",
                    "Which measurable Key Performance Indicators (KPIs) are relevant to the success of this project?",
                    "Who are the other key stakeholders that we should involve or keep informed?",
                    "How would you like to be kept informed about the progress of the project, and what reporting or communication methods do you prefer?",
                    "Do you have any kind of documentation or anything that we can use as assistance?",
                  ],
                },
              ],
              SoWhat:
                "We were able to understand the assignment, the problem, what is needed from us and successfuley planed a meeting with one of the users, the chef editor of Bn de Stem Tom.",
            },
            {
              title: "1.2.3 Interview Chef Editor of Bn de Stem",
              Why: "To understand and learn  from potential user what are his needs, faced challenges and collect more information. ",
              How: "Expert Interview: Gathering information about the user opinions, behaviours, experiences and challenges of creating articles. We invited the chef editor of BN de Stem Tom, from the the local newspaper of Gilze and Rijen. we used questions from the card sorting technique.",
              results: [
                {
                  context: "The asked questions were:                      ",
                  list: [
                    "Could you please explain your daily job and the steps you take for each project? Process wise",
                    "What are the AI tools that you are currently using? And what about the data visualization? Knowledge wise",
                    "What specific requirements do you have for visualizing data in your journalistic storytelling? Requirements wise",
                    "Who is going to use the product?",
                    "Do you want the tool to be connected to the “Gilze-Rijen” website? Or will it be used for other websites? Design-wise",
                    "How do you visualize the tool to look like? Design-wise",
                    "What kind of stories would you like to create within the tool? Knowledge wise",
                    "What criteria do you consider when determining the newsworthiness of an event for your articles? Knowledge wise",
                  ],
                  image: imageGroup.platform,
                },
              ],
              SoWhat:
                "We understood that he is not the direct user, but he is the boss of the user. But we are able to collect information of what is it like to work as a journalist and was able to see the platform they work on. We concluded that most journalist work on their laptops, and they are usually working on one area as depending on their role. ",
              filelink: LinkDoc.MCET,
            },
          ],
        },
        {
          title: "1.3 Requirements",
          contents: [
            {
              title: "1.3.1 User requirements",
              Why: "To ensure we meet all demand of the project, each of us created a list of requirements. ",
              How: "Requirements list: From the interview of stakeholders, the software team and the interview with the chef editor I was able  to determine the requirements based in few categories. The list had different requirements, mostly based on the functionality and some were about the design.               ",
              results: [
                {
                  context: "The categorize of the requirements were the below:",
                  list: [
                    "User Interface and Experience",
                    "Platform Functionality",
                    "Content Creation and Editing",
                    "Integration and Data Management",
                    "Multimedia and Content Creation Tools",
                    "Data Management and Security",
                  ],
                },
                {
                  context:
                    "Additionally, I did a research to identify the different roles of journalism and found the following roles:",
                  list: [
                    "Journalists",
                    "Editors",
                    "Data analysts",
                    "Content creators",
                    "Researchers",
                    "Accessibility users",
                  ],
                },
                {
                  context:
                    "Here are some potential user types along with their specific roles and requirements:",
                },
                {
                  context: "Journalists",
                  list: [
                    "Access to user-centric interface for seamless navigation.",
                    "Collaborative editing features for joint content creation.",
                    "Document management tools for efficient organization of articles.",
                    "Speech-to-text functionality for converting interviews into text.",
                  ],
                },
                {
                  context: "Editors",
                  list: [
                    "Unified dashboard for centralized access to AI tools.",
                    "Version control features for tracking changes and revisions.",
                    "Cross-platform compatibility for flexibility in device usage.",
                    "Automated content distribution strategies for maximizing reach.",
                  ],
                },
                {
                  context: "Data Analysts",
                  list: [
                    "Tool integration for seamless data analysis.",
                    "Advanced search functionality for researching diverse topics.",
                    "Predictive analytics for identifying trending topics.",
                    "Automated data factoring for analyzing large datasets.",
                  ],
                },
                {
                  context: "Content Creators",
                  list: [
                    "Interactive storytelling tools for engaging multimedia content.",
                    "Virtual reality storytelling tools for immersive experiences.",
                    "Live streaming integration for real-time news coverage.",
                    "Collaborative audio and video editing features.",
                  ],
                },
                {
                  context: "Researchers",
                  list: [
                    "Integration with news sources for real-time news feeds.",
                    "Advanced search capabilities for in-depth research.",
                    "Automated news curation for personalized content feeds.",
                  ],
                },
                {
                  context: "Accessibility Users",
                  list: [
                    "User-centric interface designed with accessibility standards.",
                    "Screen reader compatibility for navigation.",
                  ],
                },
              ],
              SoWhat: "",
              filelink: LinkDoc.UR,
            },
            {
              title: "1.3.2 User stories based on requirements",
              Why: "To develop a user follow, to reflect on the concept, then to create design ideas.",
              How: "Scenario: Created a narrative based on the requirements that i based on the roles of the journalists. ",
              results: [
                {
                  context:
                    "From the previous research, the roles are Journalists, Editors, Data Analysts, Researchers, and Accessibility Users. Here I will list one scenario of each role, however, there is a full document about that, having around 4 to 5 user stories food each role. ",
                },
                {
                  context: "Journalists",
                  list: {
                    "Fact-Checking and Validation":
                      "As a journalist, I want to have access to tools that can quickly check the facts in my articles, so I can be sure my sources are trustworthy and my stories are reliable.",
                  },
                },
                {
                  context: "Editors",
                  list: {
                    "Resource Management":
                      "As an editor, I want a library of templates and reference materials to efficiently manage our resources and maintain quality in our news articles.",
                  },
                },
                {
                  context: "Data Analysts",
                  list: {
                    "Predictive Analytics":
                      "As a data analyst, I want tools to predict trends and topics, helping journalists plan their content and coverage.",
                  },
                },
                {
                  context: "Content Creators",
                  list: {
                    "Live Coverage":
                      "As a journalist covering live events, I want to integrate live streaming to provide real-time news coverage.",
                  },
                },
                {
                  context: "Researchers",
                  list: {
                    "Comprehensive Research Tools":
                      "As a researcher, I want access to a vast database of news sources and advanced search to gather diverse perspectives for in-depth analysis.",
                  },
                },
                {
                  context: "Accessibility Users",
                  list: {
                    "Screen Reader Compatibility":
                      "As a visually impaired journalist, I want the platform to work with screen readers so I can read articles and contribute effectively.",
                  },
                },
              ],
              SoWhat:
                "As a conclusion, I was able to present a load of user stories based on the type of the journalist. This helped a lot on the creation of the Moscow table.",
              filelink: LinkDoc.UR,
            },
            {
              title: "1.3.3 Moscow table",
              Why: "To define and weigh the requirements, considering the priorities based on stakeholders and users. ",
              How: "Moscow table: After gathering requirements we set together as a group and shared the requirements we collected individually, then listed what we had in common and added what was not, we also decided what is a won't. Therefore, decided what is a must, a should, a could, a won't on this project.              ",
              results: [
                {
                  image: imageGroup.MosCow,
                },
              ],
              SoWhat:
                "As a conclusion, we created the prioritization and concluded the requirements. Finally, we diced that the Accessibility Users requirements are out of scope of this project. ",
            },
          ],
        },
        {
          title: "1.4 End of Sprint one",
          contents: [
            {
              title: "1.4.1 Sketch",
              Why: "To communicate the idea of the possible look of the platform.",
              How: "Sketching: Each team member drew a sketch to communicate his idea of the possible look of the platform. We collected a lot of valuable ideas with this.",
              results: [
                {
                  image: imageGroup.sketch1,
                },
              ],
              SoWhat:
                "Sharing the design ideas, help us on finding different possible ways of presenting different functions like the live video. Or helped in understanding what pages we need like the archive page, workspace, main and help. We were able to shape some deign choices from here.",
            },
            {
              title: "1.4.2 Wireframes",
              Why: "To communicate the ideas to the stakeholders in a better way.",
              How: "Wireframes: As a group, we diced who create what page. However, I had a different perspective, so I asked them to create a different wireframe as another version. ",
              results: [
                {
                  contents: "Uploading the data",
                  image: imageGroup.wfNewProject,
                },
                {
                  contents: "New project (A. Selecting the data)",
                  image: imageGroup.wfSelectData,
                },
                {
                  contents: "New project (name and theme)",
                  image: imageGroup.wfWrokspace,
                },
                {
                  contents: "Workspace ",
                  image: imageGroup.wfWEdit,
                },
              ],
              SoWhat:
                "Sharing the wireframe and discussing the new design, I was told it is a bit complicated, so we cancelled this design.",
            },
            {
              title: "1.4.3 Co-reflection",
              Why: "We involved stakeholders early in the design process to get a better direction of what they want the platform to look like.",
              How: "Co-reflection: We set up a meeting with the 2 stakeholders to discuss the design process and ask them for their opinion. This was also our sprint delivery",
              results: [
                {
                  context:
                    "We showed the below wireframe on the sprint delivery:",
                  image: imageGroup.wcoReflection,
                },
              ],
              SoWhat:
                "Overall, they mostly liked the designed functions on the live video. However, they were concerned about the user flow, as it wasn't clear from the provided wireframes we showed. ",
            },
          ],
        },
      ],
    },
  ],
};

export const sprintTwo = {
  section: [
    {
      title: "Sprint two",
      contents: [
        {
          title: "1.1 Creating Poster",
          Why: "To understand how the user work, the journalist specifically working on the Gilze & Rijen.",
          How: "Interview: We invited Fabian for an online meeting. Asking him few questions about his journalist role in the municipality and more.      ",
          results: [
            {
              context:
                "We interviewed a journalist who goes to a municipality meeting in Gilze en Rijen. The asked questions were:",
              list: [
                "What kind of topics are usually discussed each week at the meeting? Are they different?",
                "Who goes to these meetings? What type of Journalists work in these meetings?",
                "How do you include multimedia elements in your stories?",
                "How do you prioritize the tasks for creating a story from the meeting?",
                "What challenges do journalists face in their current workflow?",
                "What kind of AI tools do you use? And how do you choose them?",
                "Do you fact-check the meeting discussions? How do you fact-check them?",
                "What steps do you take to create an article?",
                "How do you structure your articles?",
                "Do you need the trending news while creating the story? (if yes) Where in the progress?",
                "What device do you use during the meetings? (tablet, mobile, desktop...)",
              ],
            },
          ],
          SoWhat:
            "The interview helped in understanding Fabian challenge and workflow. He mentioned that he usually don't use AI tools, but he was interested to see the app, that his challenges are that sometimes the meetings have around 5 newsworthy articles and that it's hard for him to collect or write the articles on one day. ",
        },
        {
          title: "2.2 Persona",
          Why: "To represent the user in a better way. ",
          How: "Persona: Based on research and insights from interviews, and research on LinkedIn, I was able to define a persona. Each team member created a different persona.            ",
          results: [
            {
              context:
                "I looked for journalists working at BN de Stem on LinkedIn. Then was able to create the below persona.Based on the target group, the person shows that the age is ranging from around 25 to 50.",
              image: imageGroup.prsona,
            },
          ],
          SoWhat:
            "The persona represent the target group, it helps in defining the needs and behaviour.",
        },
        {
          title: "2.3 Mock-up",
          Why: "To visualize the platform and show it to the stakeholders, and to enhance the design.",
          How: "Mock-up: As a group, we created a new version of how should the platform look. My task was to create the workspace. Which was influenced from the wireframe I created. ",
          results: [
            {
              image: imageGroup.wfgreen,
            },
          ],
          SoWhat:
            "At the end of this sprint, we showed the mock-ups to the stakeholders. The feedback was that we should test functionalities with the journalist and see which of them are useful for them. Another feedback was that we should also consider the journalist editing platform design. That the user would not want to edit an article in two different apps. Over all, we should focus on creating the user flow.",
        },
      ],
    },
  ],
};

export const sprintThree = {
  section: [
    {
      title: "Sprint three",
      contents: [
        {
          title: "3.1 Sketching",
          Why: "To communicate the idea of the possible look of the platform. This is because we were missing the flow, and few other things.",
          How: "Sketching: As a group, we created a new version of how should the platform look.",
          results: [
            {
              image: imageGroup.sketch2,
            },
          ],
          SoWhat:
            "The helped us in enhancing the flow of the website and better understand what is missing from us. After which, Kim drew the user flow based on that.",
        },
        {
          title: "3.2 Mock-up",
          Why: "To visualize the platform and show it to the stakeholders, and to enhance the design.",
          How: "Mock-up: As a group, we created a new version of how should the platform look. My task was to create the help page.",
          results: [
            {
              image: imageGroup.mokupone,
            },
          ],
          SoWhat:
            "The help page shows some information that can help the user to use the platform or edit the setting and more. A FAQ section with some created question I found on some competitors websites. And a possible integration of chatbot to answer the user questions.",
        },
        {
          title: "3.3 Usability testing",
          Why: "To detect problems of the design and gather insights of what the user think of it.",
          How: "Usability testing: we tested Fabian and tried to reach to other journalists to test the design. Fabian mentioned he will ask his colleagues to test it as well. The testing was done online via Teams platform. There were some scenarios the tester had to go through followed by few questions.",
          results: [
            {
              context: "Scenarios",
              list: [
                "Scenario1: Workspace navigation.",
                "Scenario2: Uploading the link and utilizing AI tools.",
                "Scenario3: Exploring results and saving functionality.",
                "Scenario4: Sharing results on preferred social media platforms.",
              ],
            },
            {
              context: "ScenariosResults",
              list: [
                "Scenario1: Workspace access - successful navigation.",
                "Scenario2: AI Tools - slight navigation issues and clarification needed on tool functionalities.",
                "Scenario3: AI Tool Exploration - uncertainty about functionalities and integration with workflow.",
                "Scenario4: Social Media Sharing - feature not relevant to Fabian's responsibilities.",
              ],
            },
            {
              context: "Qouestions",
              list: [
                "Do you think this application can help you create articles?",
                "How easy was it to navigate to the workspace?",
                "What was something you found challenging within the platform?",
                "How easy did you find it using the AI tools?",
                "Would you use the platform again based on your experience?",
                "For what purpose would you use this platform?",
                "On what basis do you normally publish your articles?",
                "How would you like to save the results if you want to use them again? As a PDF or in the platform itself?",
                "What device would you like to use that platform on?",
                "Which AI tools would help you in your work?",
                "What do you think of the platform you normally use? Is it easy to work with it?",
                "Do you have any comments?",
              ],
            },
            {
              context: "Recommendations",
              list: [
                "CMSIntegration: Prioritize integrating the application's functionalities within the company's CMS for seamless workflow integration.",
                "WritingAssistanceIntegration: Explore ways to embed writing assistance within the platform to aid journalists in their content creation process.",
                "AIToolDevelopment: Focus on refining and promoting the summary generation tool, as it received the highest appreciation from Fabian.",
              ],
            },
          ],
          SoWhat:
            "The usability test highlighted the need to improve navigation and key features like meeting summaries for better functionality and user experience. It also suggested customizable social media integration. Another tester, Zahra, echoed these findings, emphasizing the importance of clearer access to functionalities, especially viewing drafts. Implementing these suggestions could significantly improve the platform's user experience.",
        },
        {
          title: "3.4 Prototype",
          Why: "To visualize the platform and show it to the stakeholders, and to enhance the design.",
          How: "Prototype: As a group, we created a new version of how should the platform look. My task was to create the workspace. I got new inspirations from finding different compacters.",
          results: [
            {
              context:
                "After the two usability testing, showing the design to the stakeholder, Berry. We concluded we need to do some design adjustment. Therefore, we split the pages again, my task this time was to create the workspace with the used AI tools. We did extra research about the AI tools to figure out the design choices. We were inspired by tools such as notion AI.",
            },
            {
              context:
                "This design, itself, had many iterations, as the image below shows:",
              image: imageGroup.iterations,
            },
            {
              context: "However, the final look was the below image:",
              image: imageGroup.prototype,
            },
          ],
          SoWhat:
            "To conclude the design, we decided to have a dashboard with different AI tools that the user can select what he wants, remove it, or change its position to up or down based on his preference of positioning. And that when he finishes, he can either save it in the platform or share it.",
        },
        {
          title: "3.5 Finishing up sprint 3 (Presentation)",
          Why: "To validate the design and show our progress over the semester. And to overcome internet problem I created a video.",
          How: "Video: I created a video to explain the prototype we created as a group.",
          results: [
            {
              context: "",
              video: videoPrototypeLast,
            },
          ],
          SoWhat:
            "The feedback we received that they were happy about the progress we showed, that they see the user flow now. However, there were some small changes we had to fix, like to remove the sharing to social accounts and also to not log in with them.",
        },
      ],
    },
  ],
};

export const answerSubQ = {
  name: "Answers",
  section: [
    {
      title:
        "How do the Gilze & Rijen journalists work and what tools do they need? ",
      context:
        "The journalists in Gilze & Rijen, start their day with a meeting to discuss potential stories, based on what they have observed or heard in the news and neighbourhood. This is followed by team discussions and assignments. The journalists who work directly with the municipality typically join the weekly meeting held by the municipality. He sometimes writes no article and sometimes 5 articles and since they, currently, manually write down important points from these meetings, it was decided that it is time-consuming and inefficient.The goal of the project is to assist these journalists by finding and efficiently using digital tools designed for them. Therefore, the focus is on designing the tools that help less tech-savvy journalists use software tools created by us in the correct sequence. This includes developing a high fidelity prototype for visualizing various types of data, helping journalists to create news stories with a focus on the live video using AI. As well, tools that save time and enhance the productivity of the journalists.",
    },
    {
      title:
        "How to ensure a correct sequence of tool usage for the Gilze & Rijen journalists?",
      context:
        "By understanding,  the different types of journalists, their familiarity with technology, and the tools they currently use from the interviews and the testing, it is possible to answer this question. Therefore, the platform should guide them through an intuitive user interface. This is done by including a step by step workflow that helps in prompting the data from the live video, selecting the topic and the title. Then moving into using the AI tools. As we included an onboarding that helps to explain how to use the platform.",
    },
    {
      title:
        "How can we design a user-friendly platform that visualizes the extracted data from, for example, the city hall meetings?",
      context:
        "The platform we designed aims to simplify the process of gathering and presenting information, making it more efficient and less time-consuming for journalists. Therefore, going through the whole semester process allowed us to ensure that the platform is user-friendly.",
    },
    {
      title:
        "How can we guarantee that our platform is useful and accessible for journalists?",
      context:
        "To guarantee that the platform is useful and accessible, we designed it with input from journalists, ensuring it meets their specific needs. We conducted a couple of  usability testing and gathered feedback collection. Therefore, the platform should be compatible with what the journalist need as we offered a clean interface, and included features that cater to different aspects of journalism, like summarizing, paraphrasing, graph making, editing, and publishing.",
    },
    {
      title: "Conclusion",
      context:
        "To answer the main question How can we design a user-friendly platform, for the Gilze en Rijen journalists, which ensures the correct sequence of usage and prompts the appropriate tool selection? To design that platform, the following steps should be considered:First to focus on creating an intuitive interface by conducting  research, user interviews, and persona creation to understand journalists' needs. To offer AI tool assistance for activities such as generating summaries. Then, to design the prototype and perform user testing to make enhancements based on feedback. Then to implement an onboarding process to ensure the users understand how to use the tool. Finally, to constantly update the design in response to user feedback.",
    },
  ],
};
