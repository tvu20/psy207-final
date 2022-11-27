import "./style.css";

export const Treatments = () => {
  return (
    <div className="banner-container" style={{ backgroundColor: "#e0dad7" }}>
      <h3 style={{ color: "#4d3f3a" }}>Suggested Treatment Plan</h3>
      <p className="banner__text" style={{ marginBottom: "80px" }}>
        The most common treatment plan for bipolar disorder is to prescribe
        medications, primarily mood stabilizers often coupled with
        antidepressants or other drugs, and ongoing therapy. <br />
        <br />
        Mood stabilizers are the most commonly prescribed medication for bipolar
        disorder, the most popular being lithium. Other common mood stabilizers
        include carbamazepine and valproate, and sometimes a combination of
        drugs are prescribed. Determining the correct dosage requires regular
        analyses of blood, urine, and other lab tests (Comer & Comer, 2018).
        Some patients respond best to a combination of mood stabilizers and
        atypical antipsychotic drugs — in Fisher’s case, since she experienced
        psychosis during her manic episodes, this would be a potential treatment
        plan for her.
        <br />
        <br />
        Another form of treatment is electroconvulsive therapy, or ECT. During
        sessions, rounds of a brief electric current are applied to the scalp
        while the patient is under anesthesia, leading to a short, controlled
        seizure. ECT has primarily been shown to help reduce depressive episodes
        (American Psychiatric Association, 2019). <br />
        <br />
        According to the American Psychiatric Association, ongoing preventative
        treatment is recommended alongside medication. This primarily includes
        therapy to encourage the patient to continue their treatment and
        medication (American Psychiatric Association, 2021). Over 60% of
        patients with mania improve with medications, but the risk of relapse is
        28 times higher if the patient stops taking their mood stabilizers.
        Around 30% of patients with bipolar disorder don’t respond to lithium,
        may not receive the correct dose, or may stop taking medications
        voluntarily, often due to not wanting their manic episodes to end.
        Therefore, clinicians often continue patients on some level of mood
        stabilizers even after manic episodes subside (Comer & Comer, 2018).{" "}
        <br />
        <br />
        Clinicians also often provide family therapy alongside therapy for the
        patient to improve relationships affected by episodes and to educate
        family members. Fisher described having a strong support and was very
        close to her family members. In particular, her daughter while growing
        up learned how to detect the signs that Fisher was approaching a manic
        episode (Stephens, 2020b).
      </p>
      <h3 style={{ color: "#4d3f3a", marginBottom: "20px" }}>Side Effects</h3>
      <div className="table-container">
        <div className="table-item table-item-left">
          <h4>Positive</h4>
          <p className="banner__text">
            Lithium and other mood stabilizers have proved to be effective in
            the reduction and prevention of manic episodes. They have also been
            shown to help reduce the risk of future depressive episodes and
            future suicide attempts (Comer & Comer, 2018).
            <br />
            <br />
            ECT has been found to be highly effective for the relief of major
            depressive episodes (American Psychiatric Association, 2019). <br />
            <br />
            Adjunct therapy has been shown to double the likelihood that bipolar
            individuals will continue to take medications properly, and reduce
            hospitalizations while improving social functioning. Family therapy
            helps educate family members on bipolar disorder and can help solve
            tensions and problems caused by the disorder (Comer & Comer, 2018).
          </p>
        </div>
        <div className="table-item">
          <h4>Negative</h4>
          <p className="banner__text">
            The most common negative side effects of lithium include feeling
            sick, diarrhea, vomiting, and dry mouth (Bhandari, 2022). Another
            common side effect of lithium is weight gain, which was mentioned by
            Fisher as something that greatly affected her due to her role in the
            entertainment industry and how she was perceived by the public
            (Stephens, 2020a).
            <br />
            <br />
            ECT, though generally regarded as a safe process, has been shown to
            cause nausea, headache, fatigue, confusion, and minor memory loss,
            usually concentrated around the few hours before and after the
            session (American Psychiatry Association, 2019).
          </p>
        </div>
      </div>
    </div>
  );
};
