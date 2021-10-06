import { Col, Row, Button } from 'reactstrap';
import Styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={`app-text-color ph-50 ${Styles.homeMain}`}>
      <Row>
        <Col xl="5" lg="5" md="5" sm="12" xs="12">
          <div className={Styles.homePic}>
            <img
              src="/my-pic.jpg"
              alt="Surjeet Bhadauriya Pic"
              height="263"
              width="263"
              style={{ borderRadius: '1000px', marginLeft: '1px', marginTop: '1px' }}
            />
          </div>
        </Col>
        <Col>
          <div className="home-title-16">Full Stack Developer</div>
          <div className={Styles.homeName}>Surjeet Bhadauriya</div>
          <p className={Styles.homeBio}>Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis, risus non condimentum gravida, odio mauris ullamcorper felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a placerat sapien pretium eu.</p>
          <div className="mt-4">
            <Button className="c-btn-primary">Download CV</Button> &nbsp;&nbsp;
            <Button className="c-btn-link">Contact</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}
