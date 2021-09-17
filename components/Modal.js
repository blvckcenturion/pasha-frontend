import { useEffect} from 'react'
import gsap from 'gsap'
const Modal = ({ children, isOpen,setIsOpen}) => {

    useEffect(() => {
        if (isOpen) {
            const tl = gsap.timeline()
            tl
                .to('body', { duration: 0, overflow: 'hidden', duration: 0 })
                .fromTo('.modal-bg', { opacity: 0, background: 'transparent' }, { opacity: 0.5, duration: 0.5, background: 'rgba(0,0,0,0.8)', ease: 'power3.inOut' })
                .fromTo('.modal-card', { scale: 0, opacity: 0, }, { scale: 1, opacity: 1, duration: 0.5, ease: 'power3.inOut' })
        } else {
            
        }
    }, [isOpen])

    const handleModal = () => {
        const tl = gsap.timeline()
        tl
            .to('.modal-card', { scale: 0, opacity: 0, duration: 0.5, ease: 'power3.inOut' })
            .to('.modal-bg', { opacity: 0, background: 'transparent', ease: 'power3.inOut', duration: 0.5 })
            .to('body', { duration: 0, overflow: 'auto', duration: 0 })
            .then(() => setIsOpen(false))
    }

    if (isOpen) return (
        <div className="modal">
            <div className="modal-bg" onClick={ handleModal}/>
            <div className="modal-container">
                <div className="modal-card">{ children }</div>
            </div>
        </div>
    )
    return null
}

export default Modal
