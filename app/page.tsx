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
          Digital vehicle intake, inspection, customer approval, parts and repair workflow.
        </p>
        <a href="/SAAC_Intake_Workflow_Demo_v5.html" style={{display:"inline-block",marginTop:"20px",padding:"15px 24px",borderRadius:"10px",background:"#0f172a",color:"#fff",fontWeight:800,textDecoration:"none"}}>
          Iniciar Demo — S&amp;A Auto Center
        </a>
      </section>

      <section className="panel">
        <div className="panelHeader">
          <div>
            <p className="eyebrow">Demo status</p>
            <h2>Functional workflow demo available</h2>
          </div>
          <span className="status">FUNCTIONAL DEMO</span>
        </div>
        <div className="grid">
          {stages.map((stage, index) => (
            <article className="stage" key={stage}>
              <span className="number">{index + 1}</span>
              <div><strong>{stage}</strong><p>Included in the functional process demonstration.</p></div>
            </article>
          ))}
        </div>
      </section>
      <footer>Demonstration environment — production integrations and customer data are not enabled.</footer>
    </main>
  );
}
