import { TypeAnimation } from "react-type-animation";
import JavaScript from "./Icons";

const MySkillTyping = () => {
  return (
    <div>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed once, initially
          `I'm a Software Engineer Proficient in : JavaScript `,

          1000,
          "I'm a Software Engineer Proficient in : React/Nextjs",
          1000,
          "I'm a Software Engineer Proficient in : Python",
          1000,
          "I'm a Software Engineer Proficient in:  Wordpress",
          1000,
        ]}
        speed={50}
        className={"frijole-text text-sm"}
        style={{ fontSize: "1.5em" }}
        repeat={Infinity}
      />
      {/* <JavaScript /> */}
    </div>
  );
};
export default MySkillTyping;
