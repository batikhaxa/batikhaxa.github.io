import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import catWaveImg from "@/assets/cat-wave.gif";
import pawIcon from "@/assets/paw-icon.png";
import dividerImg from "@/assets/divider.gif";

const CatDivider = () => (
  <div style={{ textAlign: "center", margin: "12px 0" }}>
    <img src={dividerImg} alt="" style={{ width: "100%", maxWidth: 400, height: "auto" }} />
  </div>
);

const VisitorCounter = () => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    supabase.functions.invoke("visitor-counter").then(({ data }) => {
      if (data?.count != null) setCount(data.count);
    });
  }, []);

  const digits = String(count ?? 0).padStart(6, "0");

  return (
    <div style={{ display: "inline-block" }}>
      <span
        style={{
          fontFamily: "'Comic Sans MS', 'Comic Sans', cursive",
          fontSize: 11,
          display: "block",
          textAlign: "center",
          marginBottom: 2,
          color: "#ff69b4",
        }}
      >
        ~*~ You are kitty visitor #~*~
      </span>
      <div
        style={{
          display: "inline-flex",
          background: "#000000",
          padding: "4px 6px",
          border: "2px inset #808080",
        }}
      >
        {digits.split("").map((d, i) => (
          <span
            key={i}
            style={{
              color: "#ff69b4",
              fontFamily: "'Courier New', monospace",
              fontSize: 22,
              fontWeight: "bold",
              width: 16,
              textAlign: "center",
              textShadow: "0 0 6px #ff69b4",
            }}
          >
            {count === null ? "-" : d}
          </span>
        ))}
      </div>
    </div>
  );
};

const PawBullet = () => (
  <img
    src={pawIcon}
    alt="paw"
    style={{ width: 18, height: 18, verticalAlign: "middle", marginRight: 6 }}
    loading="lazy"
  />
);

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
          🐱 ~*~ sEcReT cAt PaGe ~*~ 🐱 - Microsoft Internet Explorer
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
            http://www.geocities.com/Heartland/Meadows/8742/secret_cats.html
          </span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="bevel-out" style={{ padding: 15 }}>
        <center>
          <p
            style={{
              fontSize: 11,
              fontFamily: "'Comic Sans MS', cursive",
              color: "#ff1493",
              letterSpacing: 1,
            }}
          >
            ~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~
          </p>

          <h1
            style={{
              fontSize: 26,
              fontFamily: "'Comic Sans MS', cursive",
              color: "#ff1493",
              marginBottom: 4,
            }}
          >
            <img src={pawIcon} alt="" style={{ width: 28, height: 28 }} />{" "}
            OMG how did u find my secret website?!{" "}
            <img src={pawIcon} alt="" style={{ width: 28, height: 28 }} />
          </h1>

          <p
            className="marquee-text"
            style={{
              fontSize: 14,
              fontFamily: "'Comic Sans MS', cursive",
              color: "#ff69b4",
            }}
          >
            ★ ~ tHiS iS mY sEcReT cAt PaGe ~ pLz DoNt TeLl AnYoNe ~ ★
          </p>

          <img
            src={catWaveImg}
            alt="Cute waving cat"
            style={{ width: 150, height: 150 }}
          />
          <br />
          <span
            style={{
              fontSize: 14,
              fontFamily: "'Comic Sans MS', cursive",
              color: "#ff1493",
              fontWeight: "bold",
            }}
          >
            meow~ i came to say hi!! 🐾
          </span>
        </center>

        <hr className="retro" />

        <h2
          style={{
            fontSize: 20,
            fontFamily: "'Comic Sans MS', cursive",
            color: "#ff1493",
          }}
        >
          🐱 AbOuT mE
        </h2>
        <p style={{ fontFamily: "'Comic Sans MS', cursive", fontSize: 13 }}>
          hiiii!! my name is <b>~*kittykat99*~</b> and im a HUGE cat lover!! 🐱💕
          i made this page on my moms computer when shes not looking lol.
          i have 3 cats named Whiskers, Mr. Fluffington, and Princess Meowmeow.
          they r the best cats in the WHOLE world!!!!!
        </p>

        <hr className="retro" />

        <h2
          style={{
            fontSize: 20,
            fontFamily: "'Comic Sans MS', cursive",
            color: "#ff1493",
          }}
        >
          🐾 My Fav Cat Links
        </h2>
        <table cellPadding={4} cellSpacing={0} style={{ width: "100%" }}>
          <tbody>
            <tr>
              <td>
                <PawBullet />
                <a href="#">Cat Secrets & Tips</a>
              </td>
            </tr>
            <tr>
              <td>
                <PawBullet />
                <a href="#">My Cat Photo Album!!</a>
              </td>
            </tr>
            <tr>
              <td>
                <PawBullet />
                <a href="#">How 2 Take Care of Ur Cat</a>
              </td>
            </tr>
            <tr>
              <td>
                <PawBullet />
                <a href="#">Cool Cat Websites Ring</a>
              </td>
            </tr>
            <tr>
              <td>
                <PawBullet />
                <a href="#">Fun Cat Games!!</a>
              </td>
            </tr>
            <tr>
              <td>
                <PawBullet />
                <a href="#">My Fav Cat Breeds 🐱</a>
              </td>
            </tr>
          </tbody>
        </table>

        <hr className="retro" />

        <h2
          style={{
            fontSize: 20,
            fontFamily: "'Comic Sans MS', cursive",
            color: "#ff1493",
          }}
        >
          🌟 My Cats!!
        </h2>
        <table
          border={1}
          cellPadding={5}
          cellSpacing={0}
          style={{ borderCollapse: "collapse", width: "100%" }}
        >
          <tbody>
            <tr style={{ background: "#ff69b4", color: "#ffffff" }}>
              <td>
                <b>Name</b>
              </td>
              <td>
                <b>Breed</b>
              </td>
              <td>
                <b>Personality</b>
              </td>
            </tr>
            <tr style={{ background: "#fff0f5" }}>
              <td>Whiskers</td>
              <td>Orange Tabby</td>
              <td>sleepy & cuddly 😴</td>
            </tr>
            <tr style={{ background: "#ffe4e1" }}>
              <td>Mr. Fluffington</td>
              <td>Persian</td>
              <td>fancy & dramatic 👑</td>
            </tr>
            <tr style={{ background: "#fff0f5" }}>
              <td>Princess Meowmeow</td>
              <td>Calico</td>
              <td>hyper & silly 🤪</td>
            </tr>
          </tbody>
        </table>

        <hr className="retro" />

        <h2
          style={{
            fontSize: 20,
            fontFamily: "'Comic Sans MS', cursive",
            color: "#ff1493",
          }}
        >
          📝 Guestbook
        </h2>
        <p style={{ fontFamily: "'Comic Sans MS', cursive", fontSize: 13 }}>
          plz sign my{" "}
          <a href="#">
            <b>guestbook</b>
          </a>
          !! tell me about YOUR cats!! 🐱💕
          <br />
          u can also email me at{" "}
          <a href="mailto:kittykat99@geocities.com">kittykat99@geocities.com</a>
          ~*~
        </p>

        {/* Navigation Buttons */}
        <center style={{ marginTop: 15 }}>
          <a href="#" className="retro-btn" style={{ marginRight: 6 }}>
            🏠 Home
          </a>
          <a href="#" className="retro-btn" style={{ marginRight: 6 }}>
            📧 E-mail Me!
          </a>
          <a href="#" className="retro-btn" style={{ marginRight: 6 }}>
            🐱 Cat Pics
          </a>
          <a href="#" className="retro-btn">
            🔗 Webrings
          </a>
        </center>

        <hr className="retro" />

        <center>
          <VisitorCounter />
          <br />
          <br />
          <small
            style={{
              fontFamily: "'Comic Sans MS', cursive",
              fontSize: 10,
              color: "#ff69b4",
            }}
          >
            ~*~ best viewed with Internet Explorer 5.0 at 800x600 ~*~
            <br />
            made with luv and notepad 💕
            <br />
            plz dont steal my cat pics!!!! 🙀
            <br />
            ©2002 ~*kittykat99*~ all rights reserved meow~
            <br />
            Last updated: March 17, 2002
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
        Done
      </div>
    </div>
  );
};

export default Index;
