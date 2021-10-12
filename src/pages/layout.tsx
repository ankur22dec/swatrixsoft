import React, { useEffect, useState} from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { saveLog } from "../constants/API/api";
import { routes } from "../constants/router";
import Service from "./services/service";
import Hire from "./hire/hire";
import TopHierarchy from "./top-hierarchy/top-hierarchy";
import ConsultingMain from "./consulting-main/consulting-main";
import Testimonials from "./testimonials/testimonials";
import ContactUs from "./contact-us/contact-us";
import Technology from "./technology/technology";
import redirectJson from "../constants/redirect.json";
import "react-toastify/dist/ReactToastify.css";
import Industry from  './industry/industry';
import CustomHeader from '../components/header/header';
import Dashboard from  './dashboard/index';
import Footer from  '../components/footer/footer';
import SolutionInnerMain from  './solution-inner-main/solution-inner-main';
import SolutionMain from  './solutionsMain/solutionMain';
import SolutionInner from  './solutionInner/solution-inner';
import WrapToHelmet from  '../components/WrapToHelmet';
import HireMain from  './hire-main';
import IndustryMain from  './industry-main/industry-main';
import AboutUs from './about-us/about-us';
import Engagement from  './engagement/engagement';
import Advantages from  './advantages/advantages';
import Team from  './team/team';
import Portfolio from  './portfolio/portfolio';
import GlobalDelivery from  './global-delivery/global-delivery';
import Career from  './career/career';
import LifeCmarix from  './life-cmarix/life-cmarix';
import Privacy from  './privacy/privacy';
import Terms from  './terms/terms';
import Confidential from  './confidential/confidential';
import SiteMap from  './sitemap/sitemap';
import Awards from  './awards/awards';
import Anyvision from  './anyvision/index';
import PartnerShip from  './portnerShip/partnership';
import OndemandDetail from  './ondemand-detail';
import Infrastructure from  './infrastructure/infrastructure';
import Rogi from  './rogi';
import Crawfordwise from  './crawfordwise';
import Glitty from  './glitty';
import Iceland from  './iceland';
import Nutranext from  './nutranext';
import PageNotFound from  './page-not-found';
import ThankYou from  './thank-you';

////lazy loading
// const CustomHeader = lazy(() => import('../components/header/header'));
// const Dashboard =lazy(() => import('./dashboard/index'));
// const Footer = lazy(() => import('../components/footer/footer'));
// const SolutionInnerMain =lazy(() => import( './solution-inner-main/solution-inner-main'));
// const SolutionMain =lazy(() => import( './solutionsMain/solutionMain'));
// const SolutionInner =lazy(() => import('./solutionInner/solution-inner'));
// const WrapToHelmet =lazy(() => import( '../components/WrapToHelmet'));
// const HireMain =lazy(() => import('./hire-main'));
// const IndustryMain =lazy(() => import('./industry-main/industry-main'));
// const AboutUs =lazy(() => import('./about-us/about-us'));
// const Engagement =lazy(() => import( './engagement/engagement'));
// const Advantages =lazy(() => import( './advantages/advantages'));
// const Team =lazy(() => import( './team/team'));
// const Portfolio =lazy(() => import( './portfolio/portfolio'));
// const GlobalDelivery =lazy(() => import( './global-delivery/global-delivery'));
// const Career =lazy(() => import( './career/career'));
// const Lifeswatrixsoft =lazy(() => import( './life-cmarix/life-cmarix'));
// const Privacy =lazy(() => import( './privacy/privacy'));
// const Terms =lazy(() => import( './terms/terms'));
// const Confidential =lazy(() => import( './confidential/confidential'));
// const SiteMap =lazy(() => import( './sitemap/sitemap'));
// const Awards =lazy(() => import( './awards/awards'));
// const Anyvision =lazy(() => import( './anyvision/index'));
// const PartnerShip =lazy(() => import( './portnerShip/partnership'));
// const OndemandDetail =lazy(() => import( './ondemand-detail'));
// const Infrastructure =lazy(() => import( './infrastructure/infrastructure'));
// const Rogi =lazy(() => import( './rogi'));
// const Crawfordwise =lazy(() => import( './crawfordwise'));
// const Glitty =lazy(() => import( './glitty'));
// const Iceland =lazy(() => import( './iceland'));
// const Nutranext =lazy(() => import( './nutranext'));
// const PageNotFound =lazy(() => import( './page-not-found'));
// const ThankYou =lazy(() => import( './thank-you'));


function PrivateRoute(props: any) {
  return (
    <Route
      path={props.path}
      exact
      render={() => {
        return <WrapToHelmet data={props.data}>{props.component}</WrapToHelmet>;
      }}
    ></Route>
  );
}

let routeName: any = null;
function Layout(props: any) {
  // const form = localStorage.getItem("form");
  // if (!form && window.location.pathname === '/thank-you.html') {
  //   props.history.push("/");
  // }
  // if (form && window.location.pathname === '/thank-you.html') {
  //   localStorage.removeItem("form");
  // }
  let flag = window.location.pathname === "/inquiry.html";
  const [hide, setHide] = useState(flag);
  useEffect(() => {
    saveLog();
    props.history.listen((data: any) => {
      if (routeName === "/thank-you.html") {
        props.dispatch({ type: "SET_ALLOW", flag: false });
      }

      routeName = data.pathname;

      saveLog();
      if (window.location.pathname === "/inquiry.html") {
        setHide(true);
      } else {
        setHide(false);
      }
      window.scrollTo(0, 0);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getComponent(data: any) {
    if (data.type === "HOME") {
      return <Dashboard />;
    } else if (data.type === "SERVICE") {
      return <Service path={data.route} />;
    } else if (data.type === "SOLUTION") {
      return <SolutionInner path={data.route} />;
    } else if (data.type === "HIRE") {
      return <Hire path={data.route} />;
    } else if (data.type === "HIRE_MAIN") {
      return <HireMain path={data.route} />;
    } else if (data.type === "SERVICE_MAIN") {
      return <TopHierarchy path={data.route} />;
    } else if (data.type === "SERVICE_LANDING") {
      return <Technology path={data.route} />;
    } else if (data.type === "INDUSTRY") {
      return <Industry path={data.route} />;
    } else if (data.type === "SOLUTION_LANDING") {
      return <SolutionMain path={data.route} />;
    } else if (data.type === "SOLUTION_INNERT_MAIN") {
      return <SolutionInnerMain path={data.route} />;
    } else if (data.type === "CONSULTING_SOLUTION") {
      return <ConsultingMain />;
    } else if (data.type === "INDUSTRY_MAIN") {
      return <IndustryMain />;
    } else if (data.type === "SOLUTION_ON_DEMAND") {
      return <OndemandDetail path={data.route} />;
    } else if (data.type === "PORTFOLIO") {
      return <Portfolio />;
    } else if (data.type === "CONTACT") {
      return <ContactUs />;
    } else if (data.type === "ABOUTUS") {
      return <AboutUs />;
    } else if (data.type === "TEAM") {
      return <Team />;
    } else if (data.type === "ENGAGEMENT") {
      return <Engagement />;
    } else if (data.type === "GLOBAL_DELIVERY") {
      return <GlobalDelivery />;
    } else if (data.type === "INFRASTRUCTURE") {
      return <Infrastructure />;
    } else if (data.type === "LIFEATCMARIX") {
      return <LifeCmarix/>;
    } else if (data.type === "TESTIMONIAL") {
      return <Testimonials />;
    } else if (data.type === "CAREER") {
      return <Career />;
    } else if (data.type === "ADVANTAGE_LEVERAGE") {
      return <Advantages />;
    } else if (data.type === "AWARDS") {
      return <Awards />;
    } else if (data.type === "CONFIDENTIAL") {
      return <Confidential />;
    } else if (data.type === "TERMS") {
      return <Terms />;
    } else if (data.type === "PRIVACY") {
      return <Privacy />;
    } else if (data.type === "SITEMAP") {
      return <SiteMap />;
    } else if (data.type === "PARTNERSHIP") {
      return <PartnerShip />;
    } else if (data.type === "PORTFOLIO_ANYVISION") {
      return <Anyvision />;
    } else if (data.type === "PORTFOLIO_ROGI") {
      return <Rogi />;
    } else if (data.type === "PORTFOLIO_CRAW") {
      return <Crawfordwise />;
    } else if (data.type === "PORTFOLIO_ICELAND") {
      return <Iceland />;
    } else if (data.type === "PORTFOLIO_NUTRANEXT") {
      return <Nutranext />;
    } else if (data.type === "PORTFOLIO_GLITTY") {
      return <Glitty />;
    } else {
      return <Redirect to="/" />;
    }
  }

  return (
    // <Suspense fallback = {""}>
    <React.Fragment>
      {/* <Header /> */}
      <ToastContainer autoClose={2000} />
      <CustomHeader />
      <Switch>
        <Route
          path={`/thank-you.html`}
          exact
          render={() => {
            return <ThankYou />;
          }}
        ></Route>
        {routes.map((data: any, key: any) => {
          return (
            <Route
              path={`/${data.route}`}
              exact
              key={key}
              render={() => {
                return <WrapToHelmet data={data}>{getComponent(data)}</WrapToHelmet>;
              }}
            ></Route>
          );
        })}

        {
          redirectJson.map((data: any, key: any) => {
            return (
              <Route exact={true} key={key} path={data.old} render={() => <Redirect to={data.new} />} />
            );
          })
        }



        <PrivateRoute
          path={"/consulting-main.html"}
          isLogin={false}
          component={<ConsultingMain />}
        />
        <PrivateRoute
          path={"/consulting.html"}
          isLogin={false}
          component={<ConsultingMain />}
        />
        <PrivateRoute
          path={"/hire-page.html"}
          isLogin={false}
          component={<Hire />}
        />

        <PrivateRoute
          path={"/industries.html"}
          isLogin={false}
          component={<IndustryMain />}
        />
        <PrivateRoute
          path={"/ondemand-detail.html"}
          isLogin={false}
          component={<OndemandDetail />}
        />

        <Route
          path={"/"}
          exact={true}
          render={() => {
            return (
              <Dashboard />
            );
          }}
        />
        {/* <Route render={() => <Redirect to="/"/> }/> */}
        {/* <Route
                path={"**"}
                exact={true}
                render={() => {
                  return (
                    <PageNotFound />
                  )
                }}
              /> */}
        <Route render={() => {
          return <PageNotFound />;
        }} />
      </Switch>
      <Footer hide={hide} />
    </React.Fragment>
    // </Suspense>
  );
}

export default withRouter(Layout);
