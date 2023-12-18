import { Link } from "react-router-dom";
import { Card, CardMedia, CardContent, Paper } from '@mui/material';
import OutlinedButton from '../Modules/Buttons/OutlinedButton.jsx'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Contact() {
    const contacts = [
        {
            name: 'Phone Number',
            contactDetails: '972-979-2846',
            textType: 'static',
            icon: <CallIcon sx={{ fontSize: 80}} />
        },
        {
            name: 'Email',
            contactDetails: 'nate88williams@gmail.com',
            textType: 'static',
            icon: <EmailIcon sx={{ fontSize: 80}} />
        },
        {
            name: 'LinkedIn',
            contactDetails: 'https://www.linkedin.com/in/nathan-williams-357a5b61',
            textType: 'link',
            icon: <LinkedInIcon sx={{ fontSize: 80}} />
        },
        {
            name: 'GitHub',
            contactDetails: 'https://github.com/nathan-s-williams',
            textType: 'link',
            icon: <GitHubIcon sx={{ fontSize: 80}} />
        }
    ]

    return (
        <div className='flex flex-col items-center w-screen h-screen'>
            <p className='italic text-3xl'>Please reach out and say... <span className='text-5xl'>Hi!</span></p>
            <div className='flex gap-10'>
                {contacts.map((contact) => {
                    return <Card sx={{maxWidth: '345'}} key={contact.name} variant='outlined'>
                        <CardMedia
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '15rem',
                                height: '10rem',
                                backgroundColor: '#faf9f6'
                            }}
                            alt={contact.name}>{contact.icon}
                        </CardMedia>
                        {contact.textType === 'link' ?
                            <CardContent className='flex justify-center'>
                                <OutlinedButton
                                    name={contact.name}
                                    link={contact.contactDetails}
                                    color='black'
                                    borderColor='black'
                                />
                            </CardContent>
                            :
                            <CardContent className='flex flex-col items-center'>
                                <div>{contact.name}</div>
                                <div>{contact.contactDetails}</div>
                            </CardContent>
                        }
                    </Card>
                })}
            </div>
            <Paper className='w-[50rem] h-[35rem]' elevation='10'>
                <form>
                    <label>Name</label>
                    <input type='text'></input>
                </form>
            </Paper>
        </div>
    );
}

export default Contact;