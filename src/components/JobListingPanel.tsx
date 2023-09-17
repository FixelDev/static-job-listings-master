import React, {useState} from 'react'
import JobCard from './JobCard'
import data from './../data.json'

type Props = {
    onTagClick:(tag:string) => void
    activeFilters: string[]
}

type JobData = typeof data[0];

type Job = {
    id: number
    company: string
    logo: string
    isNew: boolean
    isFeatured: boolean
    position: string
    postedAt: string
    contract: string
    location: string 
    tags:string[]
}

function JobListingPanel(props:Props) {    



    const[jobs, setJobs] = useState<Job[]>(data.map(jobData =>{
        return(
            {
                id: jobData.id,
                company: jobData.company,
                logo: jobData.logo,
                isNew: jobData.new,
                isFeatured: jobData.featured,
                position: jobData.position,
                postedAt: jobData.postedAt,
                contract: jobData.contract,
                location: jobData.location,
                tags:generateJobTags(jobData)
            }
        )
    }))

    const filteredJobs = props.activeFilters.length === 0 ? jobs : jobs.filter(job => checkIfJobHasSelectedTags(job.tags))

    const jobElements:JSX.Element[] = filteredJobs.map(job =>{

        return (
            <JobCard
            key={job.id}
            logo={job.logo}
            company={job.company}
            isNew={job.isNew}
            isFeatured={job.isFeatured}
            position={job.position}           
            postedAt={job.postedAt}
            contract={job.contract}
            location={job.location}
            tags={job.tags}
            onTagClick={props.onTagClick}
        />
        )       
    })

    function checkIfJobHasSelectedTags(jobTags:string[]):boolean{
        return props.activeFilters.every(filter => jobTags.includes(filter))
    }


    function generateJobTags(job:JobData):string[]{
        let tags:string[] = [];

        tags.push(job.role);
        tags.push(job.level);
        tags = tags.concat(job.languages)
        tags = tags.concat(job.tools)

        return tags;
    }



    return (
        <section className="job-listing-panel">
            {jobElements}
        </section>
    )
}

export default JobListingPanel