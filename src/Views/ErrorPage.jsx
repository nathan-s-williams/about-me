import { Link } from 'react-router-dom';
function ErrorPage() {
    return (
        <div className='flex flex-col justify-center items-center min-w-full min-h-screen'>
            <p className='text-5xl'>Oops!</p><br/>
            <p className='text-xl'>
                You probably didn&apos;t mean to come here..<br/>
                Let&apos;s just mosey on back to the <Link className='text-blue-400' to='/'>Homepage</Link>.
            </p>
        </div>
    );
}

export default ErrorPage;