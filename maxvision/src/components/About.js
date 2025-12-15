import "../App.css"

function About() {
  return (
    <div className="page4">
      <div id="about">
        <div className="about-top">
          <img
            src="https://images.unsplash.com/photo-1589176449149-71f7ea77ec25?w=600&auto=format&fit=crop&q=60"
            alt="About Max Vision"
          />
        </div>

        <div className="about-down">
          <p>
            Max Vision is committed to providing quality eyewear with a focus on
            clarity, comfort, and contemporary design. We aim to make reliable
            eye care accessible while offering a wide range of frames that suit
            different styles and preferences.
            <br />
            <br />
            Our approach is simple: honest service, transparent pricing, and
            products that meet everyday needs. At Max Vision, we value trust and
            work to ensure that every customer receives accurate guidance and a
            comfortable shopping experience.
            <br />
            <br />
            With a blend of modern designs and dependable optical standards, Max
            Vision continues to deliver eyewear that helps you see clearly and
            look confident.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
