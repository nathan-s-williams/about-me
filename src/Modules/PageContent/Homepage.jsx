import reactLogo from '../../Assets/react.svg'
import Paper from '@mui/material/Paper'
function Homepage() {
    return (
        <div className='flex justify-center items-center min-h-screen min-w-screen overflow-scroll gap-x-20'>
            <article className='flex flex-col shrink-0 w-[500px]'>
                <p className='text-7xl text-right'>About</p>
                <p className='mt-5 text-justify'>
                    As a recent graduate with a Bachelor of Science in Computer Science, I am a skilled software engineer proficient in many object-oriented and web programming languages. I have previous experience in the Financial Services industry where I've honed my data analysis skills, working with large databases using SQL and various visualization software. Additionally, I am knowledgeable in Machine Learning and Big Data technologies where I've built and trained various ML programs. As a collaborative team player, I have worked with many cross-functional teams to deliver high-quality products. With a passion for technology and a commitment to continuous learning, I am excited to contribute my skills to a software engineering role where I can continue to grow and develop my expertise.
                </p>
            </article>
            <Paper className='shrink-0' elevation={8} sx={{borderRadius:5}}>
                <img className='w-[400px] h-fit' src={reactLogo} alt='Nathan Williams' />
            </Paper>

        </div>
    );
}

export default Homepage;