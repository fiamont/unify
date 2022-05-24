import Link from 'next/link'

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>Oooops...</h1>
            <h2>Denna sida kan inte hittas.</h2>
            <p>Gå tillbaka till <Link href="/" passHref><a>startsidan</a></Link></p>
        </div>
    );
}
 
export default NotFound;
