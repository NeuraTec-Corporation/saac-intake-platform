const stages = [
  "Reception + visual intake",
  "Technical diagnosis",
  "Customer approval",
  "Parts request",
  "Repair / standby",
  "Closeout + QC",
];

export default function Home() {
  return (
    <main className="shell">
      <section className="hero">
        <p className="eyebrow">NeuraTec Corporation</p>
        <h1>SAAC Intake Platform</h1>
        <p className="subtitle">
          Modular vehicle intake, inspection, approval, parts, repair-status,
          and closeout workflow.
        </p>
      </section>

      <section className="panel">
        <div className="panelHeader">
          <div>
            <p className="eyebrow">Bootstrap status</p>
            <h2>Platform foundation active</h2>
          </div>
          <span className="status">INITIAL SCAFFOLD</span>
        </div>

        <div className="grid">
          {stages.map((stage, index) => (
            <article className="stage" key={stage}>
              <span className="number">{index + 1}</span>
              <div>
                <strong>{stage}</strong>
                <p>Independent module ready for controlled implementation.</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer>
        Secrets, credentials, and connection strings must remain outside the
        repository and be supplied only through environment variables.
      </footer>
    </main>
  );
}
