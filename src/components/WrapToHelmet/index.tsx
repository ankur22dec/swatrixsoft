import React from 'react';
import { Helmet } from 'react-helmet';
import location from "../../assets/images/infrastructure-1.jpg";

const defaultTitle  = 'Enterprise Software | Mobile Apps | Web app Development Company India and USA';
const defaultDescription = 'CMARIX is a leading technology Outsourcing company with CMMi level 3, ISO 27001, ISO 9001:2015 certifications in India and US that specialize in, Enterprise Software, Mobile Apps and Custom Web Application Development with clients across the globe.';
const defaultMetaKeywords= 'Web App Development Company India and USA, Enterprise Software'
const defaultRoute = 'https://www.cmarix.com/';
const ogUrl = 'https://www.cmarix.com'

///
/// Adding meta data in code
///
function WrapToHelmet(props: any) {
	const title = props.data ? props.data.metaTitle || defaultTitle : defaultTitle;
	const description = props.data ? props.data.metaDescription || defaultDescription : defaultDescription;
	const metaKeywords = props.data ? props.data.metaKeywords || defaultDescription : defaultMetaKeywords;
	const route = props.data ? (defaultRoute + props.data.route) || defaultRoute : defaultRoute;

	const ogImage = props.data ? props.data.ogImage || location : location;
	const faqScript = props.data && props.data.faqScript ? props.data.faqScript : null;
	const conversionScript = props.data && props.data.conversionScript ? props.data.conversionScript : null;
	// console.log(conversionScript)
	return (
		<>
			<Helmet>
				<title>{title}</title>
				<meta name="title" content={title} />
				<meta name="description" content={description} />
				<meta name="keywords" content={metaKeywords}/>

				<meta property="og:url" content={route}/>
				<meta property="og:title" content={title} />
				<meta property="og:description" content={description} />
				<meta property="og:image" content={`${ogUrl}${ogImage}`} />
				
				<meta name="twitter:card" content="image" data-react-helmet="true"></meta>

				<link rel="canonical" href={route} />
				{faqScript && <script type='application/ld+json'> 
					{faqScript}
				</script>}

				{conversionScript && <script type='application/ld+json'> 
					{conversionScript.toString()}
				</script>}
			</Helmet>
			{props.children}
		</>
	);
}

export default WrapToHelmet;