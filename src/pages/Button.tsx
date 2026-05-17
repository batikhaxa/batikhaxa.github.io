import { useEffect, useState } from "react";
import redButtonImg from "@/assets/red_button.gif";

const ButtonPage = () => {
  const [state, setState] = useState<"idle" | "loading" | "finished">("idle");

  useEffect(() => {
    if (state !== "loading") return;
    const timer = window.setTimeout(() => setState("finished"), 5000);
    return () => window.clearTimeout(timer);
  }, [state]);

  return (
    <div style={{ maxWidth: 640, margin: "0 auto" }}>
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
          🐱 /button ~ Microsoft Internet Explorer
        </div>
        <div style={{ padding: 4, borderBottom: "1px solid #808080", fontWeight: "normal" }}>
          <a href="/" className="retro-btn" style={{ marginRight: 4 }}>
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
      </div>

      <div
        className="bevel-out"
        style={{
          padding: 16,
          minHeight: 360,
          background: state === "idle" ? "#ffffff" : "#000000",
          color: state === "idle" ? "#000000" : "#ffffff",
        }}
      >
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>

        {state === "idle" ? (
          <div style={{ textAlign: "center" }}>
            <img
              src={redButtonImg}
              alt="Commence Tentamen"
              style={{ cursor: "pointer", maxWidth: 320, width: "100%" }}
              onClick={() => setState("loading")}
            />
            <div
              style={{
                marginTop: 12,
                fontFamily: "'Comic Neue', 'Comic Sans MS', cursive",
                fontSize: 18,
                color: "#ff1493",
                fontWeight: "bold",
              }}
            >
              commence tentamen
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 320,
            }}
          >
            {state === "loading" ? (
              <>
                <div
                  style={{
                    width: 72,
                    height: 72,
                    border: "8px solid #333",
                    borderTop: "8px solid #fff",
                    borderRadius: "50%",
                    animation: "spin 1s linear infinite",
                  }}
                />
                <div style={{ marginTop: 20, fontSize: 18, fontFamily: "Arial, sans-serif" }}>
                  loading
                </div>
              </>
            ) : (
              <div
                style={{
                  fontSize: 36,
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  textAlign: "center",
                }}
              >
                finished uploading
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ButtonPage;