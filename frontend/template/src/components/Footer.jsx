import { useNavigate } from 'react-router-dom'

function Footer() {
    const navigate = useNavigate()

    return (
        <footer className="bottom-footer" style={{ cursor: 'pointer', border: '1px solid #ddd', height: '50px', }}>
            <h1>footer</h1>
        </footer>
    )
}

export default Footer
