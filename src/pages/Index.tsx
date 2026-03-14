import constructionImg from "@/assets/construction.png";
import counterImg from "@/assets/counter.png";

const Index = () => {
  return (
    <div style={{ maxWidth: 640, margin: "0 auto" }}>
      {/* Title Bar Window */}
      <div className="bevel-out" style={{ marginBottom: 20 }}>
        <div
          style={{
            background: "#000080",
            color: "#ffffff",
            fontFamily: "Arial, Helvetica, sans-serif",
            fontSize: 13,
            fontWeight: "bold",
            padding: "3px 6px",
          }}
        >
          Welcome to My Home Page - Microsoft Internet Explorer
        </div>

        {/* Toolbar */}
        <div style={{ padding: 4, borderBottom: "1px solid #808080" }}>
          <a href="#" className="retro-btn" style={{ marginRight: 4 }}>
            Back
          </a>
          <a href="#" className="retro-btn" style={{ marginRight: 4 }}>
            Forward
          </a>
          <a href="#" className="retro-btn" style={{ marginRight: 4 }}>
            Home
          </a>
          <a href="#" className="retro-btn" style={{ marginRight: 4 }}>
            Reload
          </a>
          <a href="#" className="retro-btn" style={{ marginRight: 4 }}>
            Print
          </a>
        </div>

        {/* Address Bar */}
        <div style={{ padding: 4 }}>
          <span
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: 12,
              marginRight: 6,
            }}
          >
            Address:
          </span>
          <span
            className="bevel-in"
            style={{
              display: "inline-block",
              padding: "2px 8px",
              fontSize: 12,
              fontFamily: "Arial, sans-serif",
              width: "80%",
              background: "#ffffff",
            }}
          >
            http://www.my-homepage.com/~user/index.html
          </span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="bevel-out" style={{ padding: 15 }}>
        <center>
          <h1 style={{ fontSize: 28, marginBottom: 0 }}>
            Welcome to My Home Page!
          </h1>
          <p className="marquee-text" style={{ fontSize: 16 }}>
            ★ Your #1 Source for Information on the 'Net! ★
          </p>
          <img
            src={constructionImg}
            alt="Under Construction"
            style={{ width: 64, height: 64 }}
          />
          <br />
          <span style={{ fontSize: 11, fontFamily: "Arial, sans-serif" }}>
            🚧 This site is under construction! 🚧
          </span>
        </center>

        <hr className="retro" />

        <h2 style={{ fontSize: 20 }}>About Me</h2>
        <p>
          Hi there! My name is <b>Dave</b> and I'm a computer enthusiast from
          Portland, Oregon. I built this page using Notepad and a 28.8k modem.
          I enjoy programming in C++, collecting shareware, and browsing the
          World Wide Web.
        </p>

        <hr className="retro" />

        <h2 style={{ fontSize: 20 }}>Cool Links</h2>
        <ul style={{ listStyleType: "square" }}>
          <li>
            <a href="#">Yahoo! - The Internet Directory</a>
          </li>
          <li>
            <a href="#">Netscape Communications</a>
          </li>
          <li>
            <a href="#">The Encyclopaedia Britannica Online</a>
          </li>
          <li>
            <a href="#">Download.com - Free Shareware</a>
          </li>
          <li>
            <a href="#">Altavista Search Engine</a>
          </li>
          <li>
            <a href="#">The Internet Movie Database</a>
          </li>
        </ul>

        <hr className="retro" />

        <h2 style={{ fontSize: 20 }}>My Interests</h2>
        <table
          border={1}
          cellPadding={5}
          cellSpacing={0}
          style={{ borderCollapse: "collapse", width: "100%" }}
        >
          <tbody>
            <tr style={{ background: "#000080", color: "#ffffff" }}>
              <td>
                <b>Topic</b>
              </td>
              <td>
                <b>Description</b>
              </td>
            </tr>
            <tr style={{ background: "#ffffff" }}>
              <td>Computers</td>
              <td>
                Building PCs, Windows 95, DOS gaming
              </td>
            </tr>
            <tr style={{ background: "#e0e0e0" }}>
              <td>Music</td>
              <td>
                MIDI files, CD-ROMs, Winamp playlists
              </td>
            </tr>
            <tr style={{ background: "#ffffff" }}>
              <td>Science</td>
              <td>
                Space exploration, physics papers, SETI@home
              </td>
            </tr>
            <tr style={{ background: "#e0e0e0" }}>
              <td>Programming</td>
              <td>
                C++, Visual Basic, HTML tutorials
              </td>
            </tr>
          </tbody>
        </table>

        <hr className="retro" />

        <h2 style={{ fontSize: 20 }}>Guestbook</h2>
        <p>
          Please sign my{" "}
          <a href="#">
            <b>Guestbook</b>
          </a>
          ! I'd love to hear from you. You can also reach me at{" "}
          <a href="mailto:dave@my-homepage.com">dave@my-homepage.com</a>.
        </p>

        {/* Navigation Buttons */}
        <center style={{ marginTop: 15 }}>
          <a href="#" className="retro-btn" style={{ marginRight: 6 }}>
            🏠 Home
          </a>
          <a href="#" className="retro-btn" style={{ marginRight: 6 }}>
            📧 E-mail
          </a>
          <a href="#" className="retro-btn" style={{ marginRight: 6 }}>
            🔍 Search
          </a>
          <a href="#" className="retro-btn" style={{ marginRight: 6 }}>
            📚 Links
          </a>
          <a href="#" className="retro-btn">
            ❓ FAQ
          </a>
        </center>

        <hr className="retro" />

        <center>
          <img
            src={counterImg}
            alt="Visitor Counter"
            style={{ width: 200, height: "auto" }}
          />
          <br />
          <br />
          <small
            style={{ fontFamily: "Arial, sans-serif", fontSize: 10 }}
          >
            Best viewed with Netscape Navigator 2.0 at 800x600 resolution.
            <br />
            Made with Notepad. No frames used on this site.
            <br />
            ©1996 Dave's Home Page. All rights reserved.
            <br />
            Last updated: November 14, 1996
          </small>
        </center>
      </div>

      {/* Status Bar */}
      <div
        className="bevel-in"
        style={{
          padding: "3px 10px",
          fontSize: 12,
          marginTop: 4,
          fontFamily: "Arial, sans-serif",
        }}
      >
        Document: Done.
      </div>
    </div>
  );
};

export default Index;
