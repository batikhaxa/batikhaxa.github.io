import catWaveImg from "@/assets/cat-wave.gif";
import pawIcon from "@/assets/paw-icon.png";
import dividerImg from "@/assets/divider.gif";
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
            ~*~*~*~*~*~*~*~*~*~*~*~*~*~*~
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
            OMG u actually found the secret INDA page?!{" "}
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
            ★ ~ pLz dOnT tElL tHe oThErS ~ ★
          </p>

          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
            <img src={coderTypingImg} alt="Coder typing" style={{ width: 80 }} />
            <img src={catWaveImg} alt="Cute cat" style={{ width: 150, height: 150 }} />
            <img src={coderSignImg} alt="Coder at work" style={{ width: 80 }} />
          </div>
          <br />
          <span
            style={{
              fontSize: 14,
              fontFamily: "'Comic Sans MS', cursive",
              color: "#ff1493",
              fontWeight: "bold",
            }}
          >
            hiiiiii coder!!! 🐾
          </span>
        </center>

        <CatDivider />

        <p style={{ fontFamily: "'Comic Sans MS', cursive", fontSize: 13 }}>
          om du kan läsa detta betyder det att du faktiskt lyckades ta dig in på denna super-hemliga lilla web page... vilket tyvärr också betyder att du nu är kvalificerad för vidare prövning!!!
        </p>
        <p style={{ fontFamily: "'Comic Sans MS', cursive", fontSize: 13 }}>
          Eftersom du kunde lösa uppgiften och hitta hit finns det inte längre någon ursäkt som
          <br />
          <b>"oj jag råkade bara få rätt"</b>
          <br />
          eller
          <br />
          <b>"det var nog c(h)atten som gjorde allt"</b>
        </p>
        <p style={{ fontFamily: "'Comic Sans MS', cursive", fontSize: 13, fontWeight: "bold", color: "#ff1493" }}>
          NOPE!!!
        </p>
        <p style={{ fontFamily: "'Comic Sans MS', cursive", fontSize: 13 }}>
          för att säkerställa att INDA:s studenter verkligen besitter de mystiska och uråldriga kunskaper de förväntas ha samlat på sig under kursens gång har det med mycket kort varsel beslutats att en
        </p>
        <center>
          <h2
            style={{
              fontSize: 22,
              fontFamily: "'Comic Sans MS', cursive",
              color: "#ff1493",
            }}
          >
            !!! OBLIGATORISK TENTA !!!
          </h2>
        </center>
        <p style={{ fontFamily: "'Comic Sans MS', cursive", fontSize: 13 }}>
          måste äga rum.
        </p>

        <CatDivider />

        <h2
          style={{
            fontSize: 20,
            fontFamily: "'Comic Sans MS', cursive",
            color: "#ff1493",
          }}
        >
          🐾 tEnTa iNfO
        </h2>
        <table cellPadding={4} cellSpacing={0} style={{ width: "100%" }}>
          <tbody>
            <tr><td><PawBullet /><b>Plats:</b> META</td></tr>
            <tr><td><PawBullet /><b>Datum:</b> 19 maj</td></tr>
            <tr><td><PawBullet /><b>Tid:</b> 17:00</td></tr>
            <tr><td><PawBullet /><b>Dress code:</b> ovve + något kattigt<br /><span style={{ fontSize: 11, color: "#ff69b4" }}>(ears? tail? suspicious whiskers? u decide...)</span></td></tr>
          </tbody>
        </table>

        <CatDivider />

        <h2
          style={{
            fontSize: 20,
            fontFamily: "'Comic Sans MS', cursive",
            color: "#ff1493",
          }}
        >
          🥤 dRyCkEs moDuLe
        </h2>
        <table cellPadding={4} cellSpacing={0} style={{ width: "100%" }}>
          <tbody>
            <tr><td><PawBullet /><b>Alkfri:</b> secret</td></tr>
            <tr><td><PawBullet /><b>Alkfull:</b> also secret</td></tr>
            <tr><td><span style={{ fontSize: 11, color: "#ff69b4" }}>(details on separate page bc technology has limits)</span></td></tr>
          </tbody>
        </table>

        <CatDivider />

        <h2
          style={{
            fontSize: 20,
            fontFamily: "'Comic Sans MS', cursive",
            color: "#ff1493",
          }}
        >
          ⚠️ vIkTiGt mEdDeLaNdE
        </h2>
        <p style={{ fontFamily: "'Comic Sans MS', cursive", fontSize: 13 }}>
          Pga lokalbrist var META den enda plats som gick att boka för denna ytterst seriösa examination.
          <br />
          Detta är helt normalt och inte alls märkligt.
          <br />
          Detta är absolut en tenta och inte en sittning.
          <br />
          <b style={{ color: "#ff1493" }}>please do not investigate further.</b>
        </p>

        <CatDivider />

        <h2
          style={{
            fontSize: 20,
            fontFamily: "'Comic Sans MS', cursive",
            color: "#ff1493",
          }}
        >
          📝 fInAl nOtE
        </h2>
        <p style={{ fontFamily: "'Comic Sans MS', cursive", fontSize: 13 }}>
          Du har redan klarat första testet genom att hitta hit.
          <br />
          Nu återstår bara att bevisa att du kan överleva resten.
        </p>
        <center>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 12, margin: "10px 0" }}>
            <img src={catFaceImg} alt="" style={{ width: 28 }} />
            <img src={coderTypingImg} alt="" style={{ width: 60 }} />
            <img src={catFaceImg} alt="" style={{ width: 28 }} />
          </div>
          <p style={{ fontFamily: "'Comic Sans MS', cursive", fontSize: 15, fontWeight: "bold", color: "#ff1493" }}>
            good luck!!
            <br />
            u will probably need it
          </p>
        </center>

        <CatDivider />

        <center>
          <a href="/exam" style={{ display: "inline-flex", alignItems: "center" }}>
            <img src="https://text.glitter-graphics.net/tpurp/g.gif" alt="g" style={{ border: 0 }} />
            <img src="https://text.glitter-graphics.net/tpurp/a.gif" alt="a" style={{ border: 0 }} />
            <img src="https://text.glitter-graphics.net/tpurp/m.gif" alt="m" style={{ border: 0 }} />
            <img src="https://text.glitter-graphics.net/tpurp/l.gif" alt="l" style={{ border: 0 }} />
            <img src="https://text.glitter-graphics.net/tpurp/a.gif" alt="a" style={{ border: 0 }} />
            <img src="https://dl3.glitter-graphics.net/empty.gif" alt="" style={{ width: 20, border: 0 }} />
            <img src="https://text.glitter-graphics.net/tpurp/t.gif" alt="t" style={{ border: 0 }} />
            <img src="https://text.glitter-graphics.net/tpurp/e.gif" alt="e" style={{ border: 0 }} />
            <img src="https://text.glitter-graphics.net/tpurp/n.gif" alt="n" style={{ border: 0 }} />
            <img src="https://text.glitter-graphics.net/tpurp/t.gif" alt="t" style={{ border: 0 }} />
            <img src="https://text.glitter-graphics.net/tpurp/o.gif" alt="o" style={{ border: 0 }} />
            <img src="https://text.glitter-graphics.net/tpurp/r.gif" alt="r" style={{ border: 0 }} />
          </a>
        </center>

        <CatDivider />

        <center>
          <p
            style={{
              fontSize: 11,
              fontFamily: "'Comic Sans MS', cursive",
              color: "#ff1493",
              letterSpacing: 1,
            }}
          >
            ~*~*~*~*~*~*~*~*~*~*~*~*~*~*~
          </p>
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
            made with luv and notepad 💕 <img src={catFaceImg} alt="" style={{ width: 18, verticalAlign: "middle" }} />
            <br />
            ©2002 ~*INDA*~ all rights reserved meow~
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
