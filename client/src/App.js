import NavBar from "./components/NavBarComponents/NavBar";
import NLink from "./components/NavBarComponents/NavLink";
import Home from "./components/HomeComponents/HomeComponent";
import About from "./components/AboutComponents/AboutComponent";
import Comment from "./components/CommentComponents/CommentGrid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import QuizContainer from "./containers/QuizContainer";
import OrgansContainer from "./containers/OrganContainer";
import CommentContainer from "./containers/CommentContainer";
import organRepo from "./repositories/organ_repository";
import userRepo from "./repositories/user_repository";
import commentRepo from "./repositories/comment_repository";

import "./App.css";

function App() {
  const organFacts = [
    {
      id: "1",
      organName: "Brain",
      funFact:
        "The brain stem connects the brain to the spinal cord. It is also responsible for all of the things you don't normally think about (like your heart beating, breathing, and digesting food)",
    },
    {
      id: "2",
      organName: "Brain",
      funFact:
        "Most nerves in your body connect to the spinal cord, but there are 12 nerves that come from the brain itself. These control some of the most important functions in your body, including vision, smell, facial movement, and heart rate.",
    },
    {
      id: "3",
      organName: "Brain",
      funFact:
        "The brain is split into two halves; each half controls the OPPOSITE side of the body.",
    },
    {
      id: "4",
      organName: "Liver",
      funFact:
        "Sometimes people think of cholesterol as a bad thing, but cholesterol is important for building cells, and making certain chemicals called hormones. Hormones are like messengers in your body, and without them the different parts of your body wouldn't be able to talk to each other very well.",
    },
    {
      id: "5",
      organName: "Liver",
      funFact:
        "Bilirubin, a chemical that our bodies make and our liver makes safe, is also filtered by our kidneys, which is what gives our urine the yellow color.",
    },
    {
      id: "6",
      organName: "Liver",
      funFact:
        "The liver stores excess sugars that you eat, or that are in your blood, in the form of a chemical called glycogen. Glycogen absorbs nearly 6 times its weight in water, so your liver is also important for water storage. When your body needs more sugars (like between meals), your liver breaks down the glycogen into glucose, which the rest of your body uses for fuel. The liver does this for the rest of your body, as the liver itself can't use glucose for energy.",
    },
    {
      id: "7",
      organName: "Heart",
      funFact:
        "There are four special valves in the human heart. These valves only allow blood to go one way, so when the heart squeezes the blood out, it goes in the right direction.",
    },
    {
      id: "8",
      organName: "Heart",
      funFact:
        "Your heart beats 100,000 times a day, 36,500,000 times a year. That's over 1 billion heart beats if you live past the age of 30! Over the course of the expected lifetime, your heart will beat about 2.5 billion times!",
    },
    {
      id: "9",
      organName: "Heart",
      funFact:
        "The right side of your heart pumps blood up into your lungs and into the left side of the heart; the left side of the heart pumps blood out to your entire body.",
    },
  ];

  const seeder = () => {
    let listOfOrgans = [
      {
        name: "Brain",
        id: 1, //will be provided by database
        info: "The brain controls complex behaviour. It is made of billions of interconnected neurones and has different regions that carry out different functions. There are four main areas in the brain: 1. The cerebrum (the outer layer is called the cerebral cortex), which is split into two hemispheres and is highly folded. It controls intelligence, personality, conscious thought and high-level functions, such as language and verbal memory. 2. The cerebellum, which controls balance, co-ordination of movement and muscular activity. 3. The medulla, which controls unconscious activities such as heart rate and breathing rate, 4. The hypothalamus, which is the regulating centre for temperature and water balance within the body.",

        quiz: [
          {
            id: 1,
            question: "How many areas does the brain have?",
            answer: "4",
          },
          {
            id: 2,
            question:
              "Which area controls intelligence, personality, conscious thought and high-level functions?",
            answer: "cerebrum",
          },
          {
            id: 3,
            question: "Which area controls body co-ordination?",
            answer: "cerebellum",
          },
          {
            id: 4,
            question: "Which area controls unconscious activities?",
            answer: "medulla",
          },
          {
            id: 5,
            question: "What does the hypothalamus regulate within the body?",
            answer: "temperature and water balance",
          },
        ],
      },

      {
        name: "Heart",
        id: 2,
        info: "The heart is a muscular organ. Its function is to pump blood. The right side pumps blood through the pulmonary circuit, while the left side pumps blood through the systemic circuit. A septum separates the right and left sides. The left side has thicker walls because it needs to put the blood under higher pressure than the right side. In general, blood flows into the heart from a vein, goes into an atrium, then a ventricle, and out through an artery. The heart contains valves to prevent the blood flowing backwards: the right side has a tricuspid valve (a valve with three flaps), the left side has a bicuspid valve (a valve with two flaps). Both sides have semi-lunar valves (at the entrances to the pulmonary artery and aorta).",

        //will be provided by database
        quiz: [
          {
            id: 6,
            question:
              "Which circuit does the right side of the heart pump blood through?",
            answer: "Pulmonary circuit",
          },
          {
            id: 7,
            question:
              "Which circuit does the left side of the heart pump blood through?",
            answer: "systemic circuit",
          },
          {
            id: 8,
            question: "Which valve is on the right hand side?",
            answer: "tricuspid",
          },
          {
            id: 9,
            question: "How many flaps does this valve have?",
            answer: "three",
          },
          {
            id: 10,
            question: "Which valve do both sides have in common?",
            answer: "semi lunar valve",
          },
        ],
      },
      {
        name: "Kidneys",
        id: 3, //will be provided by database
        info: "The kidney is a small organ, well, it is actually a pair. They are small, bean-shaped organs that are tucked into the sides of our abdomen.The kidney is one of the most important organs within our bodies, it is thought to be as important as the heart. The human body needs at least one kidney to survive. They are about 13 cm long and sit on each side of the lower back. One of the main jobs of the kidneys is to filter out the waste in our blood. This waste is usually nutrients that our body already has enough of. This waste then travels to the bladder to be removed.",

        quiz: [
          {
            id: 11,
            question: "How many kidneys do you have?",
            answer: "Two",
          },
          {
            id: 12,
            question: "What shape are the kidneys?",
            answer: "Bean",
          },
          {
            id: 13,
            question: "True or false: The kidneys are around 13cm long",
            answer: "True",
          },
        ],
      },
      {
        name: "Stomach",
        id: 4, //will be provided by database
        info: "The stomach is a large processor for food and liquid in the body. Within the stomach, food is broken down into smaller pieces that are easier for the body to fully digest.In terms of appearance, the stomach is ‘J’ shaped, and is located near the top of the abdomen. Once a person swallows their food, it makes its way down to the stomach. This journey involves moving down the throat and into the oesophagus. Once it has reached the end of the oesophagus, the food enters the stomach.",

        quiz: [
          {
            id: 16,
            question: "How many stomachs do you have?",
            answer: "One",
          },
          {
            id: 17,
            question: "What shape is the stomach?",
            answer: "J",
          },
          {
            id: 18,
            question: "Does the stomach contain acid?",
            answer: "Yes",
          },
        ],
      },
      {
        name: "Intestines",
        id: 5, //will be provided by database
        info: "The small intestine is a narrow, coiled-up tube (around six to seven metres long) which connects to the stomach and absorbs nutrients from the food after it leaves the stomach.Water and food that cannot be digested are passed from the small intestine into the large intestine, where it is turned into waste. The large intestine is around 1.5 metres long.",

        quiz: [
          {
            id: 21,
            question: "Is the small intestine over 10 metres long?",
            answer: "No",
          },
          {
            id: 22,
            question:
              "True or false: The Large intestine is around 1.5 meters long?",
            answer: "True",
          },
          {
            id: 23,
            question: "What does the intestines absorb?",
            answer: "Nutrients",
          },
        ],
      },
      {
        name: "Gallbladder",
        id: 6, //will be provided by database
        info: "The gall bladder is a small pouch that sits just under your liver. This is where the bile that the liver produces is stored.",

        quiz: [
          {
            id: 26,
            question: "Does the Gallbladder help in digestion?",
            answer: "Yes",
          },
          {
            id: 27,
            question: "Does the Gallbladder sit in your head?",
            answer: "No",
          },
          {
            id: 28,
            question: "Can you live without your Gallbladder?",
            answer: "Yes",
          },
        ],
      },
      {
        name: "Liver",
        id: 7,
        info: "The liver does not secrete any enzymes, but it plays an important role in digestion, and then processing food molecules that have been absorbed.The liver produces bile. Bile emulsifies lipids, breaking them up physically into tiny droplets. Tiny droplets have a much larger surface area, over which lipases can work, than larger pieces, or drops of lipid. Contains sodium hydrogencarbonate, which is an alkali. It neutralises stomach acid and produces the optimum pH for pancreatic enzymes. Is produced in the liver, but stored and concentrated in the gall bladder.",

        //will be provided by database
        quiz: [
          {
            id: 31,
            question: "Does the liver secrete any enzymes?",
            answer: "no",
          },
          { id: 32, question: "What does the liver produce?", answer: "bile" },
          {
            id: 33,
            question:
              "What is the advantage of breaking lipids into tiny droplets?",
            answer: "larger surface area",
          },
          {
            id: 34,
            question: "Is sodium hydrogencardonate an acid or alkali?",
            answer: "alkali",
          },
          {
            id: 35,
            question: "What does sodium hydrogencardonate neutralise? ",
            answer: "stomach acid",
          },
        ],
      },
      {
        name: "Lungs",
        id: 8, //will be provided by database
        info: "The lungs make use of the large space behind our breastplate and ribcage. They expand and contract as they fill with air and as it is breathed out again. The lungs allow you to inhale and exhale. Breathing in allows fresh air and oxygen to enter your blood and breathing out removes stale air, made up of carbon dioxide, from your blood.",

        quiz: [
          {
            id: 36,
            question: "How many lungs do you have?",
            answer: "Two",
          },
          {
            id: 37,
            question: "Breathing in air takes what into your body?",
            answer: "Oxygen",
          },
          {
            id: 38,
            question: "And breathing out expels what?",
            answer: "Carbon dioxide",
          },
          {
            id: 39,
            question: "Is smoking cigarettes good for the lungs?",
            answer: "No",
          },
        ],
      },
    ];
    listOfOrgans.map(organRepo.addOrganToDb);
  };

  const clearDb = () => {
    organs.map((organ) => organRepo.deleteOrganByID(organ._id));
  };

  const navPages = [
    { pageName: "Home", pageLink: "/" },
    { pageName: "Organs", pageLink: "/organs" },
    { pageName: "Quizzes", pageLink: "/quizzes" },
    { pageName: "Comment", pageLink: "/comment" },
    { pageName: "About", pageLink: "/about" },
  ];

  const showUser = (user) => {
    setSelectedUser(user);
  };

  const showOrgan = function (organID) {
    const organ = organs.filter((organ) => organ.id === organID);
    setOrganToShow(organ);
  };

  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});

  const [organs, setOrgans] = useState([]);
  const [organToShow, setOrganToShow] = useState("");

  const addNewUser = (userObject) => {
    userRepo.addUserToDb(userObject).then(setUsers);
  };

  const editUser = (id, patchObject) => {
    userRepo.editUserById(id, patchObject).then((users) => {
      setUsers(users);
      setSelectedUser({ ...selectedUser, ...patchObject });
    });
  };

  const addCommentToCommentDb = (commentObject) => {
    commentRepo.addCommentToDb(commentObject);
  };

  const deleteCommentFromUserList = (comment, user) => {
    if (JSON.stringify(user) === JSON.stringify(selectedUser)) {
      const commentIndex = user.guestComments.indexOf(comment);
      user.guestComments.splice(commentIndex, 1);
      editUser(user._id, { guestComments: user.guestComments });
    }
  };

  const findUserByID = function (userID) {
    const userByID = users.filter((user) => user._id == userID);
    return userByID;
  };

  useEffect(() => {
    organRepo.getOrganList().then(setOrgans);
    userRepo.getAllUsers().then(setUsers);
  }, []);

  return (
    <div className="App" id="outer-container">
      {/* <button onClick={seeder}>Seed db</button>
      <button onClick={clearDb}>Clear Db</button> */}
      <Router>
        <NavBar
          navPages={navPages}
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                users={users}
                onUserSelected={showUser}
                setSelectedUser={setSelectedUser}
                addNewUser={addNewUser}
                selectedUser={selectedUser}
              />
            }
          />
          <Route
            path="/organs"
            element={
              <OrgansContainer
                organs={organs}
                organToShow={organToShow}
                showOrgan={showOrgan}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/quizzes"
            element={
              <QuizContainer
                organs={organs}
                organToShow={organToShow}
                showOrgan={showOrgan}
                users={users}
                setUsers={setUsers}
                onUserSelected={showUser}
                selectedUser={selectedUser}
                setSelectedUser={setSelectedUser}
                findUserByID={findUserByID}
                editUser={editUser}
              />
            }
          />

          <Route
            path="/comment"
            element={
              <CommentContainer
                users={users}
                selectedUser={selectedUser}
                editUser={editUser}
                addNewUser={addNewUser}
                addCommentToCommentDb={addCommentToCommentDb}
                deleteCommentFromUserList={deleteCommentFromUserList}
              />
            }
          />

          <Route path="/about" element={<About />} />

          {/* <Route element={<Feedback />} path='/Feedback' /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
