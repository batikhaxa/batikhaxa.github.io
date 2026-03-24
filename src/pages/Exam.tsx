import dividerImg from "@/assets/divider.gif";
import pawIcon from "@/assets/paw-icon.png";
import coderSignImg from "@/assets/coder-sign.gif";
import coderTypingImg from "@/assets/coder-typing.gif";
import catFaceImg from "@/assets/cat-face.gif";

const CatDivider = () => (
  <div style={{ textAlign: "center", margin: "12px 0" }}>
    <img src={dividerImg} alt="" style={{ width: "100%", maxWidth: 400, height: "auto" }} />
  </div>
);

const PawBullet = () => (
  <img
    src={pawIcon}
    alt="paw"
    style={{ width: 18, height: 18, verticalAlign: "middle", marginRight: 6 }}
    loading="lazy"
  />
);

const comicSans = { fontFamily: "'Comic Sans MS', cursive", fontSize: 13 } as const;
const sectionTitle = { fontSize: 20, fontFamily: "'Comic Sans MS', cursive", color: "#ff1493" } as const;

const Exam = () => {
  return (
    <div style={{ maxWidth: 640, margin: "0 auto" }}>
      {/* Title Bar */}
      <div className="bevel-out" style={{ marginBottom: 20 }}>
        <div style={{ background: "#000080", color: "#ffffff", fontFamily: "Arial, Helvetica, sans-serif", fontSize: 13, fontWeight: "bold", padding: "3px 6px" }}>
          🐱 ~*~ INDA TENTA ~*~ 🐱 - Microsoft Internet Explorer
        </div>
        <div style={{ padding: 4, borderBottom: "1px solid #808080" }}>
          <a href="/" className="retro-btn" style={{ marginRight: 4 }}>⬅ Back to secret page</a>
          <a href="#" className="retro-btn" style={{ marginRight: 4 }}>Forward</a>
          <a href="/" className="retro-btn" style={{ marginRight: 4 }}>Home</a>
          <a href="#" className="retro-btn" style={{ marginRight: 4 }}>Reload</a>
        </div>
        <div style={{ padding: 4 }}>
          <span style={{ fontFamily: "Arial, sans-serif", fontSize: 12, marginRight: 6 }}>Address:</span>
          <span className="bevel-in" style={{ display: "inline-block", padding: "2px 8px", fontSize: 12, fontFamily: "Arial, sans-serif", width: "80%", background: "#ffffff" }}>
            http://www.geocities.com/Heartland/Meadows/8742/gamla_tentor.html
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="bevel-out" style={{ padding: 15 }}>
        <center>
          <p style={{ fontSize: 11, fontFamily: "'Comic Sans MS', cursive", color: "#ff1493", letterSpacing: 1 }}>
            ~*~*~*~*~*~*~*~*~*~*~*~*~*~*~
          </p>
          <h1 style={{ fontSize: 26, fontFamily: "'Comic Sans MS', cursive", color: "#ff1493", marginBottom: 4 }}>
            <img src={pawIcon} alt="" style={{ width: 28, height: 28 }} />{" "}
            GAMLA TENTOR{" "}
            <img src={pawIcon} alt="" style={{ width: 28, height: 28 }} />
          </h1>
        </center>

        <CatDivider />

        {/* Section A */}
        <h2 style={sectionTitle}>🐾 Section A: Multiple Choice</h2>
        <p style={{ ...comicSans, color: "#ff69b4", fontStyle: "italic" }}>(Choose the "best" answer)</p>

        <p style={comicSans}><b>1. What is the runtime complexity of your code?</b></p>
        <p style={comicSans}><PawBullet />A. O(n)<br /><PawBullet />B. O(n log n)<br /><PawBullet />C. Depends on input<br /><PawBullet />D. Depends on your confidence<br /><PawBullet />E. It passed locally so O(1)</p>

        <CatDivider />

        <p style={comicSans}><b>2. What does Java taste like?</b></p>
        <p style={comicSans}><PawBullet />A. Deep, rich coffee<br /><PawBullet />B. Electricity<br /><PawBullet />C. Enterprise-grade vanilla<br /><PawBullet />D. Deprecated APIs<br /><PawBullet />E. All of the above (legacy blend)</p>

        <CatDivider />

        <p style={comicSans}><b>3. Which of the following is a valid reason your code works?</b></p>
        <p style={comicSans}><PawBullet />A. Correctness<br /><PawBullet />B. Undefined behavior that happens to be favorable<br /><PawBullet />C. Compiler mercy<br /><PawBullet />D. Stack Overflow copy-paste alignment<br /><PawBullet />E. Lunar phase</p>

        <CatDivider />

        <p style={comicSans}><b>4. What does <code>null</code> mean?</b></p>
        <p style={comicSans}><PawBullet />A. Nothing<br /><PawBullet />B. Something pretending to be nothing<br /><PawBullet />C. A billion-dollar mistake<br /><PawBullet />D. A lifestyle<br /><PawBullet />E. All of the above simultaneously</p>

        <CatDivider />

        <p style={comicSans}><b>5. How many programmers does it take to change a lightbulb?</b></p>
        <p style={comicSans}><PawBullet />A. 1<br /><PawBullet />B. 0 (automated)<br /><PawBullet />C. 2 (one to change it, one to argue about tabs vs spaces)<br /><PawBullet />D. Undefined<br /><PawBullet />E. It works on my machine</p>

        <CatDivider />

        {/* Section B */}
        <h2 style={sectionTitle}>🐾 Section B: Short Answer</h2>

        <p style={comicSans}><b>6. Explain recursion.</b></p>
        <p style={{ ...comicSans, fontStyle: "italic", color: "#ff69b4" }}>Answer: See question 6.</p>

        <CatDivider />

        <p style={comicSans}><b>7. What is the difference between a bug and a feature?</b></p>
        <p style={{ ...comicSans, fontStyle: "italic", color: "#ff69b4" }}>Answer: A bug is something users report. A feature is something product insists is intentional.</p>

        <CatDivider />

        <p style={comicSans}><b>8. Define "clean code."</b></p>
        <p style={{ ...comicSans, fontStyle: "italic", color: "#ff69b4" }}>Answer: Code written by someone else that you don't have to maintain.</p>

        <CatDivider />

        <p style={comicSans}><b>9. What is the purpose of comments in code?</b></p>
        <p style={{ ...comicSans, fontStyle: "italic", color: "#ff69b4" }}>Answer: To explain why the code used to work.</p>

        <CatDivider />

        <p style={comicSans}><b>10. When is a program considered "finished"?</b></p>
        <p style={{ ...comicSans, fontStyle: "italic", color: "#ff69b4" }}>Answer: When it compiles on the professor's computer.</p>

        <CatDivider />

        {/* Section C */}
        <h2 style={sectionTitle}>🐾 Section C: True / False</h2>

        <p style={comicSans}><b>11. Adding more threads always makes a program faster.</b></p>
        <p style={comicSans}>☐ True &nbsp; ☐ False &nbsp; ☐ Depends on how fast you close your eyes</p>

        <CatDivider />

        <p style={comicSans}><b>12. If it compiles, it is correct.</b></p>
        <p style={comicSans}>☐ True &nbsp; ☐ False &nbsp; ☐ It compiles?</p>

        <CatDivider />

        <p style={comicSans}><b>13. You understand your own code.</b></p>
        <p style={comicSans}>☐ True &nbsp; ☐ False &nbsp; ☐ Not after a week</p>

        <CatDivider />

        {/* Section D */}
        <h2 style={sectionTitle}>🐾 Section D: Programming</h2>

        <p style={comicSans}><b>14. Write a function that sorts a list in O(1) time.</b></p>
        <p style={{ ...comicSans, fontStyle: "italic", color: "#ff69b4" }}>Hint: You may redefine time.</p>

        <CatDivider />

        <p style={comicSans}><b>15. Implement a secure authentication system.</b></p>
        <p style={comicSans}><i>Constraints:</i></p>
        <p style={comicSans}>
          <PawBullet />Must be completed in 5 minutes<br />
          <PawBullet />No external libraries<br />
          <PawBullet />Must resist all known and unknown attacks<br />
          <PawBullet />Should also make coffee
        </p>

        <CatDivider />

        <p style={comicSans}><b>16. Fix the following code:</b></p>
        <pre style={{ background: "#000", color: "#00ff00", padding: 10, fontFamily: "'Courier New', monospace", fontSize: 12, border: "2px inset #808080" }}>
{`if (working) {
    // do nothing
} else {
    // panic
}`}
        </pre>
        <p style={{ ...comicSans, fontStyle: "italic", color: "#ff69b4" }}>Answer: Remove the <code>else</code> branch and hope.</p>

        <CatDivider />

        <p style={comicSans}><b>17. Write a concurrent program with no race conditions, deadlocks, or bugs.</b></p>
        <p style={{ ...comicSans, fontStyle: "italic", color: "#ff69b4" }}>Answer: Omitted for brevity.</p>

        <CatDivider />

        {/* Section E */}
        <h2 style={sectionTitle}>🐾 Section E: Theory</h2>

        <p style={comicSans}><b>18. What is the halting problem? Solve it.</b></p>

        <CatDivider />

        <p style={comicSans}><b>19. Prove your program is correct.</b></p>
        <p style={{ ...comicSans, fontStyle: "italic", color: "#ff69b4" }}>Answer: Trust me.</p>

        <CatDivider />

        <p style={comicSans}><b>20. What is the meaning of life, according to your debugger?</b></p>
        <p style={{ ...comicSans, fontStyle: "italic", color: "#ff69b4" }}>Answer: 42 (but only in debug mode)</p>

        <CatDivider />

        {/* Bonus */}
        <center>
          <h2 style={{ ...sectionTitle, fontSize: 22 }}>⭐ Bonus Question (50 pts) ⭐</h2>
        </center>

        <p style={comicSans}><b>21. Why didn't your code work during the exam but worked the night before?</b></p>
        <p style={{ ...comicSans, fontStyle: "italic", color: "#ff69b4" }}>Answer: Environmental factors, cosmic rays, and the presence of authority.</p>

        <CatDivider />

        <center>
          <p style={{ fontSize: 11, fontFamily: "'Comic Sans MS', cursive", color: "#ff1493", letterSpacing: 1 }}>
            ~*~*~*~*~*~*~*~*~*~*~*~*~*~*~
          </p>
          <small style={{ fontFamily: "'Comic Sans MS', cursive", fontSize: 10, color: "#ff69b4" }}>
            ~*~ best viewed with Internet Explorer 5.0 at 800x600 ~*~
            <br />made with luv and notepad 💕
            <br />©2002 ~*INDA*~ all rights reserved meow~
          </small>
        </center>
      </div>

      {/* Status Bar */}
      <div className="bevel-in" style={{ padding: "3px 10px", fontSize: 12, marginTop: 4, fontFamily: "Arial, sans-serif" }}>
        Done
      </div>
    </div>
  );
};

export default Exam;
