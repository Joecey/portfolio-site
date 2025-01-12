import reactLogo from '../assets/techLogos/react.svg'
type TechTabProps = {
    name: string
    motionDelay: string
    svgData: ImageMetadata
}
// TODO: add nice animations here https://medium.com/@jacobvejlinjensen/how-to-create-a-smooth-appear-on-scroll-transition-with-tailwind-css-and-react-82f2a32ab295
export default function TechTab({ name, motionDelay, svgData }: TechTabProps) {
    return (
        <div
            id={`icon-${name}`}
            className={`motion-preset-focus-sm flex w-fit justify-center  gap-1 rounded-full bg-myTheme-secondary/30 px-3 py-1 shadow-lg ring-1 ring-black/5 ${motionDelay} `}
        >
            <img src={svgData.src} width="24" height="24" alt="react-logo" className="max-h-6" />

            {name}
        </div>
    )
}
