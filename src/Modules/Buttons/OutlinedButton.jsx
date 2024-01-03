import PropTypes from "prop-types";
import Button from '@mui/material/Button';
function OutlinedButton({ name, link='', color, borderColor }) {

    return (
        link ?
            <Button size='medium' variant='outlined' href={link} sx={{color: {color}, borderColor: {borderColor}}}>
                {name}
            </Button>
            :
            <Button size='medium' variant='outlined' sx={{color: {color}, borderColor: {borderColor}}}>
                {name}
            </Button>
    );
}

OutlinedButton.propTypes = {
    name: PropTypes.string,
    link: PropTypes.string,
    color: PropTypes.string,
    borderColor: PropTypes.string,
}

export default OutlinedButton;