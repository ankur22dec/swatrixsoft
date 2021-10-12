import enterprisesoftware from "../assets/images/home/icons/enterprisesoftware.svg";
import dotnet from "../assets/images/home/icons/dotnet.svg";
import ondemand from "../assets/images/home/icons/on-demand.svg";
import android from "../assets/images/home/icons/android.svg";
import iphone from "../assets/images/home/icons/ios.svg";
import flutter from "../assets/images/home/icons/fluttr.svg";
import ionic from "../assets/images/home/icons/ionic.svg";
import php from "../assets/images/home/icons/php.svg";
import meanstack from "../assets/images/home/icons/meanstack.svg";
import mernstack from "../assets/images/home/icons/mernstack.svg";
import fullstack from "../assets/images/home/icons/fullstack.svg";
import seo from "../assets/images/home/icons/seo.svg";
import uiux from "../assets/images/home/icons/uiux.svg";
import woocommerce from "../assets/images/home/icons/woocommerce.svg";
import shopify from "../assets/images/home/icons/shopify.svg";
import magento from "../assets/images/home/icons/magento.svg";
import wordpress from "../assets/images/home/icons/wordpress.svg";
import ecommerceService from "../assets/images/home/ecommece.svg";
import mobileService from "../assets/images/home/mobile-app.svg";
import enterprise from "../assets/images/home/enterprise.svg";
import website from "../assets/images/home/website-dev.svg";
import brandingService from "../assets/images/home/branding.svg";
import testimonial1 from "../assets/images/testimonials/1.png";
import testimonial2 from "../assets/images/testimonials/2.png";
import testimonial3 from "../assets/images/testimonials/3.png";
import testimonial4 from "../assets/images/testimonials/4.png";
import testimonial5 from "../assets/images/testimonials/5.png";
import testimonial6 from "../assets/images/testimonials/6.png";

export default {
    sliderContent: [
        {
            title:`
                <strong class="bigger-font">Enterprise</strong>
                <strong class="small-font">Software</strong>
                <br /> DEVELOPMENT
            `,
            name: 'Enterprise Software development',
            description: "When you want to bring new records on ground, working with any off-the-shelf software will not make your game go further. With our custom enterprise software development services we map all the challenges you have and deliver groundbreaking software. We complete your digital ecosystem with power-pack fully functional, featured custom software. ",
            link: "software-development.html",
            label: "Experience. Execution. Excellence.",
            image: enterprise,
            imageAlt: 'Enterprise custome software development company',
            technology: [
                {
                    image: enterprisesoftware,
                    url:'software-development.html'
                },
                {
                    image: dotnet,
                    url:'aspdotnet-development.html'
                },
                {
                    image: ondemand,
                    url:'on-demand-app-development.html'
                }
            ]
        },
        {
            title:`
                <strong class="bigger-font">Mobile</strong>
                <strong class="small-font">Application</strong>
                <br /> DEVELOPMENT
            `,
            name: 'Mobile Application Development',
            description: "We start the transformation beyond physical screens to develop experiences that are mobile. With different native applications or cross-platform apps we craft experiences that WOW on any device. The mobile app developers at swatrixsoft are dedicated to revolutionize your business with creative best practices that bring seamless engagement and consistent interactions of users. ",
            link: "mobile-app-development.html",
            label: "Experience. Execution. Excellence.",
            image: mobileService,
            imageAlt: 'Mobile application development',
            technology: [
                {
                    image: iphone,
                    url:'iPhone-app-development.html'
                },
                {
                    image: android,
                    url:'android-app-development.html'
                },
                {
                    image: flutter,
                    url:'flutter-app-development.html'
                },
                {
                    image: ionic,
                    url:'ionic-app-development.html'
                }
            ]
        },
        {
            title:`
                <strong class="bigger-font">Website</strong>
                <br /> DEVELOPMENT
            `,
            name: 'Website Development',
            description: "Websites are must have for any business. They are your global office, show rooms or shop depending on your business -  seamlessly working 24/7/365. They convey your complete brand value, core offerings and entire story.  We help you build powerful websites integrated with seamless navigations and functionalities to help you reach large audiences quickly and regularly.",
            link: "web-development.html",
            label: "Experience. Execution. Excellence.",
            image: website,
            imageAlt: 'Website development services',
            technology: [
                {
                    image: php,
                    url:'php-development.html'
                },
                {
                    image: meanstack,
                    url:'hire-mean-stack-developers.html'
                },
                {
                    image: mernstack,
                    url:'hire-mern-stack-developers.html'
                },
                {
                    image: fullstack,
                    url:'hire-fullstack-developers.html'
                }
            ]
        },
        {
            title:`
                <strong class="bigger-font">Branding</strong>
                <strong class="small-font">And</strong>
                <br /> DESIGN
            `,
            name: 'Branding and Design ',
            description: "Design Driven Engineering is what we provide. Our UI and UX designers work with you to deliver a user experience that resonates excellently with the users. Our Design services are strategic, guaranteed, and one-of-a-kind making competition trivial. We take pride in our craft and design a story that is beyond just another average design. Are you ready to thrive with your own story? We enable your brand to evolve with our design fundamentals.",
            link: "ui-ux-design.html",
            label: "Experience. Execution. Excellence.",
            image: brandingService,
            imageAlt: 'UX/UI Design Services',
            technology: [
                {
                    image: seo,
                    url:'search-engine-optimization.html'
                },
                {
                    image: uiux,
                    url:'ui-ux-design.html'
                }
            ]
        },
        {
            title:`
                <strong class="bigger-font">E-Commerce</strong>
                <br /> APPLICATIONS
            `,
            name: 'E-Commerce Applications',
            description: "Adapt and outpace the thriving competition. We modernize and craft digital platforms for B2B and B2C companies with our full-cycle eCommerce development services. With expertise in latest technology, we have created a reputation for building amazing stories for eCommerce companies enabling them to scale, drive growth for longtime. ",
            link: "ecommerce-development.html",
            label: "Experience. Execution. Excellence.",
            image: ecommerceService,
            imageAlt: 'eCommerce Development Services',
            technology: [
                {
                    image: magento,
                    url:'magento-development.html'
                },
                {
                    image: wordpress,
                    url:'wordpress-development.html'
                },
                {
                    image: woocommerce,
                    url:'woocommerce-development.html'
                },
                {
                    image: shopify,
                    url:'shopify-development.html'
                }
            ]
        }
    ],
    domainExpert: [
        {
            image: 'icon-industry-ecommerce',
            title: 'Ecommerce',
            route: 'custom-ecommerce-platforms-development.html',
        },
        {
            image: 'icon-industry-healthcare',
            title: 'Healthcare',
            route: 'healthcare.html',
        },
        {
            image: 'icon-industry-real-estate',
            title: 'Real Estate',
            route: 'real-estate.html',
        },
        {
            image: 'icon-industry-media',
            title: 'Media',
            route: 'media-and-entertainment.html',
        },
        {
            image: 'icon-industry-finance',
            title: 'Finance',
            route: 'finance-and-banking.html',
        },
        {
            image: 'icon-industry-insurance',
            title: 'Insurance',
            route: 'insurance.html',
        },
        {
            image: 'icon-industry-security',
            title: 'Security',
            route: 'security.html',
        },
        {
            image: 'icon-industry-education',
            title: 'Education',
            route: 'elearning.html',
        },
        {
            image: 'icon-industry-sports',
            title: 'Sports',
            route: 'sports.html',
        },
        {
            image: 'icon-industry-logistics',
            title: 'Logistic',
            route: 'logistic-and-transportation.html',
        },
        {
            image: 'icon-industry-agritech',
            title: 'Agritech',
            route: 'agritech.html',
        },
        {
            image: 'icon-industry-food',
            title: 'Food',
            route: 'food-and-beverages.html',
        }
    ],
    reviews: [
        {
            title: `I have been working with swatrixsoft from last 3 years and I have to say from the last 10 years of doing this, we haven’t found a better partner for outsourcing. I have developed several mobile apps with them for my clients, some of them are eCommerce websites with concurrent 4000+ user capacity and some are enterprise Microsoft, .NET custom software. I like their overall approach to deliver a good business project and it’s not just write a piece of code they are very relationship oriented.`,
            name: 'Mr. Michael',
            position: 'www.jaraplus.com',
            type: 'Enterprise Mobile Apps',
            url: 'Olputp_dtpE',
            alt: "swatrixsoft client video testimonials1",
            image: testimonial1
        },
        {
            title: `I have been working with swatrixsoft for over a year now and together we have partnered on very interesting projects. The teams worked together for Microsoft .net for security based software upgrade. This was not a project without its challenges, communication with third-party tools like cameras, and other security sensors...`,
            name: 'Mr. Aaron',
            position: 'CEO & CTO',
            type: 'Enterprise Ecommerce Website',
            url: '7JSMdEPWcsM',
            alt: "swatrixsoft client video testimonials2",
            image: testimonial2
        },
        {
            title: `I came to swatrixsoft with a badly messed up mobile app, when I was let down by a local vendor. The app was in such bad shape that I was recommended to scrap it. I re-created the entire mobile app from scratch with less than 50% price of my local vendor. Their excellent technical skills, fluent communication and around the clock availability helped me to deliver the successful app. `,
            name: 'Mr. Rob',
            position: 'Marketing Director',
            type: 'Custom Mobile Apps',
            url: 'Y4p6xcPTeI4',
            alt: "swatrixsoft client video testimonials3",
            image: testimonial3
        },
        {
            title: `I own a digital marketing agency in London. I was being recommend from swatrixsoft from a friend of mine who have used their service. We have worked with them on a social marketing project, which required densely custom PHP implementation as well as cloud configuration as well a mobile app. Thank you for going extra miles and doing whatever it takes under pressure and delivering great work. `,
            name: 'Ms Stephanie',
            position: 'CTO',
            type: 'Social Marketing Application',
            url: 'de3mk1cLZh8',
            alt: "swatrixsoft client video testimonials4",
            image: testimonial4
        },
        {
            title: `We are based in United Kingdom, swatrixsoft has executed a lot of IT projects for us since 2010 and each time they have delivered with perfection and a good project. So, we highly recommend them and endorse them for anyone who need their services. `,
            name: 'Mr. Victor',
            position: 'Marketing Director',
            type: 'Custom Website',
            url: 'E0vyTyojpEQ',
            alt: "swatrixsoft client video testimonials5",
            image: testimonial5
        },
        {
            title: `We were looking for a reliable web developer that understands our vision and could translate this into a website that fitted our aim, we talked to a few companies and there was always something that lacked. swatrixsoft was very responsive and efficient, asking us right questions and answering all of ours. From the initial meeting that seemed a complete package and made us feel it is....`,
            name: 'Ms. Sabrina',
            position: 'Marketing Director',
            type: 'Enterprise Ecommerce Website',
            url: 'qrXQmcFC0nk',
            alt: "swatrixsoft client video testimonials6",
            image: testimonial6
        }
    ],
    blogsTitle: `We Have A Lot of <span>Experience</span> <br />(and Cautionary Tales) to <span>Write</span> About`
}