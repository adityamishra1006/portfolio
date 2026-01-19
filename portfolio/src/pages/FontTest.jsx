export default function FontTest() {
    return (
        <div style={{ padding: "40px" }}>
            <h1 className="force-clash" style={{ fontSize: "64px" }}>
                Clash Display FORCED
            </h1>

            <p style={{ fontFamily: "Inter", fontSize: "18px" }}>
                Inter body text
            </p>

            <p className="force-mono" style={{ fontSize: "14px" }}>
                JetBrains Mono FORCED
            </p>
        </div>
    );
}
