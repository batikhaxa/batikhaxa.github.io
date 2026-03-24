import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import catWaveImg from "@/assets/cat-wave.gif";
import dividerImg from "@/assets/divider.gif";

const AsciiDivider = () => (
  <div className="ascii-divider">
    ═══════════════════════════════════════════════════
  </div>
);

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
      <span style={{ fontSize: 11, display: "block", textAlign: "center", marginBottom: 2, color: "var(--terminal-dim)" }}>
        {"// connection #"}
      </span>
      <div style={{ display: "inline-flex", background: "#000", padding: "4px 6px", border: "1px solid #1a3a1a" }}>
        {digits.split("").map((d, i) => (
          <span
            key={i}
            style={{
              color: "var(--terminal-green)",
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: 22,
              fontWeight: "bold",
              width: 16,
              textAlign: "center",
              textShadow: "0 0 6px var(--terminal-green)",
            }}
          >
            {count === null ? "-" : d}
          </span>
        ))}
      </div>
    </div>
  );
};

const Section = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <>
    <AsciiDivider />
    <h2 style={{ fontSize: 22, color: "var(--terminal-green)", marginBottom: 8 }} className="glow-text">
      [{label}]
    </h2>
    {children}
  </>
);

const Index = () => {
  return (
    <div style={{ maxWidth: 700, margin: "0 auto" }} className="terminal-flicker">
      {/* Terminal Window */}
      <div className="terminal-window">
        {/* Title Bar */}
        <div className="terminal-titlebar">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
          <span style={{ marginLeft: 8 }}>root@inda-kursledningen:~/exam</span>
        </div>

        {/* Content */}
        <div style={{ padding: "20px 24px" }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 20 }}>
            <p style={{ fontSize: 11, color: "var(--terminal-dim)", letterSpacing: 3 }}>
              ::::::::::::::::::::::::::::::::::::::::::::::::::::
            </p>

            <h1 style={{ fontSize: 28, color: "var(--terminal-red)", marginBottom: 6 }} className="glow-red">
              !!! OBLIGATORISK TENTA I INDA:n !!!
            </h1>

            <p style={{ fontSize: 13, color: "var(--terminal-yellow)" }} className="glow-yellow">
              (AUTHORIZED ACCESS ONLY – du är redan suspect…)
            </p>

            <img
              src={catWaveImg}
              alt="cat"
              style={{ width: 140, height: 140, marginTop: 12, filter: "hue-rotate(90deg) saturate(0.8)" }}
            />
          </div>

          <Section label="SYSTEM MESSAGE">
            <p className="glow-text" style={{ fontWeight: "bold", fontSize: 16 }}>
              ACCESS GRANTED.
            </p>
            <p>
              Om du kan läsa detta har du redan lyckats ta dig förbi vår lilla
              "icke-obligatoriska" koduppgift. Detta innebär att du antingen:
            </p>
            <pre style={{ color: "var(--terminal-yellow)", marginLeft: 16, fontSize: 13 }}>
{`(a) besitter faktisk kompetens
(b) har använt otillåtna resurser
(c) är mycket envis`}
            </pre>
            <p>
              Oavsett vilket krävs nu <span className="glow-red">VERIFIERING</span>.
            </p>
          </Section>

          <Section label="ANNOUNCEMENT">
            <p>Med kort varsel har kursledningen beslutat att införa en</p>
            <p style={{ fontSize: 22, textAlign: "center", margin: "12px 0" }} className="glow-red">
              OBLIGATORISK TENTA
            </p>
            <p>
              för att säkerställa att samtliga studenter inte enbart förlitat sig på{" "}
              <span style={{ color: "var(--terminal-red)" }}>CHATGPT</span>,{" "}
              <span style={{ color: "var(--terminal-red)" }}>c(h)atten</span>, eller andra
              suspekta entiteter utan faktiskt kan skriva kod med egna fingrar.
            </p>
          </Section>

          <Section label="EXAM PROTOCOL">
            <table cellPadding={4} cellSpacing={0} style={{ width: "100%", fontSize: 13 }}>
              <tbody>
                <tr>
                  <td style={{ color: "var(--terminal-yellow)", width: 80 }}>Plats:</td>
                  <td>META <span style={{ color: "var(--terminal-dim)" }}>(enda bokningsbara lokal. fråga inte.)</span></td>
                </tr>
                <tr>
                  <td style={{ color: "var(--terminal-yellow)" }}>Datum:</td>
                  <td>19 MAJ</td>
                </tr>
                <tr>
                  <td style={{ color: "var(--terminal-yellow)" }}>Tid:</td>
                  <td>17:00 SHARP <span style={{ color: "var(--terminal-dim)" }}>(late arrivals = segmentation fault)</span></td>
                </tr>
              </tbody>
            </table>

            <p style={{ marginTop: 12, color: "var(--terminal-yellow)" }}>Klädsel:</p>
            <pre style={{ marginLeft: 16, fontSize: 13 }}>
{`> Ovve (required)
> Något kattigt (interpret freely. creativity bonus may apply.)`}
            </pre>
          </Section>

          <Section label="REFRESHMENTS MODULE">
            <pre style={{ fontSize: 13 }}>
{`Alkfri:  ???
Alkfull: ???`}
            </pre>
            <p style={{ color: "var(--terminal-dim)", fontSize: 12 }}>
              {"// Details will be revealed in a future patch."}
            </p>
          </Section>

          <Section label="IMPORTANT NOTE">
            <p>
              På grund av lokalbrist har META allokerats för denna examination.
            </p>
            <p>Detta är fullt normalt.</p>
            <p className="glow-red" style={{ fontWeight: "bold" }}>
              Detta är inte en fest.
            </p>
            <p className="glow-red" style={{ fontWeight: "bold", fontSize: 16 }}>
              Repeat: DETTA ÄR INTE EN FEST.
            </p>
          </Section>

          <Section label="FINAL MESSAGE">
            <p>Du har redan klarat första testet genom att hitta hit.</p>
            <p>Nästa steg är att överleva tentan.</p>
            <p style={{ textAlign: "center", fontSize: 20, margin: "16px 0" }} className="glow-text cursor-blink">
              GOOD LUCK.
            </p>
            <p style={{ textAlign: "center", color: "var(--terminal-dim)", fontSize: 13 }}>
              (you will need it)
            </p>
          </Section>

          <AsciiDivider />

          <CatDivider />

          <div style={{ textAlign: "center", marginTop: 16 }}>
            <VisitorCounter />
            <br /><br />
            <small style={{ fontSize: 10, color: "var(--terminal-dim)" }}>
              ~~ best viewed in a dark room at 3am ~~
              <br />
              compiled with gcc and desperation
              <br />
              © 2025 kursledningen | all rights reserved
            </small>
          </div>
        </div>
      </div>

      {/* Status line */}
      <div style={{ padding: "4px 12px", fontSize: 11, color: "var(--terminal-dim)", marginTop: 4 }}>
        <span className="terminal-prompt">process exited with code 0</span>
      </div>
    </div>
  );
};

export default Index;
