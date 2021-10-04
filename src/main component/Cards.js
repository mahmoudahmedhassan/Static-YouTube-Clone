import { React } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillCheckCircle } from "react-icons/ai";
//============== import videos-images ==========
import droosonlinev1 from "../imgs/videos/droosonline-v-1.jpg";
import amirmounirv1 from "../imgs/videos/amir-mounir-v-1.jpg";
import codezillav1 from "../imgs/videos/codezilla-v-1.jpg";
import devlogsv1 from "../imgs/videos/devlogs-v-1.jpg";
import droosonlinev2 from "../imgs/videos/droosonline-v-2.jpg";
import elzerov1 from "../imgs/videos/elzero-v-1.jpg";
import elzerov2 from "../imgs/videos/elzero-v-2.jpg";
import elzerov3 from "../imgs/videos/elzero-v-3.jpg";
// import droosonlinev1 from '../imgs/videos/droosonline-v-1.jpg';
// import droosonlinev1 from '../imgs/videos/droosonline-v-1.jpg';
// import droosonlinev1 from '../imgs/videos/droosonline-v-1.jpg';

//============ import img-logo =================
import elzero from "../imgs/subscriptions/elzero.jpg";
import droosonline from "../imgs/subscriptions/droosonline.jpg";
import amirmounir from "../imgs/subscriptions/amir-mounir.jpg";
import codezilla from "../imgs/subscriptions/codezilla.jpg";
// import kimzcods from "../imgs/subscriptions/kimzcods.jpg";
// import hassounaacademy from "../imgs/subscriptions/hassouna-academy.jpg";
// import uniquecoderzacademy from "../imgs/subscriptions/unique-coderz-academy.jpg";
// import mohamedabusrea from "../imgs/subscriptions/mohamed-abusrea.jpg";

function Cards() {
    
  const data = {
    items: [
      {
        id: "1",
        videoBoster: droosonlinev1,
        logo: droosonline,
        title: "المذاكرة في رمضان",
        channel: "دروس أونلاين",
        views: "1,258,457 views",
        dateTime: "22 May 2018",
        videoTime: "11:23",
      },
      {
        id: "2",
        videoBoster: amirmounirv1,
        logo: amirmounir,
        title:
          "  هدايا في الدنيا والآخرة في انتظار من يصلي و٥ مصائب تصيب من لا يصلي لن تترك الصلاة بعدها  ",
        channel: " امير منير",
        views: "104,727 views",
        dateTime: "31 Mar 2021",
        videoTime: "10:52",
      },
      {
        id: "3",
        videoBoster: elzerov1,
        logo: elzero,
        title:
          "[Arabic] HTML & CSS Template One 2021 - #11 - Create About Section Part 2",
        channel: "  elzero web school",
        views: "6,700 views",
        dateTime: "31 Mar 2021",
        videoTime: "07:20",
      },
      {
        id: "4",
        videoBoster: elzerov2,
        logo: elzero,
        title: " إزاي تجيب مشاريع كتير تطبق عليها وتزود من مستواك في أي مجال",
        channel: " elzero web school",
        views: "6,700 views",
        dateTime: "31 Mar 2021",
        videoTime: "07:36",
      },
      {
        id: "5",
        videoBoster: codezillav1,
        logo: codezilla,
        title:
          "  تعلم البرمجة و كيف تبدأ في البرمجة - How to start programming",
        channel: "Codezilla  ",
        views: "340,780 views",
        dateTime: "Premiered on 13 Aug 2020",
        videoTime: "14:1",
      },
      {
        id: "6",
        videoBoster: devlogsv1,
        logo: droosonline,
        title: "  مشروع برمجة Todolist App | javascript",
        channel: "Youssef Devlogs  ",
        views: "597 views",
        dateTime: "Premiered on 28 Jan 2021",
        videoTime: "1:48:22",
      },
      {
        id: "7",
        videoBoster: droosonlinev2,
        logo: droosonline,
        title: "  أشهر مبرمج عربي، لم يدرس البرمجة | أسامة الزيرو",
        channel: "دروس أونلاين",
        views: "831,278 views",
        dateTime: "30 Oct 2020",
        videoTime: "1:9:11",
      },
      {
        id: "8",
        videoBoster: elzerov3,
        logo: elzero,
        title:
          "  مقدمة عن البرمجة #01 - يعني ايه برمجة ؟ وايه متطلبات الكمبيوتر علشان اتعلم ؟",
        channel: " elzero web school ",
        views: "167,102 views",
        dateTime: "24 Nov 2020",
        videoTime: "06:11",
      },
      {
        id: "9",
        videoBoster: droosonlinev1,
        logo: droosonline,
        title: "المذاكرة في رمضان",
        channel: "دروس أونلاين",
        views: "1,258,457 views",
        dateTime: "22 May 2018",
        videoTime: "11:23",
      },
      {
        id: "10",
        videoBoster: droosonlinev1,
        logo: droosonline,
        title: "المذاكرة في رمضان",
        channel: "دروس أونلاين",
        views: "1,258,457 views",
        dateTime: "22 May 2018",
        videoTime: "11:23",
      },
      {
        id: "11",
        videoBoster: droosonlinev1,
        logo: droosonline,
        title: "المذاكرة في رمضان",
        channel: "دروس أونلاين",
        views: "1,258,457 views",
        dateTime: "22 May 2018",
        videoTime: "11:23",
      },
    ],
  }

  console.log(data.items);
  return (
    <div className="Cards">
      <Container fluid>
        <Row>
          {data.items.map((item) => (
            <Col xs={12} sm={6} md={4} lg={3}>
              <div className="card">
                <div className="card-head">
                  <img src={item.videoBoster} alt={item.title} height="200px" />
                  <img src={item.logo} alt={item.logo} />
                  <span>{item.videoTime}</span>
                </div>
                <div className="card-content">
                  <p className="card-content-title"> {item.title} </p>
                  <p className="card-content-channel">
                    {item.channel}{" "}
                    <span>
                      <AiFillCheckCircle />
                    </span>
                  </p>
                  <span className="views">{item.views}</span> {"."}
                  <span className="time">{item.dateTime}</span>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Cards;
