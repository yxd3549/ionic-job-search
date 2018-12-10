import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MockApiService {

    data = {
        'id': '126c5b80-d626-11e8-9e0e-830fc841cb6b',
        'type': 'Full Time',
        'url': 'https://jobs.github.com/positions/126c5b80-d626-11e8-9e0e-830fc841cb6b',
        'created_at': 'Mon Oct 22 18:13:39 UTC 2018',
        'company': 'Resonate Capital, LLC',
        'company_url': null,
        'location': 'San Francisco, CA',
        'title': 'Data Engineer, Hedge Fund',
        'description': '\u003cp\u003eABOUT THE FIRM\u003c/p\u003e\n\u003cp\u003eResonate Capital is an SEC registered long/short equity investment firm headquartered in San Francisco. Resonate Capital’s “next-generation” investment research approach is built off the ability to extract information from the growing digital footprint of the global consumer. The Resonate Capital Investment Team utilizes non-traditional data collection methods to detect how various technologies are disrupting “old world” business and naturally evolving into new business models.\u003c/p\u003e\n\u003cp\u003eThe firm’s guiding business principles reflect our basic values and guide our daily actions and investment activities:\u003c/p\u003e\n\u003cp\u003e-Build a successful asset management business centered on the highest ethical standards, integrity, creativity, hard work, and due diligence.\n-Build the next generation data-driven, alpha generating research platform.\n-Build a track record that is respected for its consistency and quality of return characteristics.\n-Focus on performance, not maximizing assets. When we create value for our investors, our own success will follow.\n-Create a structure that aligns our personal interests directly with our investors’ interests.\n-Communicate regularly with investors in an open, direct, and honest manner.\u003c/p\u003e\n\u003cp\u003eTHE OPPORTUNITY\u003c/p\u003e\n\u003cp\u003eThis is an opportunity to join a cutting edge firm at one of the most exciting frontiers in investment research and management. Resonate is seeking an individual who embraces the firm’s focus on upholding our fiduciary duty to our clients and maintaining the highest ethical standards. We are men and women of integrity who place a premium on hard work, creativity, and diligence in the pursuit of getting the job done for our clients. Responsibilities include, but are not limited to:\u003c/p\u003e\n\u003cp\u003e-Leading all infrastructure, software, and technology initiatives\n-Developing software for the collection and processing of data that can inform investment decisions\n-Having full control over the technology stack\n-Web harvesting (scraping) unstructured data and helping convert it into structured data\n-Advancing existing initiatives and generating new research opportunities for non-traditional data collection\n-Managing our internal network and software/hardware\n-Presenting our technology and research initiatives to potential investors on a regular basis\u003c/p\u003e\n\u003cp\u003eREQUIREMENTS\u003c/p\u003e\n\u003cp\u003e-Bachelor’s degree in computer science, engineering, math, or related subject - master’s or PhD a plus\n-Be a solid coder – we use Python and SQL mostly, but being able to learn any new technology is most important\n-Ability to take ownership of our entire architecture – experience with AWS and evaluating cloud services is important\n-Extreme attention to detail, and being comfortable working in a high-paced environment\n-Self-motivated and capable of working independently – you will have a very high level of responsibility very quickly\n-High level of creativity, imagination, and intellectual curiosity\n-Comfort with financial markets – you don’t have to be an expert, but be willing to learn\n-Communication skills to work with everyone from management to potential investors\u003c/p\u003e\n',
        'how_to_apply': '\u003cp\u003ePlease send your resume to \u003ca href="mailto:resume@resonatecap.com"\u003eresume@resonatecap.com\u003c/a\u003e\u003c/p\u003e\n',
        'company_logo': null
    };

    constructor() {
    }

    getData() {
        return this.data;
    }
}
