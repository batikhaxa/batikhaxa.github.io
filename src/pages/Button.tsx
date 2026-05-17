import { useEffect, useState } from "react";
import dividerImg from "@/assets/divider.gif";
import pawIcon from "@/assets/paw-icon.png";
import redButtonImg from "@/assets/red_button.gif";
import warningGif from "@/assets/warning.gif";

const comicSans = { fontFamily: "'Comic Neue', 'Comic Sans MS', cursive" } as const;

const CatDivider = () => (
  <div style={{ textAlign: "center", margin: "12px 0" }}>
    <img src={dividerImg} alt="" style={{ width: "100%", maxWidth: 400, height: "auto" }} />
  </div>
);

const LoadingScreen = () => {
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setFinished(true), 5000);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#000000",
        color: "#ffffff",
      }}
    >
      <style>
        {`
          @keyframes button-upload-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
      {finished ? (
        <h1
          style={{
            margin: 0,
            fontFamily: "Arial, Helvetica, sans-serif",
            fontSize: "clamp(44px, 10vw, 128px)",
            fontWeight: 900,
            letterSpacing: 0,
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          finished uploading
        </h1>
      ) : (
        <div
          aria-label="loading"
          style={{
            width: 96,
            height: 96,
            border: "12px solid #222222",
            borderTopColor: "#ffffff",
            borderRadius: "50%",
            animation: "button-upload-spin 0.8s linear infinite",
          }}
        />
      )}
    </div>
  );
};

const ButtonPage = () => {
  const [hasStarted, setHasStarted] = useState(false);

  if (hasStarted) {
    return <LoadingScreen />;
  }

  return (
    <div style={{ maxWidth: 640, margin: "0 auto" }}>
      <div className="bevel-out" style={{ marginBottom: 20 }}>
        <div style={{ background: "#000080", color: "#ffffff", fontFamily: "Arial, Helvetica, sans-serif", fontSize: 13, fontWeight: "bold", padding: "3px 6px" }}>
          exam upload control - Microsoft Internet Explorer
        </div>
        <div style={{ padding: 4, borderBottom: "1px solid #808080" }}>
          <a href="/" className="retro-btn" style={{ marginRight: 4 }}>Back to secret page</a>
          <a href="#" className="retro-btn" style={{ marginRight: 4 }}>Forward</a>
          <a href="/" className="retro-btn" style={{ marginRight: 4 }}>Home</a>
          <a href="#" className="retro-btn" style={{ marginRight: 4 }}>Reload</a>
        </div>
        <div style={{ padding: 4 }}>
          <span style={{ fontFamily: "Arial, sans-serif", fontSize: 12, marginRight: 6 }}>Address:</span>
          <span className="bevel-in" style={{ display: "inline-block", padding: "2px 8px", fontSize: 12, fontFamily: "Arial, sans-serif", width: "80%", background: "#ffffff" }}>
            http://www.geocities.com/Heartland/Meadows/8742/tentamen_button.html
          </span>
        </div>
      </div>

      <div className="bevel-out" style={{ padding: 15 }}>
        <center>
          <p style={{ ...comicSans, fontSize: 11, color: "#ff1493", letterSpacing: 1 }}>
            ~*~*~*~*~*~*~*~*~*~*~*~*~*~*~
          </p>
          <h1 style={{ fontSize: 26, fontFamily: "'Comic Neue', 'Comic Sans MS', cursive", color: "#ff1493", marginBottom: 4 }}>
            <img src={pawIcon} alt="" style={{ width: 28, height: 28 }} />{" "}
            <img src={warningGif} alt="warning" style={{ width: 20, height: 20 }} /> WaRnInG <img src={warningGif} alt="warning" style={{ width: 20, height: 20 }} /> 
            !! TENTAMEN UPLOAD ZONE !!{" "}
            <img src={pawIcon} alt="" style={{ width: 28, height: 28 }} />
          </h1>
        </center>

        <CatDivider />

        <center>
          <button
            type="button"
            onClick={() => setHasStarted(true)}
            style={{
              appearance: "none",
              border: 0,
              padding: 0,
              margin: "18px 0 8px",
              background: "transparent",
              cursor: "pointer",
            }}
            aria-label="commence tentamen"
          >
            <img src={redButtonImg} alt="commence tentamen" style={{ display: "block", maxWidth: "50%", height: "auto" }} />
          </button>
          <p style={{ ...comicSans, margin: "0 0 12px", fontSize: 22, color: "#ff0000" }}>
            COMMENCE TENTAMEN
          </p>
        </center>

        <CatDivider />

        <center>
          <small style={{ ...comicSans, fontSize: 10, color: "#ff69b4" }}>
            ~*~ push only when supervised by the professor ~*~
          </small>
        </center>
      </div>

      <div className="bevel-in" style={{ padding: "3px 10px", fontSize: 12, marginTop: 4, fontFamily: "Arial, sans-serif" }}>
        Done
      </div>
    </div>
  );
};

export default ButtonPage;
