import GithubIcon from './github'
type TechTabProps = {
    name: string
}
// TODO: add nice animations here https://medium.com/@jacobvejlinjensen/how-to-create-a-smooth-appear-on-scroll-transition-with-tailwind-css-and-react-82f2a32ab295
export default function TechTab({ name }: TechTabProps) {
    return (
        <div
            id={`icon-${name}`}
            className="flex  w-fit gap-1 rounded-full bg-myTheme-secondary/75 px-3 py-1"
        >
            <GithubIcon />
            {name}
        </div>
    )
}
