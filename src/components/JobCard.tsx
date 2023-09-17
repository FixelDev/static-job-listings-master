import React, {useState} from 'react'
import Badge from './Badge'
import Tag from './Tag'
import {nanoid} from 'nanoid'

type Props = {
    company: string
    logo: string
    isNew:boolean
    isFeatured:boolean
    position:string
    postedAt:string
    contract:string
    location:string
    tags:string[]
    onTagClick:(tag:string) => void
}

function JobCard(props:Props) {
    type Tag = JSX.Element;
    
    const[tags, setTags] = useState<string[]>(props.tags);

    const tagElements:Tag[] = tags.map(tag =>{
        return (
            <Tag
                key={nanoid()}
                name={tag}
                onClick={props.onTagClick}
            />
        )
    })

    const featuredStyle = {
        borderLeft: '4px solid hsl(180, 29%, 50%)',
    }

    return (
        <div className="job-card card flex" style={props.isFeatured ? featuredStyle : {}}>
            <img src={props.logo} alt="company-logo" className="company-logo" />
            <div className="job-card-content">
                <div className="job-card-content-header flex">
                    <p className="job-company">{props.company}</p>
                    {props.isNew && <Badge name='new'/>}
                    {props.isFeatured && <Badge name='featured'/>}
                </div>

                <p className="job-position">{props.position}</p>
                <ul className="job-card-info flex">
                    <li className="job-card-info-element job-posted-at">{props.postedAt}</li>
                    <li className="job-card-info-element job-contract">{props.contract}</li>
                    <li className="job-card-info-element job-location">{props.location}</li>
                </ul>
            </div>
            <div className="job-card-tags flex">
                {tagElements}
            </div>
        </div>
    )
}

export default JobCard