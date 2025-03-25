import { useScramble } from 'use-scramble'

type NavLinkProps = {
    name: string,
    link: string
}

const NavLink = ({ name, link }: NavLinkProps) => {

    const { ref, replay } = useScramble({
        text: name,
        speed: 0.9,
        tick: 2,
        step: 1,
        scramble: 3,
        seed: 0,
        overdrive: false,
        playOnMount: false,
    })

    return (
        <>
            <a href={link} className="hover:text-accent" ref={ref} onMouseOver={replay}>
                {name}
            </a>
        </>
    )
}

export default NavLink