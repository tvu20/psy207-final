import "./style.css";

export const Diagnosis = () => {
  return (
    <div className="banner-container" style={{ backgroundColor: "#7d7272" }}>
      <h3 style={{ color: "#edd8c2" }}>Known Diagnosis: Bipolar I Disorder</h3>
      <p style={{ color: "#fffaf5" }}>
        According to the American Psychiatric Association, bipolar disorder is a
        disorder that causes changes in mood, energy, and ability to function.
        People with bipolar disorder experience mood swings between
        manic/hypomanic episodes (causing emotional high) and depressive
        episodes (causing emotional low). There are three different categories
        of bipolar disorder: bipolar I, bipolar II, and cyclothymic disorder.
        <br />
        <br />
        Carrie Fisher had bipolar I disorder, which is diagnosed when a patient
        experiences a manic episode that may be preceded or followed by
        depressive episodes. In some cases, the manic episode causes the patient
        to experience psychotic features (American Psychiatric Association,
        2021).
      </p>
    </div>
  );
};
