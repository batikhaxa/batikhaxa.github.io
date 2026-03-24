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
              fontSize: 22,
              fontFamily: "'Comic Sans MS', cursive",
              color: "#ff1493",
              marginBottom: 4,
            }}
          >
            <img src={pawIcon} alt="" style={{ width: 28, height: 28 }} />{" "}
            !!! OBLIGATORISK TENTA I INDA:n !!!{" "}
            <img src={pawIcon} alt="" style={{ width: 28, height: 28 }} />
          </h1>

          <p
            style={{
              fontSize: 12,
              fontFamily: "'Comic Sans MS', cursive",
              color: "#ff69b4",
              marginBottom: 8,
            }}
          >
            (AUTHORIZED ACCESS ONLY – du är redan suspect…)
          </p>

          <img
            src={catWaveImg}
            alt="Cute cat"
            style={{ width: 150, height: 150 }}
          />
        </center>

        <CatDivider />

        <h2
          style={{
            fontSize: 18,
            fontFamily: "'Comic Sans MS', cursive",
            color: "#ff1493",
          }}
        >
          🐱 [SYSTEM MESSAGE]
        </h2>
        <p style={{ fontFamily: "'Comic Sans MS', cursive", fontSize: 13, fontWeight: "bold", color: "#ff1493" }}>
          ACCESS GRANTED.
        </p>
        <p style={{ fontFamily: "'Comic Sans MS', cursive", fontSize: 13 }}>
          Om du kan läsa detta har du redan lyckats ta dig förbi vår lilla "icke-obligatoriska" koduppgift.
          Detta innebär att du antingen:
        </p>
        <p style={{ fontFamily: "'Comic Sans MS', cursive", fontSize: 13, paddingLeft: 16 }}>
          (a) besitter faktisk kompetens<br />
          (b) har använt otillåtna resurser<br />
          (c) är mycket envis
        </p>
        <p style={{ fontFamily: "'Comic Sans MS', cursive", fontSize: 13 }}>
          Oavsett vilket krävs nu <b>VERIFIERING</b>.
        </p>

        <CatDivider />

        <h2
          style={{
            fontSize: 18,
            fontFamily: "'Comic Sans MS', cursive",
            color: "#ff1493",
          }}
        >
          🐾 [ANNOUNCEMENT]
        </h2>
        <p style={{ fontFamily: "'Comic Sans MS', cursive", fontSize: 13 }}>
          Med kort varsel har kursledningen beslutat att införa en
        </p>
        <p style={{ fontFamily: "'Comic Sans MS', cursive", fontSize: 18, fontWeight: "bold", color: "#ff1493", textAlign: "center" }}>
          OBLIGATORISK TENTA
        </p>
        <p style={{ fontFamily: "'Comic Sans MS', cursive", fontSize: 13 }}>
          för att säkerställa att samtliga studenter inte enbart förlitat sig på
          <b> CHATGPT</b>, <b>c(h)atten</b>, eller andra suspekta entiteter
          utan faktiskt kan skriva kod med egna fingrar.
        </p>

        <CatDivider />

        <h2
          style={{
            fontSize: 18,
            fontFamily: "'Comic Sans MS', cursive",
            color: "#ff1493",
          }}
        >
          🌟 [EXAM PROTOCOL]
        </h2>
        <table cellPadding={4} cellSpacing={0} style={{ width: "100%", fontFamily: "'Comic Sans MS', cursive", fontSize: 13 }}>
          <tbody>
            <tr>
              <td><PawBullet /><b>Plats:</b></td>
              <td>META (enda bokningsbara lokal. fråga inte.)</td>
            </tr>
            <tr>
              <td><PawBullet /><b>Datum:</b></td>
              <td>19 MAJ</td>
            </tr>
            <tr>
              <td><PawBullet /><b>Tid:</b></td>
              <td>17:00 SHARP (late arrivals = segmentation fault)</td>
            </tr>
          </tbody>
        </table>

        <p style={{ fontFamily: "'Comic Sans MS', cursive", fontSize: 13, marginTop: 10 }}>
          <b>Klädsel:</b>
        </p>
        <p style={{ fontFamily: "'Comic Sans MS', cursive", fontSize: 13, paddingLeft: 16 }}>
          <PawBullet />Ovve (required)<br />
          <PawBullet />Något kattigt (interpret freely. creativity bonus may apply.)
        </p>

        <CatDivider />

        <h2
          style={{
            fontSize: 18,
            fontFamily: "'Comic Sans MS', cursive",
            color: "#ff1493",
          }}
        >
          🍹 [REFRESHMENTS MODULE]
        </h2>
        <p style={{ fontFamily: "'Comic Sans MS', cursive", fontSize: 13 }}>
          <PawBullet /><b>Alkfri:</b> ???<br />
          <PawBullet /><b>Alkfull:</b> ???
        </p>
        <p style={{ fontFamily: "'Comic Sans MS', cursive", fontSize: 11, color: "#ff69b4" }}>
          (Details will be revealed in a future patch.)
        </p>

        <CatDivider />

        <h2
          style={{
            fontSize: 18,
            fontFamily: "'Comic Sans MS', cursive",
            color: "#ff1493",
          }}
        >
          ⚠️ [IMPORTANT NOTE]
        </h2>
        <p style={{ fontFamily: "'Comic Sans MS', cursive", fontSize: 13 }}>
          På grund av lokalbrist har META allokerats för denna examination.<br />
          Detta är fullt normalt.<br />
          <b>Detta är inte en fest.</b><br />
          Repeat: <b>DETTA ÄR INTE EN FEST.</b>
        </p>

        <CatDivider />

        <h2
          style={{
            fontSize: 18,
            fontFamily: "'Comic Sans MS', cursive",
            color: "#ff1493",
          }}
        >
          📝 [FINAL MESSAGE]
        </h2>
        <p style={{ fontFamily: "'Comic Sans MS', cursive", fontSize: 13 }}>
          Du har redan klarat första testet genom att hitta hit.
        </p>
        <p style={{ fontFamily: "'Comic Sans MS', cursive", fontSize: 13 }}>
          Nästa steg är att överleva tentan.
        </p>
        <p style={{ fontFamily: "'Comic Sans MS', cursive", fontSize: 16, fontWeight: "bold", color: "#ff1493", textAlign: "center" }}>
          GOOD LUCK.<br />
          <span style={{ fontSize: 12, fontWeight: "normal" }}>(you will need it)</span>
        </p>

        <CatDivider />

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
            ©2002 ~*kursledningen*~ all rights reserved meow~
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
