import { type ReactNode } from 'react'

type WorkMilestoneProps = {
    startPeriod: string
    endPeriod?: string
    occupation?: string
    description: string
    emoji?: string
    projectLink?: string
}

export default function WorkMilestone({
    startPeriod,
    endPeriod = 'Present',
    occupation,
    description,
    emoji,
    projectLink,
}: WorkMilestoneProps) {
    return (
        <MilestoneWrapper projectLink={projectLink}>
            {occupation && emoji && (
                <h3 className="font-body font-bold">{`${occupation} ${emoji}`}</h3>
            )}
            <p className="mt-1">{description}</p>
        </MilestoneWrapper>
    )
}

type MilestoneWrapperProps = {
    children: ReactNode
    projectLink?: string
}
// this is a cool example as to how children wrappers work in React
const MilestoneWrapper: React.FC<MilestoneWrapperProps> = ({ children, projectLink }) => {
    if (projectLink) {
        return (
            <a
                href={projectLink}
                target="_blank"
                className="rounded-md bg-myTheme-secondary/10 p-2 transition-all hover:bg-myTheme-accent/20"
            >
                {children}
            </a>
        )
    } else {
        return (
            <div className="rounded-md bg-myTheme-secondary/10 p-2 transition-all hover:bg-myTheme-accent/20">
                {children}
            </div>
        )
    }
}
