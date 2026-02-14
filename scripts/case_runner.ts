import { fetchCaseStudies } from './case_study_agent';

(async () => {
    console.log('Starting Case Study Agent...');
    await fetchCaseStudies();
    console.log('Agent Completed.');
})();
