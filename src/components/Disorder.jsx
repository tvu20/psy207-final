import "./style.css";

import facts from "../images/bipolardiagnosis.png";
import ions from "../images/bipolarion.png";

export const Disorder = () => {
  return (
    <div
      className="background-container"
      style={{ margin: "50px 0", padding: "0 15px" }}
    >
      <div className="flex-container flex-container-2">
        <div className="flex-item__diagram">
          <img src={facts} alt="carrie fisher" />
          <figcaption>Figure 1: Diagnosing Bipolar Disorder</figcaption>
        </div>
        <div className="flex-item">
          <p style={{ margin: 0 }}>
            According to the DSM, a manic episode is a period of time in which,
            for at least a week, a person displays a continually abnormal,
            inflated, unrestrained, or irritable mood, as well as continually
            heightened energy or activity, for most of every day (Comer & Comer,
            2018). Additionally, the person must experience at least three of
            the following symptoms of mania, listed in Figure 1.
            <br />
            <br />
            Fisher was very open about her experience with manic episodes in her
            writings and interviews, and her described symptoms closely align
            with the DSM’s symptoms for categorizing a manic episode. In
            particular, Fisher described experiencing self-absorption, many
            sleepless nights, the drive to keep people up for hours talking to
            them on the phone, and losing focus during performances (Stephens,
            2020b). <br />
            <br />
            There are three main types of bipolar disorder, as listed in Figure
            1. For a patient to be diagnosed with bipolar I disorder, they must
            have a manic episode, and hypomanic or major depressive episodes may
            precede or follow the manic episode (Comer & Comer, 2018). Fisher
            did not mention the presence of hypomanic episodes, as she primarily
            experienced full manic episodes. However, she did describe many
            instances of depressive episodes throughout her life (Stephens,
            2020a). Fisher also mentioned that at least some of her manic
            episodes verged near psychotic breaks, a not uncommon characteristic
            of them (Stephens, 2020a).
            <br />
            <br />
            According to the National Alliance on Mental Illness, the average
            age of onset is about 25 years. Carrie Fisher was diagnosed with
            bipolar disorder at the age of 24 (NAMI, n.d.).
          </p>
        </div>
      </div>
      <div className="flex-container flex-container-2">
        <div className="flex-item">
          <p style={{ margin: 0 }}>
            According to <i>Abnormal Psychology, 10th ed.,</i> “Bipolar
            disorders appear to be best explained by a focus on one kind of
            variable - biological factors. The evidence suggests that biological
            abnormalities, perhaps inherited and perhaps triggered by life
            stress, cause bipolar disorders. Whatever roles other factors may
            play, the primary one appears to lie in this realm” (Comer & Comer,
            2018).
            <br />
            <br />
            According to her interview with bp Magazine, Fisher believed that
            her father had undiagnosed bipolar disorder, and that she likely
            inherited it from him (Stephens, 2020b). Bipolar disorder has been
            shown to have a strong genetic component — family pedigree studies
            have demonstrated that close relatives of people with bipolar
            disorder have a 5-10% likelihood of also developing the same
            disorder (Comer & Comer, 2018). Researchers have linked bipolar
            disorders to genes on a variety of different chromosomes, suggesting
            that a number of genes likely combine to cause bipolar disorder
            (Comer & Comer, 2018).
            <br />
            <br />
            The Behavioral Activation System (BAS) is a motivational system
            activated by seeking out rewards. Facets of the BAS that include
            placing high value on rewards and goal attainment, difficulties in
            reversing responses to previously rewarded cues, and sustained
            effort towards goals, have been identified as a vulnerability for
            bipolar disorder (Johnson et al., 2012). Fisher was diagnosed with
            bipolar disorder in the early years of her acting career, which may
            have potentially served as the goal-attainment events involved in
            the BAS.
            <br />
            <br />
            Other biological factors that have been identified as potential
            causes for bipolar disorders include unusual neurotransmitter and
            ion activity. Overactivity of norepinephrine and low serotonin
            activity have been linked to mania by various studies. The theorized
            relationship between these neurotransmitters is that low activity of
            serotonin permits the activity of norepinephrine, or other
            neurotransmitters, to determine what particular form a mood disorder
            will take. Low serotonin activity accompanied by low norepinephrine
            activity has been linked to depression; low serotonin activity
            accompanied by high norepinephrine activity may lead to mania (Comer
            & Comer, 2018).
            <br />
            <br />
            Ions play a critical role in relaying messages within a neuron by
            transmitting messages down a neuron’s axon to its axon terminal. The
            firing of neurons is regulated by the flow of sodium and potassium
            ions inside the neuron’s cell membrane, as displayed in Figure 2.
            Some studies suggest that among bipolar individuals, irregularities
            in ion activity cause neurons to either fire too much, causing
            mania, or to resist firing, causing depression (Comer & Comer,
            2018). <br />
          </p>
        </div>
        <div className="flex-item__diagram">
          <img src={ions} alt="carrie fisher" />
          <figcaption>Figure 2: Ion Transport in Neurons</figcaption>
        </div>
      </div>
    </div>
  );
};
