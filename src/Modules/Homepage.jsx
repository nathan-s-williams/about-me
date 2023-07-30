import reactLogo from '../assets/react.svg'
function Homepage() {
    return (
        // Consider subtracting the nav and footer heights from h-screen
        // Fix the min width. Works with concrete lengths in px but not others.
        <div className='flex justify-center items-center h-screen gap-x-20'>
            <article className='flex flex-col w-4/12'>
                <p className='text-7xl'>About</p>
                <p className='mt-5 text-justify'>
                    As a recent graduate with a Bachelor of Science in Computer Science, I am a skilled software engineer proficient in many object-oriented and web programming languages. I have previous experience in the Financial Services industry where I've honed my data analysis skills, working with large databases using SQL and various visualization software. Additionally, I am knowledgeable in Machine Learning and Big Data technologies where I've built and trained various ML programs. As a collaborative team player, I have worked with many cross-functional teams to deliver high-quality products. With a passion for technology and a commitment to continuous learning, I am excited to contribute my skills to a software engineering role where I can continue to grow and develop my expertise.
                </p>
            </article>
            <img className='h-fit w-4/12 min-w-min min-h-min' src={reactLogo} alt='Nathan Williams'></img>
        </div>
    );
}

export default Homepage;