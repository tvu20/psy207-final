import "./style.css";

export const Background = () => {
  return (
    <div className="background-container">
      <div className="background-container__quote">
        <h3>
          “At times, being bipolar can be an all-consuming challenge, requiring
          a lot of stamina and even more courage, so if you’re living with this
          illness and functioning at all, it’s something to be proud of, not
          ashamed of.”
          <br /> — Carrie Fisher
        </h3>
      </div>
      <div className="flex-container">
        <div className="flex-item__image">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/03/Carrie_Fisher_2013-a_straightened.jpg"
            alt="carrie fisher"
          />
        </div>
        <div className="flex-item">
          <p style={{ margin: 0 }}>
            <b>Carrie Fisher</b> <br />
            <i>October 21, 1956 - December 27, 2016</i>
            <br />
            American actress and writer. Known for her portrayal of Princess
            Leia in the Star Wars films and her career as a book and screenplay
            writer.
            <br />
            <br />
            Carrie Fisher was the daughter of singer Eddie Fisher and movie star
            Debbie Reynolds. Her parents went through a messy public divorse
            when she was a toddler, and she was largely raised by her mother
            (Bauer, 2022). She was known in her family as a bookworm, spending
            her childhood reading classical literature and writing poetry (Bose,
            2020). <br />
            <br />
            Fisher began her acting career at the age of 16, in a Broadway
            revival of <i>Irene.</i> Due to her role in this show and her
            burgeoning acting career, she dropped out of high school. She
            enrolled at London’s Central School of Speech and Drama and Sarah
            Laurence College, and left both before graduating (Bauer, 2022).
            Fisher made her film debut in <i>Shampoo</i> (1975), and was cast as
            Princess Leia Organa in the <i>Star Wars</i> franchise, which
            premiered two years later. She has since portrayed Leia in four
            other <i>Star Wars</i> films, the last being released posthumously
            (Bauer, 2022). <br />
            <br />
            In 1987, Fisher published her first novel,{" "}
            <i>Postcards From The Edge</i>, to critical acclaim. The book, which
            satirized real-life events such as her drug addiction, became a
            bestseller and award winner. Following this, Fisher became widely
            known in Hollywood for her screenwriting and working on other
            writers’ screenplays as a script doctor, including many of the
            scripts from the <i>Star Wars </i>franchise (Bauer, 2022). <br />
            <br />
            In December 2016, Fisher was reported to have stopped breathing due
            to a medical emergency on a transatlantic flight from London to Los
            Angeles. After four days in intensive care, Fisher passed away at
            the age of 60 (Bose, 2020).
          </p>
        </div>
      </div>
    </div>
  );
};
