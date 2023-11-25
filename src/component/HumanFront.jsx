import "./HumanFrontStyle.css";
import { useState } from "react";

const HumanFront = () => {
  const musclePart = [
    "biceps",
    "triceps",
    "shoulder",
    "chest",
    "forearms",
    "externalAbs",
    "shin",
    "quadriceps",
    "abductors",
    "tfl",
    "trapezius",
    "lats",
    "lowerBack",
    "glutes",
    "hamstring",
    "calves",
    "abs",
  ];

  const exercises = [
    {
      id: 1,
      label: "Ez bar curl",
      mainMuscle: "biceps",
      otherMuscles: ["forearm"],
      video: "https://www.youtube.com/embed/-gSM-kqNlUw?si=xlCSF-ftBj-fyfUw",
    },
    {
      id: 2,
      label: "Bench press",
      mainMuscle: "chest",
      otherMuscles: ["triceps", "shoulder"],
      video: "https://www.youtube.com/embed/4Y2ZdHCOXok?si=gUmTOo2wUa3ETSCC",
    },
    {
      id: 3,
      label: "Incline bench press",
      mainMuscle: "chest",
      otherMuscles: ["triceps", "shoulder", "biceps"],
      video: "https://www.youtube.com/embed/jPLdzuHckI8?si=BjD-Re2upuNKuvhd",
    },
    {
      id: 4,
      label: "Barbell overhead press",
      mainMuscle: "shoulder",
      otherMuscles: ["triceps"],
      video: "https://www.youtube.com/embed/_RlRDWO2jfg?si=nzQl_Ml0ggClpwAW",
    },
    {
      id: 5,
      label: "Push-Up",
      mainMuscle: "chest",
      otherMuscles: ["triceps", "shoulder"],
      video: "https://www.youtube.com/embed/MO10KOoQx5E?si=G6LBcTwJoseQyVZy",
    },
    {
      id: 6,
      label: "Dumbbell Chest Fly",
      mainMuscle: "chest",
      otherMuscles: ["biceps", "shoulder"],
      video: "https://www.youtube.com/embed/Nhvz9EzdJ4U?si=WszerO5IbxRvzkhO",
    },
    {
      id: 7,
      label: "incline dumbbell curl",
      mainMuscle: "biceps",
      otherMuscles: ["forearm"],
      video: "https://www.youtube.com/embed/aTYlqC_JacQ?si=a1GL0JGcZW3YQCym",
    },
    {
      id: 8,
      label: "Dumbbell forearm hammer curls",
      mainMuscle: "biceps",
      otherMuscles: ["forearm"],
      video: "https://www.youtube.com/embed/CFBZ4jN1CMI?si=k_BwB6f-f4Ca_rG7",
    },
    {
      id: 9,
      label: "Wrist Roller",
      mainMuscle: "forearms",
      otherMuscles: ["-"],
      video: "https://www.youtube.com/embed/KCqs-5eWeRU?si=N2KPZL4vJavn-q5M",
    },
    {
      id: 10,
      label: "Shrug",
      mainMuscle: "trapezius",
      otherMuscles: ["-"],
      video: "https://www.youtube.com/embed/_t3lrPI6Ns4?si=sx80MjnZ5VuFMJKR",
    },
    {
      id: 11,
      label: "Upright row",
      mainMuscle: "trapezius",
      otherMuscles: ["shoulder", "biceps", "triceps"],
      video: "https://www.youtube.com/embed/Rd5AsxOGqss?si=KsqpHxCaoXqIiFL2",
    },
    {
      id: 12,
      label: "Lateral Raise",
      mainMuscle: "shoulder",
      otherMuscles: ["-"],
      video: "https://www.youtube.com/embed/Z5FA9aq3L6A?si=9oIk0chZwrCNKfoX",
    },
    {
      id: 13,
      label: "Leg Raise",
      mainMuscle: "abs",
      otherMuscles: ["quads"],
      video: "https://www.youtube.com/embed/Wp4BlxcFTkE?si=IWg5RGr7KH4E7CSB",
    },
    {
      id: 14,
      label: "Medicine Ball Russian Twist",
      mainMuscle: "externalAbs",
      otherMuscles: ["abs"],
      video: "https://www.youtube.com/embed/0V-8kqnPPeM?si=aaq4nwLUTM2puhTH",
    },
    {
      id: 15,
      label: "Slow Hanging Leg Raises",
      mainMuscle: "abs",
      otherMuscles: ["externalAbs", "quads"],
      video: "https://www.youtube.com/embed/RuIdJSVTKO4?si=wPYYpdY_gzkUrPZE",
    },
    {
      id: 16,
      label: "Dumbbell Side Bend",
      mainMuscle: "externalAbs",
      otherMuscles: ["-"],
      video: "https://www.youtube.com/embed/dL9ZzqtQI5c?si=pSwhaSkZ3jUOQIJt",
    },
    {
      id: 17,
      label: "Cossack Squat with weight",
      mainMuscle: "quadriceps",
      otherMuscles: ["glutes", "lowerback", "hamstring"],
      video: "https://www.youtube.com/embed/XMXmm4TWwpA?si=drG7R-yCylFVi_Kg",
    },
    {
      id: 18,
      label: "Side Lunge (Weight Optional)",
      mainMuscle: "abductors",
      otherMuscles: ["shoulder", "abs", "biceps", "quads", "glutes"],
      video: "https://www.youtube.com/embed/KXoVm0WXcfE?si=N81zVRzRle8LQFwu",
    },
    {
      id: 18,
      label: "CLAMSHELL WITH BANDS",
      mainMuscle: "tfl",
      otherMuscles: ["glutes", "abs"],
      video: "https://www.youtube.com/embed/m_ZPapmqeNM?si=w1Xi8zdbLc28b3Do",
    },
    {
      id: 19,
      label: "SIDESTEPS WITH BANDS",
      mainMuscle: "tfl",
      otherMuscles: ["glutes", "abs"],
      video: "https://www.youtube.com/embed/tbXhONGNbGQ?si=msQlWt2wr5v6Iiv6",
    },
    {
      id: 20,
      label: "Machine seated hip abduction",
      mainMuscle: "abductors",
      otherMuscles: ["-"],
      video: "https://www.youtube.com/embed/G_8LItOiZ0Q?si=w4B6sJLjUXP8SOcL",
    },
    {
      id: 20,
      label: "Barbell squat ",
      mainMuscle: "quadriceps",
      otherMuscles: ["glutes", "abs", "hamstring", "calf"],
      video: "https://www.youtube.com/embed/bEv6CCg2BC8?si=6bpYthPB2nAf7XAy",
    },
    {
      id: 21,
      label: "Resisted Inversion ",
      mainMuscle: "shin",
      otherMuscles: ["-"],
      video: "https://www.youtube.com/embed/C24Viu-Dp4U?si=dLBxCs7t9YrQoevz",
    },
    {
      id: 22,
      label: "Band Toe Raises",
      mainMuscle: "shin",
      otherMuscles: ["-"],
      video: "https://www.youtube.com/embed/il8mtZpC_p8?si=nNkaP_qWuF09PXlb",
    },
    {
      id: 23,
      label: "Dumbbell Skull Crusher",
      mainMuscle: "triceps",
      otherMuscles: ["-"],
      video: "https://www.youtube.com/embed/jO2Jl9eZpXk?si=CXLt9IHii6UEw_BT",
    },
    {
      id: 24,
      label: "Cable Triceps Pushdown ",
      mainMuscle: "triceps",
      otherMuscles: ["-"],
      video: "https://www.youtube.com/embed/y6EdXBdL75A?si=u3FiisMk0GgoLdWS",
    },
    {
      id: 25,
      label: "Pull-Up",
      mainMuscle: "lats",
      otherMuscles: ["abs", "biceps"],
      video: "https://www.youtube.com/embed/Hdc7Mw6BIEE?si=PyE3COkPF8rqTnyq",
    },
    {
      id: 26,
      label: "Dumbbell pull-over",
      mainMuscle: "lats",
      otherMuscles: ["abs", "chest", "triceps", "shoulder"],
      video: "https://www.youtube.com/embed/jQjWlIwG4sI?si=3ZZPp0Co12eemH4z",
    },
    {
      id: 27,
      label: "Deadlift (conventional)",
      mainMuscle: "lowerBack",
      otherMuscles: ["abs", "traps", "glutes", "hamstring", "forearm"],
      video: "https://www.youtube.com/embed/VL5Ab0T07e4?si=3DJcjOPOIX6GG6pz",
    },
    {
      id: 28,
      label: "Hyperextensions",
      mainMuscle: "lowerBack",
      otherMuscles: ["traps", "glutes", "hamstring"],
      video: "https://www.youtube.com/embed/J46aPqFl0WE?si=xZGc7p7cNygtSKB7",
    },
    {
      id: 29,
      label: "Romanian deadlift",
      mainMuscle: "glutes",
      otherMuscles: ["hamstring", "abs"],
      video: "https://www.youtube.com/embed/_oyxCn2iSjU?si=rElI-g8VsjiIR6Wv",
    },
    {
      id: 30,
      label: "Hip thrust",
      mainMuscle: "glutes",
      otherMuscles: ["quads", "hamstring", "abs"],
      video: "https://www.youtube.com/embed/EF7jXP17DPE?si=epalJEuLU_n7v8jU",
    },
    {
      id: 31,
      label: "Standing leg curls",
      mainMuscle: "hamstring",
      otherMuscles: ["calves"],
      video: "https://www.youtube.com/embed/N6FVnaasdq0?si=sR7QcX-QqKruZI0r",
    },
    {
      id: 32,
      label: "Lying leg curls",
      mainMuscle: "hamstring",
      otherMuscles: ["calves"],
      video: "https://www.youtube.com/embed/SbSNUXPRkc8?si=8Et2pVAQ40APSkNP",
    },
    {
      id: 33,
      label: "Standing machine calf raises",
      mainMuscle: "calves",
      otherMuscles: ["-"],
      video: "https://www.youtube.com/embed/g_E7_q1z2bo?si=kY0d2yzUPCxY3ILK",
    },
    {
      id: 34,
      label: "Barbell calf raises",
      mainMuscle: "calves",
      otherMuscles: ["-"],
      video: "https://www.youtube.com/embed/SpwcssWT0p4?si=sXX68fcjoAeA_jqK",
    },
  ];

  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [otherMuscleColor, setOtherMuscleColor] = useState({
    forearm: "black",
    shoulder: "black",
    triceps: "black",
    biceps: "black",
    quads: "black",
    externalAbs: "black",
    abs: "black",
    lowerback: "black",
    hamstring: "black",
    core: "black",
    calves: "black",
    chest: "black",
    traps: "black",
    shin: "black",
    abductors: "black",
    lats: "black",
    tfl: "black",
    glutes: "black",
  });

  const handleMuscle = (part) => {
    const foundMuscle = musclePart.find((el) => el === part);

    const results = exercises.filter(function (el) {
      return el.mainMuscle === part;
    });

    setSelectedMuscleGroup({
      foundMuscle: foundMuscle,
      exercises: results,
    });

    setIsActive((previsActive) =>
      previsActive === part ? !previsActive : part
    );
    setOtherMuscleColor({
      forearm: "black",
      shoulder: "black",
      triceps: "black",
      biceps: "black",
      quads: "black",
      externalAbs: "black",
      abs: "black",
      lowerback: "black",
      hamstring: "black",
      abs: "black",
      calves: "black",
      chest: "black",
      traps: "black",
      lats: "black",
      shin: "black",
      tfl: "black",
      abductors: "black",
      glutes: "black",
    });
  };

  const toggle = (i, label) => {
    setSelectedItem((prevSelectedItem) => (prevSelectedItem === i ? null : i));
    setOtherMuscleColor({
      forearm: "black",
      shoulder: "black",
      triceps: "black",
      biceps: "black",
      quads: "black",
      externalAbs: "black",
      abs: "black",
      lowerback: "black",
      hamstring: "black",
      abs: "black",
      calves: "black",
      chest: "black",
      traps: "black",
      lats: "black",
      shin: "black",
      tfl: "black",
      abductors: "black",
      glutes: "black",
    });
    const exerciseLabel = exercises.filter((el) => el.label === label);

    const findOtherMuscle = exerciseLabel.find((el) => el.otherMuscles);

    if (findOtherMuscle && findOtherMuscle.otherMuscles) {
      const colorMuscles = findOtherMuscle.otherMuscles;
      colorMuscles.forEach((muscle) => {
        setOtherMuscleColor((prevColors) => ({
          ...prevColors,
          [muscle]: "IndianRed",
        }));
      });
    }
  };

  return (
    <div className="wrapper">
      <div className="container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="450"
          viewBox="0 0 300 710"
          fill="none"
        >
          <path
            d="M150.2 405.3C149.2 417.6 161.3 482.9 165.6 508.4C167.6 520.5 173.3 540.1 171.2 550.6C168.3 565.2 167.5 584 169.1 595C170.1 601.7 173.3 632.4 168.7 643.6C166.3 649.5 162 679.7 162 679.7C150.7 708.2 157.1 706.7 157.1 706.7C160.6 711 166.6 707 166.6 707C171.2 709.9 174.3 706.3 174.3 706.3C178.2 709.5 182.8 705.9 182.8 705.9C187.7 708.4 192.3 703.8 192.3 703.8C195.1 705.2 195.8 703.4 195.8 703.4C204.3 702.9 191.1 675.8 191.1 675.8C187.9 651.5 194.2 638 194.2 638C214.8 576.9 215.8 560.7 207.6 537.7C205.3 531.1 204.7 528.4 205.8 525.5C208.3 518.8 206.5 492.1 209.5 481.4C215.3 460.9 221 408.9 224 384.6C228 351.9 209.8 308.1 209.8 308.1C205.8 290.3 211.7 226.7 211.7 226.7C219.9 239.4 219.6 261.8 219.6 261.8C218.3 285.3 238.6 321.3 238.6 321.3C248.4 336.2 252.1 350.3 252.1 351.3C252.1 355.6 251.2 365.9 251.2 365.9L251.6 374.9C251.8 377.2 253.1 385.1 252.9 388.9C251.4 412.4 255.1 408 255.1 408C258.3 408 261.7 389.1 261.7 389.1C261.7 394 260.5 408.6 263.1 414.1C266.3 420.7 268.6 413 268.6 411.4C269.4 381.4 271.2 389.3 271.2 389.3C273 413.6 275.1 419.1 279 417.2C281.9 415.8 279.3 388 279.3 388C284.3 404.5 288.1 407.1 288.1 407.1C296.4 412.9 291.3 396.9 290.1 393.7C284 376.8 283.8 371 283.8 371C291.4 386.2 297.2 385.6 297.2 385.6C304.7 383.2 290.7 361.7 282.5 351.5C278.3 346.3 272.9 339.2 271.4 335.1C268.9 328 266.9 305.3 266.9 305.3C266.1 278.5 259.5 266.9 259.5 266.9C248.2 248.8 246 215 246 215L245.5 157.9C241.5 119 212.9 118.7 212.9 118.7C183.9 114.4 179.9 105 179.9 105C173.8 96.2 177.3 79.2 177.3 79.2C182.4 75.1 184.4 64.1 184.4 64.1C192.9 57.6 192.4 48.1 188.5 48.2C185.4 48.3 186.1 45.7 186.1 45.7C191 3.2 153.1 1 153.1 1H147.3C147.3 1 109.3 3.2 114.6 45.9C114.6 45.9 115.3 48.5 112.1 48.4C108.2 48.3 107.8 57.8 116.3 64.3C116.3 64.3 118.3 75.3 123.4 79.4C123.4 79.4 126.9 96.3 120.8 105.2C120.8 105.2 116.8 114.6 87.7999 118.9C87.7999 118.9 59.1 119.2 55.2 158.1L54.7 215.2C54.7 215.2 52.6 249 41.2 267.1C41.2 267.1 34.5999 278.7 33.7999 305.5C33.7999 305.5 31.8999 328.2 29.2999 335.3C27.7999 339.4 22.4 346.5 18.2 351.7C9.89995 361.9 -4.00005 383.4 3.39995 385.8C3.39995 385.8 9.19995 386.4 16.7999 371.2C16.7999 371.2 16.6 377 10.5 393.9C9.29995 397 4.19995 413.1 12.5 407.3C12.5 407.3 16.2999 404.7 21.2999 388.2C21.2999 388.2 18.6 416 21.6 417.4C25.5 419.3 27.6 413.8 29.4 389.5C29.4 389.5 31.2 381.6 32 411.6C32 413.1 34.3 420.9 37.5 414.3C40.2 408.8 39 394.2 39 389.3C39 389.3 42.3999 408.2 45.5999 408.2C45.5999 408.2 49.3999 412.6 47.7999 389.1C47.4999 385.3 48.8999 377.4 49.0999 375.1L49.5 366.1C49.5 366.1 48.5999 355.8 48.5999 351.5C48.5999 350.4 52.2999 336.4 62.0999 321.5C62.0999 321.5 82.3999 285.5 81.0999 262C81.0999 262 80.7999 239.6 88.9999 226.9C88.9999 226.9 94.7999 290.5 90.8999 308.3C90.8999 308.3 72.6999 352.1 76.6999 384.8C79.6999 409.1 85.3999 461.1 91.1999 481.6C94.1999 492.2 92.3999 519 94.8999 525.7C95.9999 528.6 95.3999 531.3 93.0999 537.9C84.8999 560.9 85.9999 577.1 106.6 638.2C106.6 638.2 112.9 651.7 109.7 676C109.7 676 96.4999 703.1 105 703.6C105 703.6 105.7 705.4 108.5 704C108.5 704 113.1 708.7 118 706.1C118 706.1 122.6 709.7 126.4 706.5C126.4 706.5 129.5 710.1 134.1 707.2C134.1 707.2 140.1 711.2 143.6 706.9C143.6 706.9 149.9 708.3 138.7 679.9C138.7 679.9 134.4 649.7 132 643.8C127.5 632.6 130.7 601.8 131.6 595.2C133.2 584.2 132.3 565.4 129.5 550.8C127.4 540.4 133.1 520.7 135.1 508.6C139.2 482.9 150.2 405.3 150.2 405.3Z"
            fill="#EEEEEE"
            stroke="black"
            strokeMiterlimit="1.4142"
            strokeLinejoin="round"
          />

          <g
            className={`shoulder ${isActive === "shoulder" ? "active" : ""}`}
            onClick={() => handleMuscle("shoulder")}
          >
            <path
              d="M121.251 126.99C121.251 126.99 76.794 105.771 61.401 141C54.906 154.489 58.803 195.134 59.003 197.132C59.102 198.431 71.792 169.755 82.683 163.66C84.581 162.661 82.183 134.784 121.251 126.99Z"
              fill={otherMuscleColor.shoulder || "black"}
            />

            <path
              d="M179.502 126.99C179.502 126.99 222.315 104.33 240 141C246.495 154.489 241.951 195.134 241.751 197.132C241.651 198.431 228.961 169.755 218.07 163.66C216.172 162.661 218.57 134.784 179.502 126.99Z"
              fill={otherMuscleColor.shoulder || "black"}
            />
          </g>

          <g
            className={`biceps ${isActive === "biceps" ? "active" : ""}`}
            onClick={() => handleMuscle("biceps")}
          >
            <path
              d="M84.7001 164.6C84.7001 164.6 88.5001 223 84.1001 225.6C79.0001 228.6 76.3001 257.4 76.3001 257.4C76.3001 257.4 73.7001 250.1 70.8001 250.4C67.9001 250.7 62.4001 256.2 61.2001 258.2C60.1001 260.1 43.1001 198 84.7001 164.6Z"
              fill={otherMuscleColor.biceps || "black"}
            />

            <path
              d="M217.9 172.2C217.9 172.2 214.1 230.6 218.6 233.2C223.7 236.2 226.4 265 226.4 265C226.4 265 229 257.7 231.9 258C234.8 258.3 240.3 263.8 241.5 265.8C242.6 267.7 259.6 205.6 217.9 172.2Z"
              fill={otherMuscleColor.biceps || "black"}
            />
          </g>
          <g
            className={`chest ${isActive === "chest" ? "active" : ""}`}
            onClick={() => handleMuscle("chest")}
          >
            <path
              d="M143.2 134C142.1 147.9 150.2 165.1 150.3 175.5C150.4 189.5 149.2 200.9 124.3 203.7C104.4 205.9 99.9 197.7 93.4 193.5C89.4 190.9 88.1 164.4 84.5 160.4C82 157.7 98.4 129.4 121.1 129.6C143.9 129.8 143.5 131 143.2 134Z"
              fill={otherMuscleColor.chest}
            />
            <path
              d="M157.4 134C158.5 147.9 150.4 165.1 150.3 175.5C150.2 189.5 151.4 200.9 176.3 203.7C196.2 205.9 200.7 197.7 207.2 193.5C211.2 190.9 212.5 164.4 216.2 160.4C218.7 157.7 202.3 129.4 179.6 129.6C156.8 129.8 157.2 131 157.4 134Z"
              fill={otherMuscleColor.chest}
            />
          </g>
          <g
            className={`externalAbs ${
              isActive === "external Abs" ? "active" : ""
            }`}
            onClick={() => handleMuscle("externalAbs")}
          >
            <path
              d="M122.2 213C122.2 213 127.1 323.6 122.2 327.6C117.4 331.6 116.4 305.5 98.6 302.6C95.3 302 98 242.7 90.1 228.5C82.1 214.3 118.8 208.4 122.2 213Z"
              fill={otherMuscleColor.externalAbs}
            />
            <path
              d="M177.5 213C177.5 213 172.6 323.6 177.5 327.6C182.3 331.6 183.3 305.5 201.1 302.6C204.4 302 201.7 242.7 209.6 228.5C217.6 214.3 180.9 208.4 177.5 213Z"
              fill={otherMuscleColor.externalAbs}
            />
          </g>
          <g
            className={`quadriceps ${
              isActive === "quadriceps" ? "active" : ""
            }`}
            onClick={() => handleMuscle("quadriceps")}
          >
            <path
              d="M106.863 327.624C106.863 327.624 143.932 409.755 141.134 448.223C138.337 486.691 134 499.208 134 509C134 518.792 136.838 495.184 124.548 495.084C110.16 494.985 99.469 506.675 95.572 519.464C94.973 521.263 93.574 482.994 93.574 482.994C93.574 482.994 89.397 472.403 86 437.033C80.904 383.277 119.552 363.993 106.863 327.624Z"
              fill={otherMuscleColor.quads}
            />
            <path
              d="M192.991 327.624C192.991 327.624 154.523 409.755 157.321 448.223C161.294 477.688 167 499.208 167 509C167 518.792 165.814 495.184 178.104 495.084C192.492 494.985 200.385 506.675 204.282 519.464C204.881 521.263 207.279 482.994 207.279 482.994C207.279 482.994 211.603 470.371 215 435C219.996 381.245 180.202 363.993 192.991 327.624Z"
              fill={otherMuscleColor.quads}
            />
          </g>
          <path
            d="M126.8 530.8C126.8 530.8 126.8 543.2 121.3 549.1C115.8 555 100 553.7 97.9 530.8C95.8 508 113.7 498.8 126.8 517.8C126.8 517.8 128.1 520.8 126.8 530.8Z"
            fill="black"
          />
          <path
            d="M172.5 530.8C172.5 530.8 172.5 543.2 178 549.1C183.5 555 199.3 553.7 201.4 530.8C203.5 508 185.6 498.8 172.5 517.8C172.5 517.8 171.1 520.8 172.5 530.8Z"
            fill="black"
          />
          <g
            className={`shin ${isActive === "shin" ? "active" : ""}`}
            onClick={() => handleMuscle("shin")}
          >
            <path
              d="M95.7 563.1C95.7 563.1 111.8 548.1 125.3 566.4C125.3 566.4 116.6 636 122.2 654.4C122.3 654.3 102 607 95.7 563.1Z"
              fill={otherMuscleColor.shin}
            />
            <path
              d="M205.5 563.1C205.5 563.1 189.4 548.1 175.9 566.4C175.9 566.4 184.6 636 179 654.4C179 654.3 199.3 607 205.5 563.1Z"
              fill={otherMuscleColor.shin}
            />
          </g>
          <path
            d="M25 346.408C25 346.408 30.414 355.8 47 351.404L48.411 345.709C48.411 345.709 39.119 343.61 40.018 331.72C40.018 331.72 35.595 342.911 29 340.113L25 346.408Z"
            fill="black"
          />
          <path
            d="M278 350.604C278 350.604 271.985 362.195 254 357.399V351.404C254 351.404 263.433 348.306 262.533 335.217C262.533 335.217 268.928 348.806 276.122 345.709L278 350.604Z"
            fill="black"
          />
          <g
            className={`forearms ${isActive === "forearms" ? "active" : ""}`}
            onClick={() => handleMuscle("forearms")}
          >
            <path
              d="M50.1 260.4C50.1 260.4 69.3 265.3 73.5 278.2C73.5 278.2 66.6 303.1 48.2 332C48.2 332 45.2 333.4 36.6 328C36.5 327.9 42 274.7 50.1 260.4Z"
              fill={otherMuscleColor.forearm}
            />
            <path
              d="M250.7 264.8C250.7 264.8 231.5 269.7 227.3 282.6C227.3 282.6 234.2 307.5 252.6 336.4C252.6 336.4 255.6 337.8 264.2 332.4C264.3 332.3 258.8 279 250.7 264.8Z"
              fill={otherMuscleColor.forearm}
            />
          </g>
          <g
            className={`tfl ${isActive === "tfl" ? "active" : ""}`}
            onClick={() => handleMuscle("tfl")}
          >
            <path
              d="M205 311.3L191.5 324.1C191.5 324.1 225 369.9 222.7 381.9C222.7 381.9 227 336.7 205 311.3Z"
              fill={otherMuscleColor.tfl}
            />
            <path
              d="M92.974 313.236L106.163 326.025C106.163 326.025 78.755 368.681 80 383.677C80 383.777 71.697 356.526 92.974 313.236Z"
              fill={otherMuscleColor.tfl}
            />
          </g>
          <g
            className={`abductors ${isActive === "abductors" ? "active" : ""}`}
            onClick={() => handleMuscle("abductors")}
          >
            <path
              d="M115.955 331.42C115.955 331.42 143.932 416.919 143.332 440L147 410.555L149.827 375.584C149.827 375.584 139.036 339.714 118.553 327.124C118.653 327.124 115.256 326.524 115.955 331.42Z"
              fill={otherMuscleColor.abductors}
            />
            <path
              d="M184.698 332.02C184.698 332.02 155.7 416.819 156 440L152 410.555L150.926 375C150.926 375 161.517 340.113 182.1 327.723C182.1 327.723 185.497 327.124 184.698 332.02Z"
              fill={otherMuscleColor.abductors}
            />
          </g>
          <g
            className={`abs ${isActive === "abs" ? "active" : ""}`}
            onClick={() => handleMuscle("abs")}
          >
            <path
              d="M124.4 211.3C124.4 211.3 150 180.7 175.4 211.3C175.4 211.3 177.1 307.8 170.4 332.3C170.4 332.3 149.9 349.6 129 332.3C128.9 332.4 122.9 286 124.4 211.3Z"
              fill={otherMuscleColor.abs}
            />
          </g>
          <g
            className={`trapezius ${isActive === "trapezius" ? "active" : ""}`}
            onClick={() => handleMuscle("trapezius")}
          >
            <path
              d="M140 115C135.107 123.251 114.495 121.197 108 117C130.757 120.303 130.597 83.127 127 79.13C129.723 77.331 144.199 100.155 140 115Z"
              fill={otherMuscleColor.traps}
            />
            <path
              d="M160.357 115C167.432 121.937 184.698 121.197 191.193 117C168.436 120.303 168.596 83.127 172.193 79.13C169.469 77.331 156.157 100.155 160.357 115Z"
              fill={otherMuscleColor.traps}
            />
          </g>
          <path
            d="M115.955 661C115.955 661 121.634 649.146 132 659.683C132 659.683 133.724 688.905 141 700C141 700 115.392 703.958 106.863 698C106.822 698.034 115.343 686.724 115.955 661Z"
            fill="black"
          />
          <path
            d="M185.08 661C185.08 661 179.401 649.146 169.035 659.683C169.035 659.683 167.311 688.905 160.035 700C160.035 700 185.642 703.958 194.172 698C194.213 698.034 185.692 686.724 185.08 661Z"
            fill="black"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="450"
          viewBox="0 0 299 705"
          fill="none"
        >
          <path
            d="M149.276 404.959C148.277 417.249 160.367 482.495 164.663 507.974C166.661 520.064 172.357 539.647 170.258 550.139C167.361 564.727 166.561 583.511 168.16 594.502C169.159 601.196 172.357 631.871 167.76 643.061C165.362 648.957 162 681 162 681C159.869 700.135 167.76 702.812 167.76 702.812C176.843 704.643 192 699 192 699C244.571 683.142 192 681 192 681C188.803 656.72 193.239 637.466 193.239 637.466C213.822 576.417 214.821 560.23 206.628 537.249C204.33 530.655 203.73 527.957 204.83 525.06C207.327 518.365 205.529 491.687 208.527 480.996C214.322 460.513 220.017 408.556 223.014 384.277C227.011 351.604 208.826 307.84 208.826 307.84C204.83 290.055 210.725 226.508 210.725 226.508C218.918 239.197 218.618 261.578 218.618 261.578C217.319 285.059 237.602 321.029 237.602 321.029C247.394 335.917 251.091 350.005 251.091 351.004C251.091 355.301 250.192 365.592 250.192 365.592L250.592 374.585C250.791 376.883 252.09 384.776 251.89 388.573C250.392 412.053 254.089 407.657 254.089 407.657C257.286 407.657 260.683 388.773 260.683 388.773C260.683 393.669 259.484 408.257 262.082 413.752C265.279 420.347 267.577 412.653 267.577 411.054C268.377 381.079 270.175 388.973 270.175 388.973C271.974 413.252 274.072 418.748 277.969 416.849C280.866 415.451 278.269 387.674 278.269 387.674C283.264 404.16 287.061 406.758 287.061 406.758C295.354 412.553 290.259 396.566 289.06 393.369C282.965 376.483 282.765 370.688 282.765 370.688C290.358 385.875 296.154 385.276 296.154 385.276C303.647 382.878 289.659 361.396 281.466 351.204C277.269 346.008 271.874 338.914 270.375 334.818C267.877 327.723 265.879 305.042 265.879 305.042C265.079 278.265 258.485 266.674 258.485 266.674C246.895 248.789 244.796 215.017 244.796 215.017L244.297 157.965C240.3 119.097 211.624 118.797 211.624 118.797C182.648 114.501 178.651 105.108 178.651 105.108C172.556 96.316 176.053 79.33 176.053 79.33C181.149 75.233 183.148 64.242 183.148 64.242C191.641 57.748 191.141 48.256 187.244 48.356C184.147 48.456 184.846 45.858 184.846 45.858C190.142 3.193 152.173 0.994995 152.173 0.994995H146.378C146.378 0.994995 108.51 3.193 113.705 45.858C113.705 45.858 114.405 48.456 111.207 48.356C107.311 48.256 106.911 57.748 115.404 64.242C115.404 64.242 117.402 75.233 122.498 79.33C122.498 79.33 125.995 96.216 119.9 105.108C119.9 105.108 115.903 114.501 86.9281 118.797C86.9281 118.797 58.2511 119.097 54.3551 157.965L53.8551 215.017C53.8551 215.017 51.7571 248.789 40.3661 266.874C40.3661 266.874 33.7721 278.464 32.9721 305.242C32.9721 305.242 31.0741 327.923 28.4761 335.017C26.9771 339.114 21.5821 346.208 17.3851 351.404C9.09208 361.695 -4.69593 383.077 2.69807 385.475C2.69807 385.475 8.49307 386.075 16.0861 370.888C16.0861 370.888 15.8871 376.683 9.79206 393.569C8.59306 396.666 3.49708 412.753 11.7901 406.958C11.7901 406.958 15.5871 404.36 20.5831 387.874C20.5831 387.874 17.8851 415.65 20.8821 417.049C24.7791 418.948 26.8771 413.452 28.6761 389.172C28.6761 389.172 30.4741 381.279 31.2741 411.254C31.2741 412.753 33.5721 420.546 36.7691 413.952C39.4671 408.456 38.2681 393.869 38.2681 388.973C38.2681 388.973 41.6651 407.857 44.8631 407.857C44.8631 407.857 48.6591 412.253 47.0611 388.773C46.7611 384.976 48.1601 377.082 48.3601 374.784L48.7591 365.792C48.7591 365.792 47.8601 355.5 47.8601 351.204C47.8601 350.105 51.5571 336.117 61.3491 321.229C61.3491 321.229 81.6321 285.259 80.3331 261.778C80.3331 261.778 80.0331 239.397 88.2261 226.707C88.2261 226.707 94.0221 290.255 90.1251 308.04C90.1251 308.04 71.9401 351.803 75.9371 384.476C78.9341 408.756 84.6291 460.713 90.4251 481.196C93.4221 491.787 91.6241 518.565 94.1221 525.259C95.2211 528.157 94.6211 530.855 92.3231 537.449C84.1301 560.43 85.2291 576.617 105.812 637.666C105.812 637.666 110.197 656.72 107 681C107 681 61.9951 681.979 108 699C108 699 119.24 704.513 131.191 703.411C131.191 703.411 143.062 703.885 137.885 679.331C137.885 679.331 133.589 649.156 131.191 643.261C126.694 632.071 129.892 601.296 130.791 594.702C132.39 583.711 131.491 564.926 128.693 550.338C126.595 539.947 132.29 520.264 134.288 508.174C138.285 482.495 149.276 404.959 149.276 404.959Z"
            fill="#EEEEEE"
            stroke="black"
            stroke-miterlimit="1.4142"
            stroke-linejoin="round"
          />
          <g
            className={`trapezius ${isActive === "trapezius" ? "active" : ""}`}
            onClick={() => handleMuscle("trapezius")}
          >
            <path
              d="M144.5 260.3C144.8 261.6 147.1 250 149.9 251.3C152.8 252.6 156.3 260.3 156.3 260C155.4 250.5 163.9 235.8 170.1 225.7C176.8 214.8 180.3 214.2 184.8 200.1C186.6 194.5 184.8 157.8 192.5 144.3C200.2 130.8 205.6 132.2 211.4 128.9C212.7 128.2 164.2 124.3 160 91.6C159.3 86.2 159.3 81.3 160.1 76.3C161 71.4 134.9 69.4 133.5 76C131.4 86.1 149.4 115 88 124.4C83.7 125.1 100.7 131.6 110.1 145.9C112.4 149.4 112.3 157.6 119.4 203.9C121 214.3 141.4 244.9 144.5 260.3Z"
              fill={otherMuscleColor.traps}
            />
          </g>
          <g
            className={`lats ${isActive === "lats" ? "active" : ""}`}
            onClick={() => handleMuscle("lats")}
          >
            <path
              d="M160.966 257.182C160.966 257.182 178.551 275.067 180.45 285.758C182.348 296.449 182.348 312.736 191.541 311.237C191.641 311.237 188.443 307.241 192.64 299.947C207.228 274.867 206.628 245.692 206.628 245.692L207.927 199.93C207.927 199.93 199.334 202.827 188.543 195.733C186.345 194.334 187.644 212.319 177.252 221.712C172.856 225.508 156.77 246.491 160.966 257.182Z"
              fill={otherMuscleColor.lats}
            />
            <path
              d="M138.185 257.182C138.185 257.182 120.6 275.067 118.701 285.758C116.803 296.449 119.201 311.499 110.008 310C109.908 310 110.708 307.241 106.511 299.947C91.923 274.867 91.224 245.692 91.224 245.692V202C91.224 202 99.817 202.827 110.608 195.733C112.806 194.334 111.507 212.319 121.898 221.712C126.295 225.508 142.381 246.491 138.185 257.182Z"
              fill={otherMuscleColor.lats}
            />
          </g>
          <g
            className={`triceps ${isActive === "triceps" ? "active" : ""}`}
            onClick={() => handleMuscle("triceps")}
          >
            <path
              d="M210.825 165.958C210.825 165.958 223.714 158.364 228.31 160.562C232.906 162.761 241.299 176.749 242.298 182.544C240.994 197.329 245 234.101 245 234.101C245 234.101 245.895 239.896 241.299 241.295C236.803 242.694 237.403 229.405 234.005 227.906C230.608 226.408 233.805 238.198 230.408 239.197C227.011 240.096 216.92 236 216.92 236L209.326 217.015C209.226 217.015 216.42 176.149 210.825 165.958Z"
              fill={otherMuscleColor.triceps}
            />

            <path
              d="M87.727 165.059C87.727 165.059 74.838 157.365 70.241 159.563C65.645 161.761 57.252 175.95 56.253 181.845C56.702 199.289 54 233 54 233C54 233 52.6561 239.896 57.2521 241.295C61.7481 242.694 61.149 229.205 64.546 227.707C67.943 226.208 64.746 238.198 68.143 239.097C71.54 239.996 81.632 235.9 81.632 235.9L89.2261 216.716C89.3261 216.716 82.132 175.35 87.727 165.059Z"
              fill={otherMuscleColor.triceps}
            />
          </g>
          <g
            className={`glutes ${isActive === "glutes" ? "active" : ""}`}
            onClick={() => handleMuscle("glutes")}
          >
            <path
              d="M98.4 307.3C101.2 306.8 145.5 328.9 147.9 363.1C150.3 397.2 123.8 409.5 101.4 403.5C79 397.5 80.7 370.8 81.3 364.4C81.7 359.8 85.7 349.5 89.3 324.6C90 320.2 95.6 307.8 98.4 307.3Z"
              fill={otherMuscleColor.glutes}
            />

            <path
              d="M206.8 311.5C204.3 310.5 159.6 323.8 151.2 356.8C142.9 389.8 165.1 406.9 186.8 405.3C208.5 403.7 211.7 377.2 212.3 370.8C212.7 366.2 210.9 355.4 212 330.2C212.2 325.8 209.3 312.5 206.8 311.5Z"
              fill={otherMuscleColor.glutes}
            />
          </g>
          <g
            className={`hamstring ${isActive === "hamstring" ? "active" : ""}`}
            onClick={() => handleMuscle("hamstring")}
          >
            <path
              d="M159.967 406.958C159.967 406.958 202.831 408.656 209.626 402.661C216.42 396.666 215.221 436.335 206.628 478C200.68 519.076 204.199 520.099 203 519C193.352 511.801 189.942 493.386 189.342 493.885C188.843 494.285 169.559 522.761 172.656 544.943C172.856 546.242 156.698 444.227 154 431.837C151.202 419.647 149.436 407.108 159.967 406.958Z"
              fill={otherMuscleColor.hamstring}
            />
            <path
              d="M138.685 406.958C138.685 406.958 96.0201 408.656 89.2261 402.661C82.4311 396.666 82.631 435.334 91.224 476.999C96.501 516.507 93.801 521.099 95 520C103.559 513.762 108.809 493.386 109.409 493.885C109.908 494.285 129.093 522.761 125.995 544.943C125.795 546.242 141.682 438.39 144.38 426C147.078 413.81 147.277 407.357 138.685 406.958Z"
              fill={otherMuscleColor.hamstring}
            />
          </g>
          <g
            className={`calves ${isActive === "calves" ? "active" : ""}`}
            onClick={() => handleMuscle("calves")}
          >
            <path
              d="M190.741 523.96C190.741 523.96 171.257 548.64 169.959 558.732C166.885 577.676 171.198 614.534 171.957 625.976C174.655 632.17 187.944 612.187 191.241 599.697C194.538 587.208 187.707 611.288 196 620.28C197.399 621.779 212.762 571.402 209.326 554C205.534 536.504 204.135 536.504 203 529C202.567 512.978 195.837 523.96 194.238 531.354C192.64 538.748 190.741 523.96 190.741 523.96Z"
              fill={otherMuscleColor.calves}
            />
            <path
              d="M108.51 523.96C108.51 523.96 127.701 549.908 129 560C130.511 584.826 126.89 611.005 125.995 625.976C123.297 632.17 111.307 612.187 108.01 599.697C104.713 587.208 111.293 611.288 103 620.28C101.601 621.779 86.857 576.191 89.226 558.732C90.815 539.641 97.499 536.491 96 526C97.089 517.291 103.414 523.96 105.013 531.354C106.611 538.748 108.51 523.96 108.51 523.96Z"
              fill={otherMuscleColor.calves}
            />
          </g>
          <path
            d="M166 673.636C166 673.636 164.007 653.453 172 634.469C172 634.469 183.248 645.36 178.951 671.738C178.951 671.738 181.31 642.362 193 629.073C193 629.073 187.444 650.955 190.042 674.535C190.042 674.535 177.391 684.427 166 673.636Z"
            fill="black"
          />
          <path
            d="M135 671.937C135 671.937 133.893 651.984 126 633C126 633 117.902 643.661 122.198 670.039C122.198 670.039 116.69 642.362 105 629.073C105 629.073 111.598 650.056 109 673.636C109 673.736 123.609 682.828 135 671.937Z"
            fill="black"
          />
          <g
            className={`shoulder ${isActive === "shoulder" ? "active" : ""}`}
            onClick={() => handleMuscle("shoulder")}
          >
            <path
              d="M81.0001 126.8C81.0001 126.8 68.0001 126.8 59.1001 155.1C59.1001 155.1 76.1001 151.9 86.4001 161.2C86.4001 161.2 97.9001 151.1 95.5001 144C95.5001 144 98.5001 135.7 81.0001 126.8Z"
              fill={otherMuscleColor.shoulder}
            />

            <path
              d="M218.6 127.8C218.6 127.8 231.6 127.8 240.5 156.1C240.5 156.1 223.5 152.9 213.2 162.2C213.2 162.2 201.7 152.1 204.1 145C204.1 145 201.1 136.7 218.6 127.8Z"
              fill={otherMuscleColor.shoulder}
            />
          </g>
          <g
            className={`lowerBack ${isActive === "lowerBack" ? "active" : ""}`}
            onClick={() => handleMuscle("lowerBack")}
          >
            <path
              d="M121.5 312.3C121.5 312.3 117.8 272.8 148.5 264.9C148.5 264.9 178.5 261.5 177.9 312.3C177.9 312.3 167.2 317.7 149.7 340.1C149.6 340.1 139.2 323.9 121.5 312.3Z"
              fill={otherMuscleColor.lowerback}
            />
          </g>
          <path
            d="M50.5001 249.5C50.5001 249.5 63.9001 231.5 76.5001 249.5C76.5001 249.5 79.6001 260.5 59.9001 270.9C59.9001 270.9 48.2001 271.1 50.5001 249.5Z"
            fill="black"
          />
          <path
            d="M248.3 248.5C248.3 248.5 234.9 230.5 222.3 248.5C222.3 248.5 219.2 259.5 238.9 269.9C238.9 269.9 250.6 270.1 248.3 248.5Z"
            fill="black"
          />
          <path
            d="M281.128 357C281.128 357 261.814 327.934 253.851 359.618C253.851 359.618 247.322 383.162 270.437 381C270.437 381 288.841 371.02 281.128 357Z"
            fill="black"
          />
          <path
            d="M18.0001 357C18.0001 357 37.3141 327.934 45.2781 359.618C45.2781 359.618 51.8071 383.162 28.6911 381C28.6911 381 10.2881 371.02 18.0001 357Z"
            fill="black"
          />
        </svg>
      </div>
      {selectedMuscleGroup && (
        <div className="containerExercise">
          <h1>{selectedMuscleGroup.foundMuscle}</h1>
          {selectedMuscleGroup.exercises.map((exercise, i) => (
            <div className="item" key={exercise.id}>
              <div className="title" onClick={() => toggle(i, exercise.label)}>
                <h2>Exercise name: </h2>
                <h2>{exercise.label}</h2>
                <span>{selectedItem === i ? "-" : "+"}</span>
              </div>

              <div className={selectedItem == i ? "content show" : "content"}>
                <p>Main Muscle: {exercise.mainMuscle}</p>
              </div>
              <div className={selectedItem == i ? "content show" : "content"}>
                <p>Other Muscles:{exercise.otherMuscles.join(", ")}</p>
              </div>
              <div className={selectedItem == i ? "content show" : "content"}>
                <iframe
                  width="500"
                  height="280"
                  src={selectedItem === i ? exercise.video : ""}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HumanFront;
