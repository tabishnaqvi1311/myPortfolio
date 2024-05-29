import { useScramble } from 'use-scramble'

type NavLinkProps = {
    name: string,
}

const NavLink = ({ name }: NavLinkProps) => {

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
        <div>
            <a href={`#${name}`} className="hover:text-accent" ref={ref} onMouseOver={replay}>
                {name}
            </a>
        </div>
    )
}

export default NavLink